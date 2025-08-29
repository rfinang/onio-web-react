import {EnergyStyled} from "../../styles/energy-emulator/setting-chart/EnergyStyled";
import {useState} from "react";
import EnergyHarvestingStage from "./chart-data/EnegyHarvestingStage";
import {
    closestCorners,
    DndContext,
    KeyboardSensor,
    MouseSensor,
    TouchSensor,
    useSensor,
    useSensors
} from "@dnd-kit/core";
import {arrayMove, SortableContext, sortableKeyboardCoordinates, verticalListSortingStrategy} from "@dnd-kit/sortable";
import {restrictToVerticalAxis, restrictToWindowEdges} from '@dnd-kit/modifiers';

const EnergyHarvesting = ({energyHarvestingData, setEnergyHarvestingData, energyHarvestingDataDefault}) => {

    const handleAddStage = () => {
        setEnergyHarvestingData([...energyHarvestingData, energyHarvestingDataDefault]);
    }

    const getItemDragPosition = (id) => {
        return energyHarvestingData.findIndex(item => item.id === id);
    }

    const sensors = useSensors(
        useSensor(TouchSensor),
        useSensor(MouseSensor, {activationConstraint: {distance: 5}}),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates
        })
    );

    const handleDragEnd = (e) => {
        const {active, over} = e

        if (active.id === over.id) return;


        setEnergyHarvestingData(prev => {
            const orginalPosition = getItemDragPosition(active.id);
            const newPosition = getItemDragPosition(over.id);
            return arrayMove(energyHarvestingData, orginalPosition, newPosition)
        })
    }

    return (
        <EnergyStyled>
            <div className={'text-successful text-48 mb-52'}>
                Energy Harvesting
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
                <button onClick={() => setEnergyHarvestingData([])}
                        className={'clearBtn text-20 border-0 text-decoration-underline bg-transparent text-white'}>Clear
                    all
                </button>
            </div>
            <DndContext id={'energyHarvesting'} sensors={sensors} onDragEnd={handleDragEnd} modifiers={[restrictToVerticalAxis]} collisionDetection={closestCorners}>
                <div className={'d-flex flex-column'} style={{gap: 24}}>
                    <SortableContext items={energyHarvestingData} strategy={verticalListSortingStrategy}>
                        {energyHarvestingData?.map((data) => (
                            <EnergyHarvestingStage id={data?.id} setEnergyHarvestingData={setEnergyHarvestingData}
                                                   energyHarvestingData={energyHarvestingData}
                                                   key={data.id} data={data}/>
                        ))}
                    </SortableContext>
                </div>
            </DndContext>
        </EnergyStyled>

    )
}

export default EnergyHarvesting;