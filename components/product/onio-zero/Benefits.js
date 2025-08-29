import EnvironmentalBenefits from "../../home/EnvironmentalBenefits";
import BenefitAnimations from "../../home/BenefitAnimations";
import { BenefitsStyles } from "../../styles/product/Benefits";

function Benefits({ lowerBomData, sectionBenefits }) {
  if (!sectionBenefits) return null;
  const { label, description, title, items } = sectionBenefits;
  return (
    <BenefitsStyles>
      <div className="ppBenefits bg-yellow">
        <div className="ppBenefits__container container">
          <div className="row mb-sm-5 mb-4">
            <div className="col-12">
              <h4 className="heading--block mb-0 d-inline-block  js-animation--fade">
                <span className="heading--block__text">{label}</span>
              </h4>
            </div>
          </div>
          <div className="row spacing--bottom--lg pb-2">
            <div className="col-md-5 col-sm-7 col-12">
              <h2
                className="h2 mb-sm-0 mb-3 js-animation--chars"
                dangerouslySetInnerHTML={{ __html: title }}
              />
            </div>
            <div className="col-md-6 col-sm-5 col-12 pt-2 offset-md-1 desc--large">
              <p className="js-animation--lines" data-offset=".15">
                {description}
              </p>
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
