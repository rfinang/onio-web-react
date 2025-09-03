import { useState } from "react";
import { Waypoint } from "react-waypoint";
import { Typography } from "../../ui";
import Container from "../../ui/Container";
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
        <Container>
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
            <Typography 
              variant="section-badge" 
              className="block-title js-animation--fade"
            >
              {label}
            </Typography>
          </div>
          <div className="grid md:grid-cols-12 gap-lg">
            <div className="md:col-span-6">
              <Typography 
                variant="body-xl" 
                className="block-desc js-animation--fade" 
                data-screen-offset="1.6"
                as="p"
              >
                {first_paragraph}
              </Typography>
            </div>
          </div>
          <div className="grid md:grid-cols-12 gap-lg">
            <div className="md:col-span-6">
              <Typography
                variant="body-xl"
                className="block-desc js-animation--fade"
                data-screen-offset="1.7"
                data-offset=".1"
                as="p"
              >
                {second_paragraph}
              </Typography>
            </div>
            <div className="md:col-span-4 md:col-start-9">
              <Waypoint onEnter={() => checkRenderLottie()} />
              <div className="info">
                <div className="icon">
                  {renderLottie && <LottieAnimation urlData={animation.file_animation.url} />}
                </div>
                <Typography
                  variant="h5"
                  className="title js-animation--fade"
                  data-screen-offset="1.8"
                  data-offset=".1"
                  as="h4"
                >
                  {animation.title}
                </Typography>
                <div
                  className="desc js-animation--fade"
                  data-screen-offset="1.9"
                  data-offset=".1"
                  dangerouslySetInnerHTML={{ __html: animation.content }}
                />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </BatterylessEnergyStyles>
  );
}

export default BatterylessEnergy;
