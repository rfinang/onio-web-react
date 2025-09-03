import ImageComp from "../../common/Image";
import SettingChart from "../settingChart/SettingChart";
import {PoweredProfilerStyled} from "../../styles/energy-emulator/PoweredProfilerStyled";
import Container from "../../ui/Container";
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
            <div className="powered bg-primary">
                <Container className="powered__container">
                    <div className="powered__heading mb-4">
                        <h4 className="heading--block heading--block--white mb-0 d-inline-block js-animation--fade">
                            <span className="heading--block__text">{label}</span>
                        </h4>
                    </div>
                    <div className="grid md:grid-cols-12 gap-lg mb-5">
                        <div className="lg:col-span-5 md:col-span-6 col-span-12">

                            <h2 className="h2 mb-md-0 mb-2 text-white js-animation--chars text-90">
                                {title}
                               </h2>
                        </div>
                        <div className="lg:col-span-6 md:col-span-5 col-span-12 pt-2 desc--large text-white md:col-start-8">
                            <p className="mb-0 js-animation--lines" data-offset=".15">
                                {description}

                            </p>

                        </div>
                    </div>
                    <div>
                        <div className="col-span-12 px-0">
                            <SettingChart solarProfilesConfig={solarProfilesConfig}
                                          powerProfilesPreset={powerProfilesPreset}
                                          powerProfilesConfig={powerProfilesConfig}/>
                        </div>
                    </div>
                </Container>
            </div>
        </PoweredProfilerStyled>
    );
}

export default PoweredProfiler;
