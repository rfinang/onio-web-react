import CPUIcon from "../components/energy-emulator/icon/CPUIcon";
import RadioLeft from "../components/energy-emulator/icon/RadioLeft";
import RadioRight from "../components/energy-emulator/icon/RadioRight";
import MoonIcon from "../components/energy-emulator/icon/Moon";
import SolarIcon from "../components/energy-emulator/icon/SolarIcon";
import ArrowDashIcon from "../components/energy-emulator/icon/ArrowDash";

export const POWER_PROFILES = {
    onioZero: {
        name: "ONiO.zero",
        stage: [
            {cpuActive: "CPU ACTIVE", icon: <CPUIcon/>},
            {radioTx: "RADIO TX", icon: <RadioLeft/>},
            {radioRx: "RADIO RX", icon: <RadioRight/>},
            {deepSleep: "DEEP SLEEP", icon: <MoonIcon/>},
            {deepSleepLocked: "Locked Deep Sleep", icon: ''},
        ],
    },
};

export const POWER_PROFILES_MAP = {
    cpuActive: { label: "CPU ACTIVE", icon: <CPUIcon /> },
    radioTx: { label: "RADIO TX", icon: <RadioLeft /> },
    radioRx: { label: "RADIO RX", icon: <RadioRight /> },
    deepSleep: { label: "DEEP SLEEP", icon: <MoonIcon /> },
    deepSleepLocked: { label: "Locked Deep Sleep", icon: '' }
};

export const POWER_PROFILES_VALUE = {
    onioZero: {
        name: "ONiO.zero",
        cpuActive: 1800,
        radioTx: 12000,
        radioRx: 9000,
        deepSleep: 0.5,
        deepSleepLocked: 0.5
    },
};


// Area is in cm2
// µW/cm² at given lux

export const SOLAR_PROFILES = {
    pf_1v4: {
        name: 'PowerFoyle Indoor 1v4',
        area: 1, // cm²
        pwr_output: [
            {lux: 0, power: 0},
            {lux: 50, power: 2.2},
            {lux: 100, power: 5.0},
            {lux: 200, power: 10.3},
            {lux: 500, power: 25},
            {lux: 1000, power: 45},
        ],
    },

    pf_1v2: {
        name: 'PowerFoyle Hybrid 1v2',
        area: 4,
        pwr_output: [
            {lux: 0, power: 0},
            {lux: 200, power: 5.4},
            {lux: 500, power: 15.5},
            {lux: 1000, power: 36.1},
            {lux: 2000, power: 77.9},
            {lux: 5000, power: 193.4},
            {lux: 10000, power: 405.6},
            {lux: 20000, power: 775.5},
            {lux: 30000, power: 1098.5},
            {lux: 50000, power: 1554.8},
        ],
    },
};


export const ENERGY_HARVESTING_STAGE = [
    {solarCell: 'SOLAR CELL', icon: <SolarIcon/>,},
    {rfHarvester: 'RF HARVESTER', icon: <ArrowDashIcon/>}
]

