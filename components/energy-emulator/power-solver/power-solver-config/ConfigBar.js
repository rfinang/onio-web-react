import {SLIDER_STYLES, TRACK_HEIGHT, TRACK_WIDTH} from "./styles/sliderStyles";
import {Range} from 'react-range';
import {UNIT_OPTIONS, UNIT_RANGES} from "../../../../constant/power-solver-data";
import Select from "react-select";
import {customSelectStylesNew} from "../../../styles/common/CustomSelectStylesNew";
import {unitOptionsFormat} from "../../../../helper/power-solver-utils";
import {ConfigBarStyled} from "../../../styles/energy-emulator/power-solver/ConfigBarStyled";

const Direction = {
    right: "to right",
    left: "to left",
    down: "to bottom",
    up: "to top"
}
const renderConfigBar = (value, onChange, min, max, step, disabled = false) => {

    const getDecimalPlaces = (step) => {
        if (!isFinite(step)) return 0;

        let e = 1, p = 0;
        while (Math.round(step * e) / e !== step) {
            e *= 10;
            p++;
            if (p > 20) break; // tránh loop vô hạn
        }
        return p;
    };

    const roundWithMin = (value, decimals = 0, min = -Infinity) => {
        let factor = Math.pow(10, decimals);
        let rounded = Math.round(value * factor) / factor;

        if (rounded < min) {
            rounded += Math.pow(10, -decimals);
        }

        return rounded;
    };

    const decimals = getDecimalPlaces(step);
    return (
        <div className={'configBar'} style={SLIDER_STYLES.wrapper(disabled)}>
            <Range
                values={[value]}
                step={step}
                min={min}
                max={max}
                vertical
                direction={Direction.up}
                onChange={vals => {
                    const raw = vals[0];
                    let rounded = roundWithMin(Number(raw.toFixed(decimals)), decimals, min);
                    // const rounded = Number(raw.toFixed(decimals))
                    onChange(rounded);
                }}
                renderTrack={({props, children}) => {
                    const {key, ...restProps} = props;
                    return (
                        <div
                            key={key}
                            {...restProps}
                            style={{
                                ...restProps.style,
                                ...SLIDER_STYLES.trackContainer
                            }}
                        >
                            <div
                                ref={restProps.ref}
                                style={SLIDER_STYLES.track}
                            >
                                <div
                                    style={SLIDER_STYLES.fill(value, min, max)}
                                />
                                {children}
                            </div>
                        </div>
                    );
                }}
                renderThumb={({props}) => {
                    // Calculate bottom offset so thumb edge aligns at both ends
                    const offset = ((value - min) / (max - min)) * (TRACK_HEIGHT - 30);
                    const {key, ...restProps} = props;
                    return (
                        <div
                            key={key}
                            {...restProps}
                            style={{
                                ...restProps.style,
                                position: 'absolute',
                                left: TRACK_WIDTH / 2,
                                bottom: offset,
                                transform: 'translateX(-50%)',
                                ...SLIDER_STYLES.thumbBase
                            }}
                        />
                    );
                }}
            />
        </div>
    );
};

const ConfigBar = (
    {
        min,
        max,
        step,
        onChangeInputBar,
        onBlurInputBar,
        unitState,
        setUnitState,
        unitRange,
        item,
        setItemState,
        unitOptions,
        title,
        disabled = false,
        onChangeSelectUnit
    }
) => {

    const unitOptionsData = unitOptionsFormat(unitOptions)
    return (
        <ConfigBarStyled>
            <div className={`titleConfigBar`}>
                <div
                    className={`form-group is-required form-group--silver`}
                >
                    <div className={'text-alert text-18-nrs text-nowrap text-center'}>{title}</div>
                    <div className={'w-100 d-flex justify-content-center'}>
                        <input className={"inputStage px-0 text-center"}
                               value={item}
                               min={min}
                               max={max}
                               step={step}
                               disabled={disabled}
                               onBlur={
                                   (e) => onBlurInputBar(e, setItemState, unitRange, unitState)
                               }
                               onChange={(e) => {
                                   onChangeInputBar(e, setItemState, min, max);
                               }}
                        />
                    </div>
                </div>
                {renderConfigBar(
                    (() => {
                        const raw = Number(item);
                        const clamped = isNaN(raw) ? min : Math.min(Math.max(raw, min), max);
                        return clamped;
                    })(),
                    v => setItemState(v),
                    min,
                    max,
                    step,
                    disabled
                )}
            </div>
            <div className={"selectConfigBar"}>
                {unitOptionsData?.length > 1 ?
                    (
                        <div className={'d-flex justify-content-center selectConfigBarWrapper'} style={{paddingTop: '2.6rem'}}>
                            <Select
                                closeMenuOnScroll={true}
                                styles={{
                                    ...customSelectStylesNew,
                                    control: (provided, state) => ({
                                        ...customSelectStylesNew.control(provided, state),
                                        borderBottomColor: "#222021",
                                        "&:hover": {
                                            borderColor: "#222021",
                                        },
                                        color: "#222021",
                                    }),
                                    singleValue: (provided) => ({
                                        ...customSelectStylesNew.singleValue(provided),
                                        color: "#222021"
                                    }),
                                    placeholder: (provided) => ({
                                        ...customSelectStylesNew.placeholder(provided),
                                        color: "#222021",
                                    }),
                                }}
                                instanceId="reason_for_contacting"
                                name={`reason_for_contacting`}
                                options={unitOptionsData}
                                value={unitOptionsData.find(item => item?.value === unitState)}
                                onChange={(selected) => onChangeSelectUnit(selected, setItemState, setUnitState, min, max)}
                                isClearable={false}
                                isSearchable={false}
                                isDisabled={disabled}
                                components={{
                                    DropdownIndicator: () => (
                                        <svg
                                            width="27"
                                            height="16"
                                            viewBox="0 0 27 16"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M26 1.14063L13.5 14.2813L0.999999 1.14063"
                                                stroke="#222021"
                                                strokeWidth="2"
                                            />
                                        </svg>
                                    ),
                                }}
                            />
                        </div>) : (
                        <div style={{paddingTop: '2.6rem'}}><span style={{
                            minHeight: '4.8rem',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: 20
                        }}>{unitOptionsData.find(item => item?.value === unitState)?.value}</span></div>)}
            </div>
        </ConfigBarStyled>
    )
}

export default ConfigBar;