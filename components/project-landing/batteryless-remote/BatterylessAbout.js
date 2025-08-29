import Link from "next/link";
import React from "react";
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
              <Link href={link_to.url}>
                <a
                  className="pageLink pageLink--black js-animation--fade"
                  data-screen-offset="1.7"
                  data-offset=".1"
                >
                  <span className="pageLink__text">{link_to.label}</span>
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
