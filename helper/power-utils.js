// src/utils/power-utils.js


import {dbmToMw, normalizeDuration} from "./energy-helper";
import {POWER_PROFILES_VALUE, SOLAR_PROFILES} from "../constant/energy-data";
import {getPowerFromLux} from "./solar-utils";

/**
 * Generate a time-segmented power series from consumption & harvesting
 * @param {Array} consumption - array of consumption items
 * @param {Array} harvesting - array of harvesting items
 * @param {string} chipKey - key in POWER_PROFILES
 * @param {string} solarKey - key in SOLAR_PROFILES
 * @returns {Array} series of { time, consumption, harvesting }
 */
export function generatePowerSeries(consumption, harvesting, chipKey, solarKey, powerProfileValue, solarProfileValue, area) {
    let tC = 0;
    const consSegs = consumption?.map(item => {
        const dur = normalizeDuration(item.duration, item.unit);
        const p = powerProfileValue?.[chipKey]?.[item?.stage] || 0;
        const seg = {start: tC, end: tC + dur, power: p};
        tC += dur;
        return seg;
    });

    let tH = 0;
    const harSegs = harvesting.map(item => {
        const dur = normalizeDuration(item.duration, item.unit);
        let p = 0;
        if (item?.stage === 'solarCell') {
            const profile = solarProfileValue[solarKey] || {};
            const norm = Array.isArray(profile.pwr_output)
                ? getPowerFromLux(profile.pwr_output, item.lux || 0)
                : 0;
            // p = norm * (profile.area || 0);
            p = norm * (area || 0);
        } else if (item.stage === 'rfHarvester') {
            p = dbmToMw(item.rfPower);
        }
        const seg = {start: tH, end: tH + dur, power: p};
        tH += dur;
        return seg;
    });

    const maxT = Math.max(tC, tH);
    const times = new Set([0, maxT]);
    consSegs.forEach(s => {
        times.add(s.start);
        times.add(s.end);
    });
    harSegs.forEach(s => {
        times.add(s.start);
        times.add(s.end);
    });

    const sorted = Array.from(times).sort((a, b) => a - b);
    return sorted.map(time => {
        const c = consSegs.find(s => time >= s.start && time < s.end);
        const h = harSegs.find(s => time >= s.start && time < s.end);
        return {time, consumption: c ? c.power : 0, harvesting: h ? h.power : 0};
    });
}

/**
 * Compute energy metrics (in µJ) from a power series
 * @param {Array<{time:number,consumption:number,harvesting:number}>} series
 * @returns {{used_uj:string,harvested_uj:string,required_uj:string}}
 */
export function computeEnergy(series) {
    let used = 0, harv = 0;
    for (let i = 1; i < series.length; i++) {
        const dt = (series[i].time - series[i - 1].time) / 1000; // convert ms to sec
        // power is in µW (µJ/s), so multiplying by dt gives µJ
        used += series[i - 1].consumption * dt;
        harv += series[i - 1].harvesting * dt;
    }

    return {
        used_uj: formatEnergy(used),
        harvested_uj: formatEnergy(harv),
        required_uj: formatEnergy(Math.max( used - harv, 0))
    };
}


export function formatEnergy(microJoule) {
    if (!isFinite(microJoule) || Math.abs(microJoule) > 1e99) {
        return { value: 'Infinity', unit: '' };
    }

    const formatted =
        Math.abs(microJoule) >= 1e4
            ? microJoule.toExponential(2)
            : microJoule.toFixed(2);

    return { value: formatted, unit: 'µJ' };
}