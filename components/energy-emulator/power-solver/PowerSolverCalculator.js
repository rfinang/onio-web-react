import {PowerSolverCalculatorStyled} from "../../styles/energy-emulator/power-solver/PowerSolverCalculatorStyled";
import {formatDistance, formatSI} from "../../../helper/power-solver-utils";
import {useEffect, useMemo, useState} from "react";

const PowerSolverCalculator = ({solveFor, result}) => {

    const [devicesSupportedState, setDevicesSupportedState] = useState(0);
    const [calculatedReceive, setCalculatedReceive] = useState(0);

    const devicesSupported = useMemo(() => {
        const powerPerDevice = 1e-6;
        return Math.floor(result?.pr / powerPerDevice);
    }, [result?.pr]);

    useEffect(() => {
        setDevicesSupportedState(devicesSupported);
    }, [devicesSupported])

    const formatSolve = (solName, solUnit, solValue) => {
        if (solName === "Distance")
            return formatDistance(solValue)
        else if (solUnit === "W") {
            return formatSI(solValue)
        } else {
            return {value: solValue?.toFixed(2), unit: solUnit}
        }
    }


    const calculatedReceiveValue = useMemo(
        () => {
            return formatSI(result?.pr)
        },
        [result]);

    useEffect(() => {
        setCalculatedReceive(calculatedReceiveValue);
    }, [calculatedReceiveValue])

    const resultFormat = formatSolve(result?.solName, result?.solUnit, result?.solValue)
    return (
        <PowerSolverCalculatorStyled>
            <div className="d-flex gap-24 flex-lg-nowrap flex-wrap">
                <div className={'box boxIndex boxValue col-12 col-lg-auto bg-accent'}>
                    <div className={'title text-white text-uppercase'}>{solveFor}</div>
                    <div className={'flex-grow-1 d-flex align-items-end'}>
                        <div
                            className={'text-56 text-white'}>{!isNaN(resultFormat?.value) ? resultFormat?.value : 'N/A'}</div>
                        <div
                            className={'text-35 text-pb-24 text-white'}>{resultFormat?.prefix || resultFormat?.unit}</div>
                    </div>
                </div>
                {
                    solveFor !== 'Receive Power' && (<div className={'box boxIndex boxCalculator'}>
                        <div className={'d-flex flex-column gap-10'}>
                            <div className={'title text-orange'}>CALCULATED RECEIVE POWER</div>
                            {/*{!isNaN(devicesSupported) && result?.pr > 1e-6 ?*/}
                            {/*    (<div className={'description text-orange'}>You’re well above ONiO.zero’s cold-start*/}
                            {/*        threshold.*/}
                            {/*        You could cold-start approximately {devicesSupportedState} devices with this setup.*/}
                            {/*    </div>) : (*/}
                            {/*        <div className={'description text-alert-bold'}>Received power is below 1 µW. Cold-start*/}
                            {/*            unlikely. Try increasing TX*/}
                            {/*            power, gain, or reducing distance.*/}
                            {/*        </div>)*/}
                            {/*}*/}
                            {result?.error && (
                                <div className={'description text-alert font-bold'}>{result?.error}</div>
                            )}
                        </div>
                        <div
                            className={'text-56 text-orange flex-grow-1 d-flex align-items-end calculatorReceive'}>
                            <div className={'pe-1'}>{calculatedReceive?.value || 'N/A'} {calculatedReceive?.prefix}</div>
                            <div
                                className={'text-35'}>({result?.pr_dBm !== null ? result?.pr_dBm?.toFixed(2) : 'N/A'} dBm)
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </PowerSolverCalculatorStyled>
    )
}

export default PowerSolverCalculator
