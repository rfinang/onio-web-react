import Link from "next/link";
import { Button } from "../../ui";
import { BatterylessAboutStyles } from "../../styles/project-landing/smart-hub/Community";

function Community({data}) {
  const { label, description, link } = data;
  const { url, label: linkLabel, open_new_tab } = link;
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
            <div className="col-sm-7 col-md-6 order-2 order-sm-1">
              <p className="info-desc desc--large js-animation--fade" data-screen-offset="1.6" dangerouslySetInnerHTML={{ __html: description.replaceAll("\n", "<br/>") }}/>
            </div>
            <div className="col-auto ms-sm-auto order-1 order-sm-2 mb-3">
              {link && (

              <Button
                as={Link}
                href={url}
                variant="link"
                color="black"
                hasArrow
                className="js-animation--fade"
                data-screen-offset="1.7"
                data-offset=".1"
                target={open_new_tab ? "_blank" : "_self"}
              >
                {linkLabel}
              </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </BatterylessAboutStyles>
  );
}

export default Community;
