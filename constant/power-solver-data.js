import {convertToBase} from "../helper/power-solver-utils";

export const UNIT_RANGES = {
    frequency: {
        Hz:  { min: 1,      max: 1e3, step: 1 },
        kHz: { min: 1,      max: 1e3, step: 1 },
        MHz: { min: 1,      max: 5e3, step: 1 },
        GHz: { min: 0.1,  max: 5,   step: 0.1 }
    },
    power: {
        W:   { min: 0,      max: 100,   step: 0.01 },
        mW:  { min: 0,      max: 1000,step: 10 },
        dBm: { min: -100,   max: 30,   step: 0.1 }
    },
    distance: {
        cm:  { min: 1,      max: 100, step: 1 },
        m:   { min: 0.1,    max: 1000, step: 1 },
        km:  { min: 0.001,  max: 10,    step: 0.1 }
    },
    pr: {
        W:   { min: 0,      max: 1,    distance: 0.1 },
        mW:  { min: 0,      max: 1000, step: 1 },
        dBm: { min: -100,   max: 30,   step: 0.1 }
    },
    gain: {
        dBi: { min: -30,    max: 30,   step: 0.1 }
    }
};


export const UNIT_OPTIONS = {
    frequency: ['Hz', 'kHz', 'MHz', 'GHz'],
    power: ['W', 'mW', 'dBm'],
    distance: ['cm', 'm', 'km'],
    gain: ['dBi'],
    pr: ['W', 'mW', 'dBm']
};

export const BASE_MAX_VALUES = {
    frequency: convertToBase(UNIT_RANGES.frequency.MHz.max, 'MHz'),
    power:     convertToBase(UNIT_RANGES.power.W.max, 'W'),
    distance:  convertToBase(UNIT_RANGES.distance.m.max, 'm'),
    pr:        convertToBase(UNIT_RANGES.pr.W.max,      'W'),
};