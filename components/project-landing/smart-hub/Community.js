import Link from "next/link";
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

              <Link href={url} legacyBehavior>
                <a
                  className="pageLink pageLink--black js-animation--fade"
                  data-screen-offset="1.7"
                  data-offset=".1"
                  target={open_new_tab ? "_blank" : "_self"}
                >
                  <span className="pageLink__text">{linkLabel}</span>
                  <span className="pageLink__icon">
                    <svg
                      width="31"
                      height="27"
                      viewBox="0 0 31 27"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="svg"
                    >
                      <path d="M15.8594 1L29 13.5L15.8594 26" stroke="white" strokeWidth="2"></path>
                      <path d="M0 13.5898L28.7829 13.5898" stroke="white" strokeWidth="2"></path>
                    </svg>
                  </span>
                </a>
              </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </BatterylessAboutStyles>
  );
}

export default Community;
