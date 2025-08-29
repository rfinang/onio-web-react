import React from "react";
import ImageComp from "../../common/Image";
import BenefitAnimations from "../../home/BenefitAnimations";
import { BatterylessReliabilityStyles } from "../../styles/project-landing/batteryless-remote/BatterylessReliability";

function BatterylessReliability({ data, banner }) {
  if (!data) return null;
  const { label, title, description, items } = data;
  return (
    <BatterylessReliabilityStyles>
      <div className="turnkey-landing-reliability">
        <div className="container">
          <div className="d-block">
            <h4 className="heading--block heading--block--black d-inline-block block-title js-animation--fade">
              <span className="heading--block__text">{label}</span>
            </h4>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-5">
              <h3 className="h2 section-title  js-animation--fade" data-offset=".1">
                {title}
              </h3>
            </div>
            <div className="col-md-6 offset-lg-1">
              <p className="h5 section-desc js-animation--fade" data-offset=".15">
                {description}
              </p>
            </div>
          </div>
        </div>
        <BenefitAnimations benefitAnimations={items} />
        <div className="container">
          <div className="banner js-animation--fade" data-offset=".35">
            <ImageComp image={banner} />
          </div>
        </div>
      </div>
    </BatterylessReliabilityStyles>
  );
}

export default BatterylessReliability;
