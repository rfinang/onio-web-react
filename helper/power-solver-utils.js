export const convertToBase = (value, unit) => {
    const v = parseFloat(value);
    if (isNaN(v)) return 0;
    switch (unit) {
        case 'GHz': return v * 1e9;
        case 'MHz': return v * 1e6;
        case 'kHz': return v * 1e3;
        case 'Hz':  return v;
        case 'W':   return v;
        case 'mW':  return v / 1000;
        case 'dBm': return Math.pow(10, v / 10) / 1000;
        case 'km':  return v * 1000;
        case 'm':   return v;
        case 'cm':  return v / 100;
        case 'dBi': return Math.pow(10, v / 10);
        default:    return v;
    }
};

// Convert from base units (Hz, W, m, linear gain) back to specified unit
export const convertFromBase = (baseValue, unit) => {
    if (isNaN(baseValue)) return 0;
    switch (unit) {
        case 'GHz': return baseValue / 1e9;
        case 'MHz': return baseValue / 1e6;
        case 'kHz': return baseValue / 1e3;
        case 'Hz':  return baseValue;
        case 'W':   return baseValue;
        case 'mW':  return baseValue * 1000;
        case 'dBm': return 10 * Math.log10(baseValue * 1000);
        case 'km':  return baseValue / 1000;
        case 'm':   return baseValue;
        case 'cm':  return baseValue * 100;
        case 'dBi': return 10 * Math.log10(baseValue);
        default:    return baseValue;
    }
};

export function computeWirelessSolution({
                                            frequency,
                                            frequencyUnit,
                                            txPower,
                                            txPowerUnit,
                                            txGain,
                                            txGainUnit,
                                            distance,
                                            distanceUnit,
                                            rxGain,
                                            rxGainUnit,
                                            desiredPr,
                                            desiredPrUnit,
                                            solveFor
                                        }) {
    // Convert all inputs to base SI
    const fHz    = convertToBase(frequency,    frequencyUnit);
    const pt     = convertToBase(txPower,      txPowerUnit);
    const gTx    = convertToBase(txGain,       txGainUnit);
    const d      = convertToBase(distance,     distanceUnit);
    const gRx    = convertToBase(rxGain,       rxGainUnit);
    const prWant = convertToBase(desiredPr,    desiredPrUnit);
    const c = 3e8;

    // Validate essential inputs
    if (isNaN(fHz) || fHz <= 0) {
        return { error: 'Frequency must be > 0.' };
    }
    if ((isNaN(d) || d <= 0) && solveFor !== 'Distance') {
        return { error: 'Distance must be > 0.' };
    }

    const lambda = c / fHz;
    const k = Math.pow(lambda / (4 * Math.PI), 2);

    // Solver functions
    const solvers = {
        'Receive Power': () => pt * gTx * gRx * k / (d * d),
        'TX Power':       () => prWant * d * d / (gTx * gRx * k),
        'TX Gain':        () => 10 * Math.log10(prWant * d * d / (pt * gRx * k)),
        'RX Gain':        () => 10 * Math.log10(prWant * d * d / (pt * gTx * k)),
        'Distance':       () => Math.sqrt(pt * gTx * gRx * k / prWant)
    };

    if (!solvers[solveFor]) {
        return { error: `Unknown solveFor: ${solveFor}` };
    }

    const solValue = solvers[solveFor]();
    const solNameMap = {
        'Receive Power': 'Received Power',
        'TX Power': 'TX Power',
        'TX Gain': 'TX Gain',
        'RX Gain': 'RX Gain',
        'Distance': 'Distance'
    };
    const solUnitMap = {
        'Receive Power': 'W',
        'TX Power': 'W',
        'TX Gain': 'dBi',
        'RX Gain': 'dBi',
        'Distance': 'm'
    };

    // Determine adjusted inputs for actual received power
    let ptU = pt, gTxU = gTx, gRxU = gRx, dU = d;
    switch (solveFor) {
        case 'TX Power': ptU  = solValue; break;
        case 'TX Gain':  gTxU = Math.pow(10, solValue / 10); break;
        case 'RX Gain':  gRxU = Math.pow(10, solValue / 10); break;
        case 'Distance': dU   = solValue; break;
    }

    // Compute actual received power and dBm
    const actualPr = ptU * gTxU * gRxU * k / (dU * dU);
    const actualPrDbm = actualPr > 0 ? 10 * Math.log10(actualPr * 1000) : null;

    return {
        solName: solNameMap[solveFor],
        solValue,
        solUnit: solUnitMap[solveFor],
        pr: actualPr,
        pr_dBm: actualPrDbm
    };
}

export const unitOptionsFormat = (unitOption) => {
    if (!unitOption) return [];
    return unitOption.map(item => ({
        label: item,
        value: item
    }));
};

export function formatSI(value) {
    if (value === null || isNaN(value)) return 'N/A';
    const abs = Math.abs(value);
    let scaled, prefix;
    if (abs >= 1e6) {
        scaled = value / 1e6;
        prefix = 'MW';
    } else if (abs >= 1e3) {
        scaled = value / 1e3;
        prefix = 'kW';
    } else if (abs >= 1) {
        scaled = value;
        prefix = 'W';
    } else if (abs >= 1e-3) {
        scaled = value * 1e3;
        prefix = 'mW';
    } else if (abs >= 1e-6) {
        scaled = value * 1e6;
        prefix = 'µW';
    } else if (abs >= 1e-9) {
        scaled = value * 1e9;
        prefix = 'nW';
    } else {
        scaled = value * 1e12;
        prefix = 'pW';
    }
    return {
        value: scaled?.toFixed(2),
        prefix: prefix,
    }
}

// Format a distance in meters with km, m, or cm and two decimals
export function formatDistance(value) {
    if (value === null || isNaN(value)) return 'N/A';
    if (!isFinite(value)) return 'N/A';
    const abs = Math.abs(value);
    let scaled, unit;
    if (abs >= 1000) {
        scaled = value / 1000;
        unit = 'km';
    } else if (abs >= 1) {
        scaled = value;
        unit = 'm';
    } else {
        scaled = value * 100;
        unit = 'cm';
    }
    return {
        value: scaled.toFixed(2),
        unit: unit,
    }

}