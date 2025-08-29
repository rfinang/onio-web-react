import { useState } from "react";
import { Waypoint } from "react-waypoint";
import LottieAnimation from "../../common/LottieAnimation";
function Energy({ sectionEnergy }) {
  if (!sectionEnergy) return null;

  const [renderLottie, setRenderLottie] = useState(false);
  function checkRenderLottie() {
    if (renderLottie) return;
    return setRenderLottie(true);
  }
  const { label, description, animation } = sectionEnergy;
  return (
    <>
      <div className="spacing--bottom--xs pt-sm-0 pt-4">
        <h4 className="heading--block heading--block--white mb-0 d-inline-block js-animation--fade">
          <span className="heading--block__text">{label}</span>
        </h4>
      </div>
      <div className="row harvesting spacing--bottom--lg pb-lg-1">
        <div className="col-sm-6 col-12 mb-sm-0 mb-5 text-white desc--large">
          <p className="pr-lg-1 js-animation--lines">{description}</p>
        </div>
        {animation && (
          <div className="col-md-4 col-sm-5 col-12 mb-sm-0 mb-3 offset-md-2 offset-sm-1">
            <Waypoint onEnter={() => checkRenderLottie()} />
            <div className="row">
              <div className="col-6 energy__col">
                <figure
                  className="mb-3 js-animation--lottie"
                  style={{ width: "130%", marginLeft: "-15%" }}
                >
                  {renderLottie && <LottieAnimation urlData={animation.file_animation.url} />}
                </figure>
              </div>
            </div>
            <div className="js-animation--fade" data-offset=".1">
              <h5 className="desc--large text-white">{animation.title}</h5>
              <p className="text-white harvesting__desc--small desc--small">
                {animation.description}
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Energy;
