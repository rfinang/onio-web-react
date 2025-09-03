import Link from "next/link";
import { Button } from "../../ui";
import { BatterylessAboutStyles } from "../../styles/project-landing/batteryless-remote/BatterylessAbout";

function BatterylessAbout({ data }) {
  if (!data) return null;
  const { label, first_paragraph, second_paragraph, link_to } = data;
  return (
    <BatterylessAboutStyles>
      <div className="turnkey-landing-about">
        <div className="container">
          <div className="d-block">
            <h4 className="heading--block heading--block--black d-inline-block block-title js-animation--fade is-animation-loading">
              <span className="heading--block__text">{label}</span>
            </h4>
          </div>
          <div className="row">
            <div className="col-sm-7 col-md-6">
              <p className="info-desc desc--large js-animation--fade" data-screen-offset="1.6">
                {first_paragraph}
              </p>
            </div>
            <div className="d-none d-sm-block col-auto ms-auto">
              <Button
                as={Link}
                href={link_to.url}
                variant="link"
                color="black"
                hasArrow
                className="js-animation--fade"
                data-screen-offset="1.7"
                data-offset=".1"
              >
                {link_to.label}
              </Button>
            </div>
          </div>
          <p className="info-foot js-animation--fade" data-screen-offset="1.8" data-offset=".2">
            {second_paragraph}
          </p>
        </div>
      </div>
    </BatterylessAboutStyles>
  );
}

export default BatterylessAbout;
