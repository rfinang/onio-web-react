import Link from "next/link";
import HomePossibilities from "../../home/HomePossibilities";
import { Button } from "../../ui";
import { BenefitBatteryStyles } from "../../styles/home/Benefitbattery";
function BenefitBattery({ benefitBatteryless, sectionNavigation, oneChipData }) {
  const { content: navContent, link: navLink } = sectionNavigation;
  const { title, label, description } = benefitBatteryless;
  return (
    <BenefitBatteryStyles>
      <div className="benefitsBatteryless benefitsBatteryless--product benefitsBatteryless--topRadius">
        <div className="benefitsBatteryless__content">
          <div className="container">
            <div className="row spacing--bottom--lg pb-sm-0 pb-2">
              <div className="col-lg-4 col-md-6 col-sm-7 col-12 mb-sm-0 mb-4 desc--large">
                <p
                  className="mb-0 js-animation--lines is-animation-loading"
                  data-screen-offset="1."
                >
                  {navContent}
                </p>
              </div>
              <div className="col-sm-auto col-12 ms-sm-auto">
                <Button
                  as={Link}
                  href={navLink.url}
                  variant="link"
                  color="black"
                  hasArrow
                  className="js-animation--fade is-animation-loading"
                  data-screen-offset="1.15"
                >
                  {navLink.label}
                </Button>
              </div>
            </div>
          </div>
          {benefitBatteryless && (
            <div className="container spacing--bottom--lg pb-2">
              <div className="row spacing--bottom--xs">
                <div className="col-md-5 col-12">
                  <h4 className="heading--block mb-0 d-inline-block js-animation--fade">
                    <span className="heading--block__text">{label}</span>
                  </h4>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-4 col-md-5 col-12">
                  <h2
                    className="h2 mb-md-0 mb-1 js-animation--chars"
                    dangerouslySetInnerHTML={{ __html: title }}
                  />
                </div>
                <div className="col-lg-5 col-md-6 col-12 benefitsBatteryless__desc desc--large offset-lg-3 offset-md-1">
                  <p className="mb-0 pr-lg-1 js-animation--lines" data-offset=".15">
                    {description}
                  </p>
                </div>
              </div>
            </div>
          )}
          {oneChipData && (
            <div className="container pb-sm-4">
              <HomePossibilities oneChipData={oneChipData} />
            </div>
          )}
        </div>
      </div>
    </BenefitBatteryStyles>
  );
}

export default BenefitBattery;
