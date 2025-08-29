import Link from "next/link";
import ImageComp from "../../common/Image";
import { BatterylessAboutStyles } from "../../styles/project-landing/smart-hub/BatterylessAbout";

function BatterylessAbout({ data }) {
  if (!data) return null;
  const { smart_hub_introduction, banner } = data;
  const { label, first_paragraph, second_paragraph } = smart_hub_introduction;
  
  
  return (
    <BatterylessAboutStyles>
      <div className="turnkey-landing-about">
        <div className="container">
          <div
            className="video-block js-animation--fade image__object-fit image--radius"
            data-screen-offset="1.8"
          >
            {/* <img src="/images/ONiO_hub_home.jpg" /> */}
            <ImageComp image={banner} />
          </div>
          <div className="d-block">
            <h4 className="heading--block heading--block--black d-inline-block block-title js-animation--fade is-animation-loading">
              <span className="heading--block__text">{label}</span>
            </h4>
          </div>
          <p
            className="info-desc desc--large js-animation--fade"
            data-screen-offset="1.6"
          >
            {first_paragraph}
          </p>
          <p
            className="info-foot js-animation--fade"
            data-screen-offset="1.8"
            data-offset=".2"
          >
            {second_paragraph}
          </p>
        </div>
      </div>
    </BatterylessAboutStyles>
  );
}

export default BatterylessAbout;
