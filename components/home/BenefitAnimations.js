import { useState } from "react";
import { Waypoint } from "react-waypoint";
import LottieAnimation from "../common/LottieAnimation";
function BenefitAnimations({ benefitAnimations }) {
  const [renderLottie, setRenderLottie] = useState(false);
  function checkRenderLottie() {
    if (renderLottie) return;
    return setRenderLottie(true);
  }
  return (
    <>
      <Waypoint onEnter={() => checkRenderLottie()} />
      <div className="container focusFeatureList focusFeatureList--home">
        <div className="row justify-content-center">
          {benefitAnimations.map((item, index) => {
            const { file_animation } = item;
            return (
              <div key={item.id} className="col-md-4 col-sm-6 col-11 mb-md-0 mb-5">
                <div className="focusFeature text-center">
                  <div className="focusFeature__thumbnail">
                    <div
                      className="focusFeature__thumbnail__inner font-0 js-animation--fade"
                      data-offset={index * 0.15}
                    >
                      {renderLottie && <LottieAnimation urlData={file_animation.url} />}
                    </div>
                  </div>
                  <div
                    className="focusFeature__info js-animation--fade"
                    data-offset={index * 0.15 + 0.1}
                  >
                    <h4
                      className="focusFeature__info__heading h5"
                      dangerouslySetInnerHTML={{ __html: item.title }}
                    />
                    <div className="focusFeature__info__desc desc--small">
                      <p className="mb-0">{item.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default BenefitAnimations;
