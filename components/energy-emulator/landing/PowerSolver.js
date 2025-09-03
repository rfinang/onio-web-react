import ImageComp from "../../common/Image";
import SettingChart from "../settingChart/SettingChart";
import {PoweredProfilerStyled} from "../../styles/energy-emulator/PoweredProfilerStyled";
import Container from "../../ui/Container";
import PowerSolverSetting from "../power-solver/PowerSolverSetting";

function PowerSolver({data}) {
    if (!data) return null;
    const {label, title, description} = data;
    return (
        <PoweredProfilerStyled>
            <div className="powered solved">
                <Container className="powered__container">
                    <div className="powered__heading mb-4">
                        <h4 className="heading--block mb-0 d-inline-block js-animation--fade">
                            <span className="heading--block__text">{label}</span>
                        </h4>
                    </div>
                    <div className="grid md:grid-cols-12 gap-lg powered__title mb-md-5">
                        <div className="lg:col-span-5 md:col-span-6 col-span-12">
                            <h2 className="h2 mb-md-0 mb-2 js-animation--chars text-90">
                                {title}
                            </h2>
                        </div>
                        <div className="lg:col-span-6 md:col-span-5 col-span-12 pt-2 desc--large md:col-start-8">
                            <p style={{maxWidth: '66rem'}} className="mb-0 js-animation--lines" data-offset=".15"
                               dangerouslySetInnerHTML={{
                                   __html: description.replaceAll("\n", "<br/>"),
                               }}>
                            </p>

                        </div>
                    </div>
                    <div>
                        <div className="col-span-12 px-0">
                            <PowerSolverSetting/>
                        </div>
                    </div>
                </Container>
            </div>
        </PoweredProfilerStyled>
    );
}

export default PowerSolver;
