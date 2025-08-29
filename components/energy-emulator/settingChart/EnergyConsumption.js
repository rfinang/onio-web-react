import {EnergyStyled} from "../../styles/energy-emulator/setting-chart/EnergyStyled";
import EnergyConsumptionStage from "./chart-data/EnergyConsumptionStage";
import {useEffect, useState} from "react";
import {
    closestCorners,
    DndContext,
    KeyboardSensor,
    MouseSensor,
    TouchSensor,
    useSensor,
    useSensors
} from '@dnd-kit/core';
import {arrayMove, SortableContext, sortableKeyboardCoordinates, verticalListSortingStrategy} from '@dnd-kit/sortable';
import {restrictToVerticalAxis, restrictToWindowEdges} from '@dnd-kit/modifiers';

const EnergyConsumption = ({
                               energyConsumptionData,
                               setEnergyConsumptionData,
                               energyConsumptionDataDefault,
                               energyConsumptionDataDefaultLocked
                           }) => {


    const handleAddStage = () => {
        setEnergyConsumptionData([energyConsumptionDataDefault, ...energyConsumptionData]);
    }

    const getItemDragPosition = (id) => {
        return energyConsumptionData.findIndex(item => item.id === id);
    }

    const sensors = useSensors(
        useSensor(TouchSensor),
        useSensor(MouseSensor, {activationConstraint: {distance: 5}}),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates
        })
    );

    const handleDragEnd = (e) => {
        const { active, over } = e;
        if (!over || active.id === over.id) return;

        const overItem = energyConsumptionData.find(item => item.id === over.id);
        const activeItem = energyConsumptionData.find(item => item.id === active.id);


        if (overItem?.locked || activeItem?.locked) return;

        setEnergyConsumptionData(prev => {
            const originalPosition = getItemDragPosition(active.id);
            const newPosition = getItemDragPosition(over.id);
            return arrayMove(prev, originalPosition, newPosition);
        });
    };

    const handleClearAll = () => {
        const energyConsumptionDataCantDelete = energyConsumptionData?.filter(item => item?.locked)
        setEnergyConsumptionData(energyConsumptionDataCantDelete)
    }


    return (
        <EnergyStyled>
            <div className={'text-alert text-48 mb-52'}>
                Energy Consumption
            </div>
            <div className={'mb-52 d-flex align-items-center justify-content-between'}>
                <button onClick={handleAddStage}
                        className={'addBtn text-20 text-white d-flex justify-content-center align-items-center'}
                        style={{minWidth: '18.5rem'}}>
                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="8" y1="17" x2="8" y2="4.83126e-08" stroke="white" strokeWidth="2"/>
                        <line y1="8" x2="17" y2="8" stroke="white" strokeWidth="2"/>
                    </svg>
                    <div className={'ms-1'}>Add Stage</div>
                </button>
                <button onClick={handleClearAll}
                        className={'clearBtn text-20 border-0 text-decoration-underline bg-transparent text-white'}>Clear
                    all
                </button>
            </div>
            <DndContext id={'energyConsumption'} sensors={sensors} onDragEnd={handleDragEnd} modifiers={[restrictToVerticalAxis]} collisionDetection={closestCorners}>
                <div className={'d-flex flex-column'} style={{gap: 24}}>
                    <SortableContext items={energyConsumptionData} strategy={verticalListSortingStrategy}>
                        {energyConsumptionData?.filter(data => !data?.locked).map((data) => (
                            <EnergyConsumptionStage id={data.id} setEnergyConsumptionData={setEnergyConsumptionData}
                                                    energyConsumptionData={energyConsumptionData}
                                                    key={data.id} data={data}/>
                        ))}
                    </SortableContext>
                </div>
            </DndContext>
        </EnergyStyled>

    )
}

export default EnergyConsumption;