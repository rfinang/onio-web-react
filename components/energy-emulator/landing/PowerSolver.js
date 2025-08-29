import ImageComp from "../../common/Image";
import SettingChart from "../settingChart/SettingChart";
import {PoweredProfilerStyled} from "../../styles/energy-emulator/PoweredProfilerStyled";
import PowerSolverSetting from "../power-solver/PowerSolverSetting";

function PowerSolver({data}) {
    if (!data) return null;
    const {label, title, description} = data;
    return (
        <PoweredProfilerStyled>
            <div className="powered solved">
                <div className="powered__container container">
                    <div className="powered__heading mb-4">
                        <h4 className="heading--block mb-0 d-inline-block js-animation--fade">
                            <span className="heading--block__text">{label}</span>
                        </h4>
                    </div>
                    <div className="row powered__title mb-md-5">
                        <div className="col-lg-5 col-md-6 col-12">
                            <h2 className="h2 mb-md-0 mb-2 js-animation--chars text-90">
                                {title}
                            </h2>
                        </div>
                        <div className="col-lg-6 col-md-5 col-12 pt-2 desc--large offset-md-1">
                            <p style={{maxWidth: '66rem'}} className="mb-0 js-animation--lines" data-offset=".15"
                               dangerouslySetInnerHTML={{
                                   __html: description.replaceAll("\n", "<br/>"),
                               }}>
                            </p>

                        </div>
                    </div>
                    <div>
                        <div className="col-12 px-0">
                            <PowerSolverSetting/>
                        </div>
                    </div>
                </div>
            </div>
        </PoweredProfilerStyled>
    );
}

export default PowerSolver;
