import { useState } from "react";
import { Waypoint } from "react-waypoint";
import LottieAnimation from "../../common/LottieAnimation";
import { BatterylessEnergyStyles } from "../../styles/project-landing/batteryless-remote/BatterylessEnergy";

function BatterylessEnergy({ data }) {
  if (!data) return null;

  const [renderLottie, setRenderLottie] = useState(false);
  function checkRenderLottie() {
    if (renderLottie) return;
    return setRenderLottie(true);
  }
  const { label, first_paragraph, second_paragraph, animation, video } = data;
  return (
    <BatterylessEnergyStyles>
      <div className="turnkey-landing-energy">
        <div className="container">
          <div className="video-block js-animation--fade" data-screen-offset="1.8">
            <video
              className="js-video__responsive"
              autoPlay
              poster=""
              preload="auto"
              src={video.url}
              loop
              muted
              playsInline
              webkit-playsinline="true"
              x5-playsinline="true"
            ></video>
          </div>
          <div className="d-block">
            <h4 className="heading--block heading--block--black d-inline-block block-title js-animation--fade">
              <span className="heading--block__text">{label}</span>
            </h4>
          </div>
          <div className="row">
            <div className="col-md-6">
              <p className="block-desc desc--large js-animation--fade" data-screen-offset="1.6">
                {first_paragraph}
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <p
                className="block-desc desc--large js-animation--fade"
                data-screen-offset="1.7"
                data-offset=".1"
              >
                {second_paragraph}
              </p>
            </div>
            <div className="col-md-4 offset-md-2">
              <Waypoint onEnter={() => checkRenderLottie()} />
              <div className="info">
                <div className="icon">
                  {renderLottie && <LottieAnimation urlData={animation.file_animation.url} />}
                </div>
                <h4
                  className="h5 title js-animation--fade"
                  data-screen-offset="1.8"
                  data-offset=".1"
                >
                  {animation.title}
                </h4>
                <div
                  className="desc js-animation--fade"
                  data-screen-offset="1.9"
                  data-offset=".1"
                  dangerouslySetInnerHTML={{ __html: animation.content }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </BatterylessEnergyStyles>
  );
}

export default BatterylessEnergy;
