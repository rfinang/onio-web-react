import {PowerSolverConfigBarsStyled} from "../../styles/energy-emulator/power-solver/PowerSolverConfigBarsStyled";
import ConfigBar from "./power-solver-config/ConfigBar";
import {UNIT_OPTIONS, UNIT_RANGES} from "../../../constant/power-solver-data";
import {useEffect, useState} from "react";
import {computeWirelessSolution, unitOptionsFormat} from "../../../helper/power-solver-utils";
import Select from "react-select";
import {customSelectStylesNew} from "../../styles/common/CustomSelectStylesNew";
import {max, min} from "lodash";


const sanitize = s => typeof s === 'string' ? s.replace(/,/g, '.') : s;

const PowerSolverConfigBars = ({solveFor, setSolveFor, result, setResult}) => {
    const [frequency, setFrequency] = useState(100); // MHz default
    const [frequencyUnit, setFrequencyUnit] = useState('MHz');

    const [txPower, setTxPower] = useState(1); // W default
    const [txPowerUnit, setTxPowerUnit] = useState('W');

    const [txGain, setTxGain] = useState(6); // dBi default
    const [txGainUnit, setTxGainUnit] = useState('dBi');

    const [distance, setDistance] = useState(10); // m default
    const [distanceUnit, setDistanceUnit] = useState('m');

    const [rxGain, setRxGain] = useState(6); // dBi default
    const [rxGainUnit, setRxGainUnit] = useState('dBi');

    const [desiredPr, setDesiredPr] = useState(1); // mW default
    const [desiredPrUnit, setDesiredPrUnit] = useState('mW');


    useEffect(() => {
        // Clamp inputs to their valid ranges before calculation
        const {min: fMin, max: fMax} = UNIT_RANGES.frequency[frequencyUnit];
        const freqClamped = isNaN(Number(frequency)) ? fMin : Math.min(Math.max(frequency, fMin), fMax);

        const {min: pMin, max: pMax} = UNIT_RANGES.power[txPowerUnit];
        const txPowerClamped = isNaN(Number(txPower)) ? pMin : Math.min(Math.max(txPower, pMin), pMax);

        const {min: prMin, max: prMax} = UNIT_RANGES.pr[desiredPrUnit];
        const desiredPrClamped = isNaN(Number(desiredPr)) ? prMin : Math.min(Math.max(desiredPr, prMin), prMax);

        // Clamp TX Gain
        const {min: gTxMin, max: gTxMax} = UNIT_RANGES.gain[txGainUnit];
        const txGainClamped = isNaN(Number(txGain)) ? gTxMin : Math.min(Math.max(txGain, gTxMin), gTxMax);

        // Clamp RX Gain
        const {min: gRxMin, max: gRxMax} = UNIT_RANGES.gain[rxGainUnit];
        const rxGainClamped = isNaN(Number(rxGain)) ? gRxMin : Math.min(Math.max(rxGain, gRxMin), gRxMax);

        // Use clamped values for calculation
        const newResult = computeWirelessSolution({
            frequency: freqClamped,
            frequencyUnit,
            txPower: txPowerClamped,
            txPowerUnit,
            txGain: txGainClamped,
            txGainUnit,
            distance,
            distanceUnit,
            rxGain: rxGainClamped,
            rxGainUnit,
            desiredPr: desiredPrClamped,
            desiredPrUnit,
            solveFor
        });
        setResult(newResult);
    }, [
        frequency, frequencyUnit,
        txPower, txPowerUnit,
        txGain, txGainUnit,
        distance, distanceUnit,
        rxGain, rxGainUnit,
        desiredPr, desiredPrUnit,
        solveFor
    ]);

    const onChangeInputBar = (e, setState, min, max) => {
        let val = sanitize(e.target.value);


        if (val === '') {
            setState('');
            return;
        }


        if (/^0[0-9]+$/.test(val)) {
            val = val.replace(/^0+/, '');
        }

        const decimalRegex = /^-?\d*\.?\d*$/;
        if (!decimalRegex.test(val)) return;


        if (val < Number(min)) val = Number(min);
        else if (val > Number(max)) val = Number(max);

        setState(val);
    };

    const onChangeSelectUnit = (selected, setState, setUnit, min, max) => {
        const newUnit = selected?.value;
        const clamped = Math.min(Math.max(desiredPr, min), max);
        setState(clamped);
        setUnit(newUnit);
    }

    const onBlurInputBar = (e, setState, unitRange, unit) => {
        let v = Number(e.target.value);
        const {min, max} = unitRange[unit];
        if (isNaN(v)) v = min;
        if (v < min) v = min;
        if (v > max) v = max;
        setState(v);
    }

    const fields = [
        {
            label: 'TX Power',
            value: txPower,
            unit: txPowerUnit,
            setValue: setTxPower,
            setUnit: setTxPowerUnit,
            unitRange: UNIT_RANGES.power,
            min: UNIT_RANGES.power[txPowerUnit].min,
            max: UNIT_RANGES.power[txPowerUnit].max,
            step: UNIT_RANGES.power[txPowerUnit].step,
            unitOption: UNIT_OPTIONS.power,
            optionKey: 'power',
            placeholder: '1'
        },
        {
            label: 'TX Gain',
            value: txGain,
            unit: txGainUnit,
            setValue: setTxGain,
            setUnit: setTxGainUnit,
            unitRange: UNIT_RANGES.gain,
            min: UNIT_RANGES.gain.dBi.min,
            max: UNIT_RANGES.gain.dBi.max,
            step: UNIT_RANGES.gain.dBi.step,
            unitOption: UNIT_OPTIONS.gain,
            optionKey: 'gain',
            placeholder: '6'
        },
        {
            label: 'Distance',
            value: distance,
            unit: distanceUnit,
            setValue: setDistance,
            setUnit: setDistanceUnit,
            unitRange: UNIT_RANGES.distance,
            min: UNIT_RANGES.distance[distanceUnit].min,
            max: UNIT_RANGES.distance[distanceUnit].max,
            step: UNIT_RANGES.distance[distanceUnit].step,
            unitOption: UNIT_OPTIONS.distance,
            optionKey: 'distance',
            placeholder: '10'
        },
        {
            label: 'RX Gain',
            value: rxGain,
            unit: rxGainUnit,
            setValue: setRxGain,
            setUnit: setRxGainUnit,
            optionKey: 'gain',
            unitRange: UNIT_RANGES.gain,
            min: UNIT_RANGES.gain.dBi.min,
            max: UNIT_RANGES.gain.dBi.max,
            step: UNIT_RANGES.gain.dBi.step,
            unitOption: UNIT_OPTIONS.gain,
            placeholder: '6'
        },
        {
            label: 'Receive Power',
            value: desiredPr,
            unit: desiredPrUnit,
            setValue: setDesiredPr,
            setUnit: setDesiredPrUnit,
            unitRange: UNIT_RANGES.pr,
            min: UNIT_RANGES.pr[desiredPrUnit].min,
            max: UNIT_RANGES.pr[desiredPrUnit].max,
            step: UNIT_RANGES.pr[desiredPrUnit].step,
            unitOption: UNIT_OPTIONS.pr,
            optionKey: 'pr',
            placeholder: '0'
        }
    ];

    return (
        <PowerSolverConfigBarsStyled>
            <div className={'d-flex justify-content-between powerConfigBarContainer'}>
                <div className={'d-flex justify-content-center powerConfigBarItem'}>
                    <div className={'powerConfigBarItemContainer'}>
                        <ConfigBar min={UNIT_RANGES.frequency[frequencyUnit].min}
                                   max={UNIT_RANGES.frequency[frequencyUnit].max}
                                   step={UNIT_RANGES.frequency[frequencyUnit].step} unitRange={UNIT_RANGES.frequency}
                                   onChangeInputBar={onChangeInputBar} onBlurInputBar={onBlurInputBar}
                                   item={frequency}
                                   setItemState={setFrequency}
                                   unitOptions={UNIT_OPTIONS.frequency}
                                   unitState={frequencyUnit}
                                   disabled={false}
                                   title={'Frequency'}
                                   onChangeSelectUnit={onChangeSelectUnit}
                                   setUnitState={setFrequencyUnit}
                        ></ConfigBar>
                    </div>
                </div>
                <div className={'divider'}></div>
                {fields.map((field, idx) => (
                    <>
                        <div className={`powerConfigBarItem d-flex justify-content-center ${field?.label === solveFor ? 'disabledOverlay' : ''}`} key={idx}>
                            <div className={'powerConfigBarItemContainer'}>
                                <ConfigBar min={field.min} max={field.max}
                                           step={field.step} unitRange={field.unitRange}
                                           onChangeInputBar={onChangeInputBar} onBlurInputBar={onBlurInputBar}
                                           item={field.value}
                                           setItemState={field.setValue}
                                           unitOptions={field.unitOption}
                                           unitState={field.unit}
                                           disabled={field?.label === solveFor}
                                           title={field.label}
                                           onChangeSelectUnit={onChangeSelectUnit}
                                           setUnitState={field.setUnit}
                                ></ConfigBar>
                            </div>

                        </div>
                        {idx < fields.length - 1 && <div className={`divider ${(idx + 1) % 2 === 0 ? '' : 'odd-divider'}`}></div>}
                    </>
                ))}

            </div>


        </PowerSolverConfigBarsStyled>

    )
}

export default PowerSolverConfigBars;