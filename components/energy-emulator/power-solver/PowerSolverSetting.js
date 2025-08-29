import {SettingChartStyled} from "../../styles/energy-emulator/setting-chart/SettingChartStyled";
import PowerSolverFeature from "./PowerSolverFeature";
import {useEffect, useState} from "react";
import PowerSolverCalculator from "./PowerSolverCalculator";
import PowerSolverConfigBars from "./PowerSolverConfigBars";

const PowerSolverSetting = () => {
    const [solveFor, setSolveFor] = useState('Distance');
    const [result, setResult] = useState(null);

    return (
        <SettingChartStyled>
            <div>
                <PowerSolverFeature solveFor={solveFor} setSolveFor={setSolveFor}/>
            </div>
            <div className={'w-100'}>
                <PowerSolverCalculator solveFor={solveFor} result={result}/>
            </div>
            <div className={''}>
                <PowerSolverConfigBars solveFor={solveFor} result={result} setResult={setResult}/>
            </div>
        </SettingChartStyled>)
}

export default PowerSolverSetting;