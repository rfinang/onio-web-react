import {DataTooltipStyled} from "../../../styles/energy-emulator/data-chart/DataTooltipStyled";

const DataTooltip = ({value, unit, title}) => {
    return (<DataTooltipStyled>
        <div className={'text-center'}>
            <p className={'text-56'}>{value}{unit}</p>
            <p className={'text-27 fw-light pt-1 text-nowrap'}>{title}</p>
        </div>

    </DataTooltipStyled>)
}

export default DataTooltip;