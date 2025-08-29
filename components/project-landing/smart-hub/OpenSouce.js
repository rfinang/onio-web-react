import Link from "next/link";
import { useState } from "react";
import { Waypoint } from "react-waypoint";
import ImageComp from "../../common/Image";
import LottieAnimation from "../../common/LottieAnimation";
import { BatterylessEnergyStyles } from "../../styles/project-landing/smart-hub/OpenSource";

function OpenSource({ data }) {
  const { section_open_source } = data;
  const { label, title, description, get_the_project_files, hub_images } =
    section_open_source;

  const desc = description.replaceAll("\n", "<br/>");
  const { url, label: linkLabel, open_new_tab } = get_the_project_files;
  return (
    <BatterylessEnergyStyles>
      <div className="turnkey-landing-energy">
        <div className="container">
          <div className="d-block">
            <h4 className="heading--block heading--block--black d-inline-block block-title js-animation--fade">
              <span className="heading--block__text">{label}</span>
            </h4>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-5">
              <h3
                className="h2 section-title js-animation--fade"
                data-offset=".1"
              >
                {title}
              </h3>
            </div>
            <div className="col-md-6 offset-lg-1">
              <p
                className="h5 block-desc js-animation--fade"
                data-offset=".15"
                dangerouslySetInnerHTML={{ __html: desc }}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              {get_the_project_files && (
                <Link href={url}>
                  <a
                    className="resource resource--link resource--black js-animation--fade animation--fade"
                    target={open_new_tab ? "_blank" : "_self"}
                  >
                    <span className="d-block resource__heading">
                      {linkLabel}
                    </span>
                    <span className="d-block resource__icon">
                      <span className="iconLink iconLink--arrow iconLink--arrow--oval iconLink--arrow--small iconLink--arrow--black">
                        <svg
                          width="21"
                          height="21"
                          viewBox="0 0 21 21"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="svg"
                        >
                          <path
                            d="M10.1348 1.07703L19.5576 10.4999L10.1348 19.9228"
                            stroke="#222021"
                            strokeWidth="2"
                          ></path>
                        </svg>
                      </span>
                    </span>
                  </a>
                </Link>
              )}
            </div>
          </div>
          {hub_images && (
            <div className="image-list">
              {hub_images.length === 1 ? (
                <div className="image-block image-block--big js-animation--fade">
                  <ImageComp image={hub_images[0]} />
                </div>
              ) : (
                <div className="row">
                  {hub_images.map((item, index) => (
                    <div className="col-md-6" key={item.id}>
                      <div
                        className="image-block js-animation--fade"
                        data-offset={index % 2 === 1 ? ".15" : 0}
                      >
                        <img src={item.url} alt={item.alternativeText} />

                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </BatterylessEnergyStyles>
  );
}

export default OpenSource;
