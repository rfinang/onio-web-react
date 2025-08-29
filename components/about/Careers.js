import Link from "next/link";
import ImageComp from "../common/Image";
import { CareersStyles } from "../styles/about/Careers";

function Careers({ careerData, positions }) {
  if (!careerData) return null;
  const { label_1: label, title_1: title, description, content_blocks: content } = careerData;
  return (
    <CareersStyles>
      <div className="careers bg-dark">
        <div className="careers__container container">
          <div className="row spacing--bottom--xs">
            <div className="col-12">
              <h4 className="heading--block heading--block--white mb-0 d-inline-block js-animation--fade">
                <span className="heading--block__text">{label}</span>
              </h4>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-5 col-md-6 col-12">
              <h2 className="h2 text-white js-animation--chars">{title}</h2>
              <span className="spacing--bottom--xl d-md-block d-none"></span>
            </div>
            <div className="col-lg-6 col-md-5 col-12 pt-2 desc--large text-white offset-md-1">
              <p className="js-animation--lines">{description}</p>
              <span className="spacing--bottom--xl d-md-none d-block"></span>
            </div>
          </div>
          {content.length > 0 && (
            <>
              {content.map((item, index) => {
                const { id, title, content: itemContent, image } = item;

                return (
                  <div
                    key={id}
                    className={`row ${
                      positions || index + 1 < content.length ? "spacing--bottom--lg" : ""
                    }  ${index + 1 < content.length ? "pb-2" : ""} `}
                  >
                    <div
                      className={`col-sm-6 col-12 ${
                        index % 2 === 1 ? "offset-sm-1 order-sm-1" : ""
                      }`}
                    >
                      <figure className="image__object-fit image--radius js-animation--fade--none">
                        <ImageComp image={image} />
                      </figure>
                    </div>

                    <div
                      className={`${
                        index % 2 === 1
                          ? "col-lg-4 col-12 order-sm-0 offset-lg-1"
                          : "col-md-4 offset-sm-1"
                      } col-sm-5 text-white`}
                    >
                      <h5 className="h5 spacing--top--md mb-3 js-animation--fade" data-offset=".15">
                        {title}
                      </h5>
                      <div
                        className="desc--small js-animation--fade"
                        data-offset=".25"
                        dangerouslySetInnerHTML={{ __html: itemContent }}
                      />
                    </div>
                  </div>
                );
              })}
            </>
          )}
          {positions && (
            <div className="row">
              <div className="col-md-4 col-12">
                <h4 className="h4 text-white js-animation--fade">Open positions:</h4>
              </div>
              <div className="col-md-8 col-12">
                <ul className="overMenu__accordian pt-1 spacing--bottom--md ul-reset">
                  {positions.map((item, index) => {
                    const { id, title, slug, work_locations } = item;
                    return (
                      <li
                        key={id}
                        className="accordian__item accordian__item--large js-animation--fade"
                        data-offset={index * 0.05 + 0.1}
                      >
                        <Link href={`/career/${slug}.html`} legacyBehavior>
                          <a className="accordian__item__link accordian__item__link--white">
                            <div className="row align-items-sm-start align-items-center g-0">
                              <div className="col-ms-7 col">
                                <h6 className="h6 accordian__item__link__text mb-0">{title}</h6>
                              </div>
                              <div className="col-4 d-sm-block d-none">
                                {work_locations && (
                                  <p className="desc--small accordian__item__link__desc mb-0">
                                    {work_locations.map((workItem, index) => (
                                      <span key={workItem.id}>
                                        {workItem.title}
                                        {index + 1 < work_locations.length ? " | " : null}
                                      </span>
                                    ))}
                                  </p>
                                )}
                              </div>
                              <div className="col-auto ms-auto accordian__item__link__icon">
                                <span className="iconLink iconLink--arrow iconLink--arrow--oval iconLink--arrow--large iconLink--arrow--white">
                                  <svg
                                    width="16"
                                    height="28"
                                    viewBox="0 0 16 28"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="svg"
                                  >
                                    <path
                                      d="M1.57715 1.61572L13.9615 14.0001L1.57715 26.3844"
                                      stroke="white"
                                      strokeWidth="2"
                                    ></path>
                                  </svg>
                                </span>
                              </div>
                              {work_locations && (
                                <p className="desc--small col-12 d-sm-none d-block pb-sm-0 pb-1 accordian__item__link__desc mb-0">
                                  {work_locations.map((workItem, index) => (
                                    <span key={workItem.id}>
                                      {workItem.title}
                                      {index + 1 < workItem.length ? " | " : null}
                                    </span>
                                  ))}
                                </p>
                              )}
                            </div>
                          </a>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
                <div className="text-sm-end">
                  <div className="d-inline-block js-animation--fade">
                    <Link href="/career" legacyBehavior>
                      <a className="pageLink pageLink--white">
                        <span className="pageLink__text">View all current positions</span>
                        <span className="pageLink__icon">
                          <svg
                            width="31"
                            height="27"
                            viewBox="0 0 31 27"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="svg"
                          >
                            <path
                              d="M15.8594 1L29 13.5L15.8594 26"
                              stroke="white"
                              strokeWidth="2"
                            ></path>
                            <path
                              d="M0 13.5898L28.7829 13.5898"
                              stroke="white"
                              strokeWidth="2"
                            ></path>
                          </svg>
                        </span>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </CareersStyles>
  );
}

export default Careers;
