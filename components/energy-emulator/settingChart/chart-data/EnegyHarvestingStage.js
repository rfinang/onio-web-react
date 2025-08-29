import {EnergyConsumptionStageStyled} from "../../../styles/energy-emulator/setting-chart/EnergyConsumptionStageStyled";
import Select, {components} from "react-select";
import {customSelectStylesNew} from "../../../styles/common/CustomSelectStylesNew";
import CPUIcon from "../../icon/CPUIcon";
import {useEffect, useState} from "react";
import {ENERGY_HARVESTING_STAGE, POWER_PROFILES} from "../../../../constant/energy-data";
import {useSortable} from "@dnd-kit/sortable";
import {CSS} from "@dnd-kit/utilities";
import _ from "lodash"


const CustomOption = (props) => {
    const {data, innerRef, innerProps} = props;
    return (<div ref={innerRef} {...innerProps} style={{display: 'flex', alignItems: 'center', padding: 10}}>
        {/*<span style={{ marginRight: 8 }}>{data.icon}</span>*/}
        {data.label}
    </div>);
};


const CustomSingleValue = ({data, ...props}) => (<components.SingleValue {...props}>
    <components.SingleValue {...props}>
        <div
            style={{
                display: 'flex', alignItems: 'center', width: '100%',              // full width container
                gap: 8,
            }}
        >
            {data?.icon && <div style={{display: 'flex', alignItems: 'center'}}>{data.icon}</div>}
            <div style={{whiteSpace: 'nowrap'}}>{data.label}</div>
        </div>
    </components.SingleValue>
</components.SingleValue>);

const optionsStage = ENERGY_HARVESTING_STAGE.map((item) => {
    const [[key, label]] = Object.entries(item).filter(([k]) => k !== 'icon');

    return {
        value: key,
        label,
        icon: item.icon,
    };
});


const unitList = [
    {value: 'hour', label: 'hour'},
    {value: 'min', label: 'min'},
    {value: 'sec', label: 'sec'},
    {value: 'ms', label: 'ms'}
]

const optionsUnit = optionsStage.reduce((acc, item) => {
    acc[item.value] = unitList;
    return acc;
}, {});


