import Select from "react-select";
import {customSelectStylesNew} from "../../styles/common/CustomSelectStylesNew";
import {POWER_PROFILES_MAP, SOLAR_PROFILES} from "../../../constant/energy-data";
import {useCallback, useEffect, useState} from "react";
import {FeatureSettingStyled} from "../../styles/energy-emulator/setting-chart/FeatureSettingStyled";

const PowerSolverFeature = ({solveFor, setSolveFor}) => {

    const solveList = ['Distance',
        'TX Power',
        'TX Gain',
        'RX Gain',
        'Receive Power']

    const handleChange = (e) => {
        setSolveFor(e.target.value)
    }
    return (
        <FeatureSettingStyled>
            <div className={'col-lg-5 px-0'}>
                <div className='text-48 mb-64'>Solve for</div>
                <div className={'d-flex gap-32 flex-wrap flex-lg-nowrap flex-md-row align-items-md-center'}>
                    {
                        solveList?.map((item, i) =>
                            (
                                <div key={i} className={'d-flex align-items-center p-64 me-lg-5 col-4 col-md-2 p-0 me-2 me-md-0 col-lg-auto'}>
                                    <div className='checkInput row mx-0 px-0 d-flex align-items-center'>
                                        <div
                                            className='col-12 px-0 d-flex justify-content-between align-items-center'>
                                            <label style={{fontSize: 20, lineHeight: '26px'}}
                                                   className="containerRadio textMedium">
                                                <input
                                                    checked={solveFor === item}
                                                    type="radio"
                                                    onChange={handleChange}
                                                    value={item}
                                                    name='checkSolveFor'/>
                                                <span className="checkmark checkmark-dark"></span>
                                            </label>
                                        </div>
                                    </div>
                                    <div className={'text-20 text-alert font-bold text-nowrap'}>{item}</div>
                                </div>
                            )
                        )
                    }
                </div>
            </div>
        </FeatureSettingStyled>
    )
}


export default PowerSolverFeature;
