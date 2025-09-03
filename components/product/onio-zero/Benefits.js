import { Typography } from "../../ui";
import EnvironmentalBenefits from "../../home/EnvironmentalBenefits";
import BenefitAnimations from "../../home/BenefitAnimations";
import { BenefitsStyles } from "../../styles/product/Benefits";

function Benefits({ lowerBomData, sectionBenefits }) {
  if (!sectionBenefits) return null;
  const { label, description, title, items } = sectionBenefits;
  return (
    <BenefitsStyles>
      <div className="ppBenefits bg-secondary">
        <div className="ppBenefits__container container">
          <div className="row mb-sm-5 mb-4">
            <div className="col-12">
              <Typography 
                variant="section-badge"
                className="mb-0 js-animation--fade"
              >
                {label}
              </Typography>
            </div>
          </div>
          <div className="row spacing--bottom--lg pb-2">
            <div className="col-md-5 col-sm-7 col-12">
              <Typography
                variant="h2"
                className="mb-sm-0 mb-3 js-animation--chars"
                dangerouslySetInnerHTML={{ __html: title }}
              />
            </div>
            <div className="col-md-6 col-sm-5 col-12 pt-2 offset-md-1">
              <Typography 
                variant="body-xl" 
                className="js-animation--lines" 
                data-offset=".15"
                as="p"
              >
                {description}
              </Typography>
            </div>
          </div>
        </div>
        <BenefitAnimations benefitAnimations={items} />
        <EnvironmentalBenefits customClass="pb-0" lowerBomData={lowerBomData} />
      </div>
    </BenefitsStyles>
  );
}

export default Benefits;