const EnergyHarvestingStage = ({data, id, ...props}) => {

    const {energyHarvestingData, setEnergyHarvestingData} = props;
    const [energy, setEnergy] = useState(optionsStage.find((obj) => obj.value === data.stage));
    const [unit, setUnit] = useState(_.find(unitList, {value: data.unit}));
    const [duration, setDuration] = useState(data?.duration);
    const [power, setPower] = useState(data?.power);

    const {attributes, listeners, setNodeRef, transform, transition} = useSortable({id})
    const styles = {
        transition,
        transform: CSS.Transform.toString(transform),
    };

    const handleStageChange = (selected) => {
        setEnergy(selected);

        let powerData = 100;
        if (selected?.value === 'rfHarvester') {
            powerData = -20;
        }
        setPower(powerData);
        updateDataWhenChange({
            durationItem:duration,
            energyItem:selected,
            unit:unit,
            power:powerData,
        })
    };

    const handlePowerChange = (e) => {
        let value = e.target.value;


        if (/^-?\d*\.?\d*$/.test(value)) {
            value = value.replace(/^0+/, '');
        }

        const decimalRegexdBm = /^-?\d*\.?\d*$/;
        const decimalRegexLux = /^(0|[1-9]\d*)(\.\d*)?$/;

        if (value === '' || decimalRegexdBm.test(value) && energy.value === 'rfHarvester' ) {
            setPower(value);
            updateDataWhenChange({
                durationItem:duration,
                energyItem:energy,
                unit:unit,
                power:value,
            })
        }

        if (value === '' || decimalRegexLux.test(value) && energy.value === 'solarCell' ) {
            setPower(value);
            updateDataWhenChange({
                durationItem:duration,
                energyItem:energy,
                unit:unit,
                power:value,
            })
        }
    };

    const handleDurationChange = (e) => {
        let value = e.target.value;

        if (/^0[0-9]+$/.test(value)) {
            value = value.replace(/^0+/, '');
        }

        const decimalRegex = /^(0|[1-9]\d*)(\.\d*)?$/;

        if (value === '' || decimalRegex.test(value)) {
            setDuration(value);
            updateDataWhenChange({
                durationItem:value,
                energyItem:energy,
                unit:unit,
                power:power,
            })
        }

    };

    const handleUnitChange = (selected) => {
        setUnit(selected);

        updateDataWhenChange({
            durationItem:duration,
            energyItem:energy,
            unit:selected,
            power:power,
        })
    };


    const handleEditEnergyConsumtionStage = (idToUpdate, newData) => {
        setEnergyHarvestingData(prevItems =>
            prevItems.map(item => {
                if (item.id !== idToUpdate) return item;

                let updatedItem = {...item, ...newData};

                if ('rfPower' in newData) {
                    updatedItem.rfPower = newData.rfPower;
                    delete updatedItem.lux;
                } else if ('lux' in newData) {
                    updatedItem.lux = newData.lux;
                    delete updatedItem.rfPower;
                }

                return updatedItem;
            })
        );
    }


    const updateDataWhenChange = ({ durationItem, energyItem, unitItem, powerItem }) => {
        if (energy?.value === 'solarCell') {
            handleEditEnergyConsumtionStage(data.id, {
                duration: durationItem,
                lux: powerItem,
                unit: unitItem?.value || 'sec',
                stage: energyItem?.value
            })
        } else {
            handleEditEnergyConsumtionStage(data.id, {
                duration: durationItem,
                rfPower: powerItem,
                unit: unitItem?.value || 'sec',
                stage: energyItem?.value
            });
        }
    }

    // useEffect(() => {
    //     if (energy?.value === 'solarCell') {
    //         handleEditEnergyConsumtionStage(data.id, {
    //             duration,
    //             lux: power,
    //             unit: unit?.value || 'sec',
    //             stage: energy?.value
    //         })
    //     } else {
    //         handleEditEnergyConsumtionStage(data.id, {
    //             duration,
    //             rfPower: power,
    //             unit: unit?.value || 'sec',
    //             stage: energy?.value
    //         });
    //     }
    // }, [duration, energy, unit, power])

    const handleDeleteEnergy = () => {
        const newEnergyHarvestingData = energyHarvestingData.filter(item => item.id !== data.id);
        setEnergyHarvestingData(newEnergyHarvestingData)
    }

    return (<EnergyConsumptionStageStyled ref={setNodeRef} {...attributes} style={styles}>
        <button onClick={handleDeleteEnergy} className={'position-absolute btnDelete bg-transparent border-0'}>
            <svg width="16" height="16" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 29L29 1" stroke="white" strokeWidth="2" strokeMiterlimit="10"/>
                <path d="M1 1L29 29" stroke="white" strokeWidth="2" strokeMiterlimit="10"/>
            </svg>
        </button>
        <div className={'d-flex align-items-center '}>
            <div style={{minWidth: '6rem'}} {...listeners}
                 className={'d-flex align-items-center justify-content-center col-1'}>
                <svg width="30" height="13" viewBox="0 0 30 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M30 13H0V12H30V13ZM30 7H0V6H30V7ZM30 1H0V0H30V1Z" fill="#514B4D"/>
                </svg>
            </div>
            <div className={'d-flex justify-content-sm-around w-100 pe-2 align-items-center flex-wrap'}>
                <div className=" col-6 col-sm-4">
                    <div
                        className={`form-group mb-0 is-required form-group--white`}
                    >
                        <div className={'text-successful text-18'}>Stage</div>
                        <Select
                            closeMenuOnScroll
                            styles={customSelectStylesNew}
                            instanceId="reason_for_contacting"
                            name={`reason_for_contacting`}
                            value={energy}
                            isSearchable={false}
                            menuPortalTarget={typeof window !== 'undefined' ? document.body : null}
                            onChange={handleStageChange}
                            options={optionsStage}
                            isClearable={false}
                            components={{
                                DropdownIndicator: () => (<div className={'iconDropDown'}>
                                    <svg
                                        width={27}
                                        height={16}
                                        viewBox="0 0 27 16"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M26 1.14063L13.5 14.2813L0.999999 1.14063"
                                            stroke="white"
                                            strokeWidth="2"
                                        />
                                    </svg>
                                </div>), Option: CustomOption, SingleValue: CustomSingleValue,
                            }}
                        />
                    </div>
                </div>
                <div className=" col-3 col-sm-2">
                    <div
                        className={`form-group mb-0 is-required form-group--white`}
                    >
                        <div
                            className={'text-successful text-18'}>{energy?.value === 'solarCell' ? 'LUX' : 'dBm'}</div>
                        <input className={'inputStage'} value={power} onChange={handlePowerChange}
                        />
                    </div>
                </div>
                <div className=" col-3 col-sm-2">
                    <div
                        className={`form-group mb-0 is-required form-group--white`}
                    >
                        <div className={'text-successful text-18'}>Duration</div>
                        <input value={duration} onChange={handleDurationChange} className={'inputStage'}/>
                    </div>
                </div>
                <div className=" col-4 col-sm-2">
                    <div
                        className={`form-group mb-0 is-required form-group--white`}
                    >
                        <div className={'text-successful text-18'}>Unit</div>
                        <Select
                            closeMenuOnScroll
                            styles={customSelectStylesNew}
                            instanceId="reason_for_contacting"
                            name={`reason_for_contacting`}
                            options={energy ? optionsUnit[energy.value] : []}
                            onChange={handleUnitChange}
                            menuPortalTarget={typeof window !== 'undefined' ? document.body : null}
                            value={unit}
                            isSearchable={false}
                            isClearable={false}
                            components={{
                                DropdownIndicator: () => (<div className={'iconDropDown'}>
                                    <svg
                                        width={27}
                                        height={16}
                                        viewBox="0 0 27 16"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M26 1.14063L13.5 14.2813L0.999999 1.14063"
                                            stroke="white"
                                            strokeWidth="2"
                                        />
                                    </svg>
                                </div>), SingleValue: CustomSingleValue,
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    </EnergyConsumptionStageStyled>)
}

export default EnergyHarvestingStage;