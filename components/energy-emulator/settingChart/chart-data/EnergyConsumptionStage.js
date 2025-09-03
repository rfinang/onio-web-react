import {EnergyConsumptionStageStyled} from "../../../styles/energy-emulator/setting-chart/EnergyConsumptionStageStyled";
import Select, {components} from "react-select";
import {customSelectStylesNew} from "../../../styles/common/CustomSelectStylesNew";
import CPUIcon from "../../icon/CPUIcon";
import {useEffect, useState} from "react";
import {POWER_PROFILES} from "../../../../constant/energy-data";
import {useSortable} from "@dnd-kit/sortable";
import {CSS} from '@dnd-kit/utilities'


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
                display: 'flex', alignItems: 'center', width: '100%', gap: 8
            }}
        >
            {data?.icon && <div style={{display: 'flex', alignItems: 'center'}}>{data.icon}</div>}
            <div style={{whiteSpace: 'nowrap'}}>{data.label}</div>
        </div>
    </components.SingleValue>
</components.SingleValue>);


const optionsStage = POWER_PROFILES.onioZero.stage.map((item) => {
    const [[key, label]] = Object.entries(item).filter(([k, v]) => k !== 'icon' || k !== 'deepSleepLocked');
    return {
        value: key,
        label: label,
        icon: item.icon,
    };
});

const optionsStageLocked = POWER_PROFILES.onioZero.stage
    .filter(item => !item.hasOwnProperty('deepSleepLocked'))
    .map((item) => {
        const [[key, label]] = Object.entries(item).filter(([k]) => k !== 'icon');
        return {
            value: key,
            label: label,
            icon: item.icon,
        };
    });


const optionsUnit = optionsStage.reduce((acc, item) => {
    acc[item.value] = [
        {value: 'hour', label: 'hour'},
        {value: 'min', label: 'min'},
        {value: 'sec', label: 'sec'},
        {value: 'ms', label: 'ms'}
    ];
    return acc;
}, {});


const EnergyConsumptionStage = ({data, id, ...props}) => {

    const {energyConsumptionData, setEnergyConsumptionData} = props;
    const [energy, setEnergy] = useState(optionsStage.find((obj) => obj.value === data.stage));
    const [unit, setUnit] = useState({value: 'ms', label: 'ms'});
    const [duration, setDuration] = useState(data?.duration);


    const {attributes, listeners, setNodeRef, transform, transition} = useSortable({id})
    const styles = {
        transition,
        transform: CSS.Transform.toString(transform),
    };
    const handleStageChange = (selected) => {
        setEnergy(selected);
        handleEditEnergyConsumtionStage(data.id, {duration, unit: unit?.value || 'ms', stage: selected?.value});
    };

    const handleDurationChange = (e) => {
        let value = e.target.value;

        if (/^0[0-9]+$/.test(value)) {
            value = value.replace(/^0+/, '');
        }

        const decimalRegex = /^(0|[1-9]\d*)(\.\d*)?$/;


        if (value === '' || decimalRegex.test(value)) {
            setDuration(value);

            handleEditEnergyConsumtionStage(data.id, {duration: value, unit: unit?.value || 'ms', stage: energy?.value});
        }

    };

    const handleUnitChange = (selected) => {
        setUnit(selected);

        handleEditEnergyConsumtionStage(data.id, {duration,  unit: selected.value || 'ms', stage: energy?.value});
    };


    const handleEditEnergyConsumtionStage = (idToUpdate, newData) => {
        setEnergyConsumptionData(prevItems =>
            prevItems.map(item =>
                item.id === idToUpdate ? {...item, ...newData} : item
            )
        );
    }

    // useEffect(() => {
    //
    //
    //
    //
    // }, [duration, energy, unit])


    const handleDeleteEnergy = () => {
        const newEnergyConsumptionData = energyConsumptionData.filter(item => item.id !== data.id);
        setEnergyConsumptionData(newEnergyConsumptionData)
    }

    return (
        <EnergyConsumptionStageStyled ref={setNodeRef} {...attributes} style={styles} locked={data?.locked}>
            {!data?.locked &&
                <button onClick={handleDeleteEnergy} className={'position-absolute btnDelete bg-transparent border-0'}>
                    <svg width="16" height="16" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 29L29 1" stroke="white" strokeWidth="2" strokeMiterlimit="10"/>
                        <path d="M1 1L29 29" stroke="white" strokeWidth="2" strokeMiterlimit="10"/>
                    </svg>
                </button>}
            <div className={'d-flex align-items-center stageContainer'}>
                <div style={{
                    minWidth: '6rem',
                    transform: data.locked ? 'rotate(90deg)' : ''
                }} {...(!data?.locked ? listeners : {})}
                     className={'d-flex align-items-center justify-content-center col-1'}>
                    <svg width="30" height="13" viewBox="0 0 30 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M30 13H0V12H30V13ZM30 7H0V6H30V7ZM30 1H0V0H30V1Z" fill="var(--onio-color-muted)"/>
                    </svg>
                </div>
                <div className={'d-flex justify-content-sm-around w-100 pe-2 align-items-center flex-wrap gap-30'}>
                    <div className=" col-5 px-0">
                        <div
                            className={`form-group mb-0 is-required form-group--white`}
                        >
                            <div className={'text-alert text-18'}>Stage</div>
                            <Select
                                closeMenuOnScroll
                                styles={customSelectStylesNew}
                                instanceId="reason_for_contacting"
                                name={`reason_for_contacting`}
                                value={energy}
                                isDisabled={data?.locked}
                                onChange={handleStageChange}
                                isSearchable={false}
                                menuPortalTarget={typeof window !== 'undefined' ? document.body : null}
                                options={data?.locked ? optionsStage : optionsStageLocked}
                                isClearable={false}
                                components={{
                                    DropdownIndicator: () => (!data?.locked &&
                                        <div className={'iconDropDown'}>
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
                    <div className=" px-0 col-2">
                        <div
                            className={`form-group mb-0 is-required form-group--white`}
                        >
                            <div className={'text-alert text-18'}>Duration</div>
                            <input className={"inputStage"} disabled={data?.locked} value={duration}
                                   onChange={handleDurationChange}
                            />
                        </div>
                    </div>
                    <div className=" px-0 col-2">
                        <div
                            className={`form-group mb-0 is-required pr-1 form-group--white`}
                        >
                            <div className={'text-alert text-18'}>Unit</div>
                            <Select
                                closeMenuOnScroll
                                styles={customSelectStylesNew}
                                instanceId="reason_for_contacting"
                                name={`reason_for_contacting`}
                                isSearchable={false}
                                options={energy ? optionsUnit[energy.value] : []}
                                onChange={handleUnitChange}
                                value={unit}
                                menuPortalTarget={typeof window !== 'undefined' ? document.body : null}
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

export default EnergyConsumptionStage;