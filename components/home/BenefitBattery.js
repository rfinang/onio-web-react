import React, { useState } from "react";
import { Typography } from "../ui";
import { BenefitBatteryStyles } from "../styles/home/Benefitbattery";
import BenefitAnimations from "./BenefitAnimations";
import EnvironmentalBenefits from "./EnvironmentalBenefits";
import HomePossibilities from "./HomePossibilities";

function BenefitBattery({ benefitBatteryless, benefitAnimations, lowerBomData, oneChipData }) {
  if (!benefitBatteryless) return null;
  const { title, label, description } = benefitBatteryless;
  return (
    <BenefitBatteryStyles>
      <div className="benefitsBatteryless benefitsBatteryless--home benefitsBatteryless--bottomRadius">
        <div className="container">
          <div className="row spacing--bottom--xs">
            <div className="col-md-5 col-12">
              <Typography 
                variant="section-badge"
                className="mb-0 js-animation--fade"
              >
                {label}
              </Typography>
            </div>
          </div>
          <div className="row spacing--bottom--md">
            <div className="col-lg-4 col-md-5 col-12">
              <Typography
                variant="h2"
                className="mb-md-0 mb-1 js-animation--chars"
                dangerouslySetInnerHTML={{ __html: title }}
              />
            </div>
            <div className="col-lg-5 col-md-6 col-12 benefitsBatteryless__desc offset-lg-3 offset-md-1">
              <Typography 
                variant="body-xl"
                className="mb-0 pr-lg-1 js-animation--lines" 
                data-offset=".3"
              >
                {description}
              </Typography>
            </div>
          </div>
          <HomePossibilities oneChipData={oneChipData} isHomepage={true} />
        </div>
        {benefitAnimations && <BenefitAnimations benefitAnimations={benefitAnimations} />}

        <EnvironmentalBenefits lowerBomData={lowerBomData} />
      </div>
    </BenefitBatteryStyles>
  );
}

export default BenefitBattery;
