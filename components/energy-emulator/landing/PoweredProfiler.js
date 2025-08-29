import React from "react";
import ImageComp from "../../common/Image";
import SettingChart from "../settingChart/SettingChart";
import {PoweredProfilerStyled} from "../../styles/energy-emulator/PoweredProfilerStyled";
import {KEY_CUSTOM_PRESET, LABEL_CUSTOM_PRESET} from "../../../constant/preset-key";
import _ from "lodash";

function PoweredProfiler({data, solarProfilesConfig, powerProfilesConfig, powerProfilesPreset }) {
    if (!data) return null;
    const {label, title, description} = data;


    const presetsData = _.get(powerProfilesPreset,"presets",[]);
    const foundCustomPreset = presetsData.find(preset => preset.value === KEY_CUSTOM_PRESET)

    if (!foundCustomPreset) {
        powerProfilesPreset.presets = [{label: LABEL_CUSTOM_PRESET, value: KEY_CUSTOM_PRESET, config: {}}, ...powerProfilesPreset.presets];
    }



    return (
        <PoweredProfilerStyled>
            <div className="powered bg-dark">
                <div className="powered__container container">
                    <div className="powered__heading mb-4">
                        <h4 className="heading--block heading--block--white mb-0 d-inline-block js-animation--fade">
                            <span className="heading--block__text">{label}</span>
                        </h4>
                    </div>
                    <div className="row mb-5">
                        <div className="col-lg-5 col-md-6 col-12">

                            <h2 className="h2 mb-md-0 mb-2 text-white js-animation--chars text-90">
                                {title}
                               </h2>
                        </div>
                        <div className="col-lg-6 col-md-5 col-12 pt-2 desc--large text-white offset-md-1">
                            <p className="mb-0 js-animation--lines" data-offset=".15">
                                {description}

                            </p>

                        </div>
                    </div>
                    <div>
                        <div className="col-12 px-0">
                            <SettingChart solarProfilesConfig={solarProfilesConfig}
                                          powerProfilesPreset={powerProfilesPreset}
                                          powerProfilesConfig={powerProfilesConfig}/>
                        </div>
                    </div>
                </div>
            </div>
        </PoweredProfilerStyled>
    );
}

export default PoweredProfiler;
