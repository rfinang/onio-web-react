import { useEffect } from "react";
import Link from "next/link";
import { CareersLandingContentStyles } from "../styles/career/CareerLandingContent";

function CareerLandingContent({ careerHeader, workLocations, careersData }) {
  if (!careerHeader) return null;
  const { title, label, description } = careerHeader;

  return (
    <CareersLandingContentStyles>
      <div className="careersLanding__content section--topPage bg-wild">
        <div className="container">
          <div className="row spacing--bottom--xs">
            <div className="col-4">
              <h4 className="heading--block mb-0 d-inline-block js-animation--fade">
                <span className="heading--block__text">{label}</span>
              </h4>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-7 col-md-8 col-sm-10 col-12 pb-1">
              <h1
                className="h1 spacing--bottom--md pb-2js-animation--chars"
                data-screen-offset=".3"
              >
                {title}
              </h1>
            </div>
            <div className="col-lg-6 col-md-8 col-sm-10 col-12 desc--large spacing--bottom--md pb-2">
              <p className="js-animation--lines" data-screen-offset=".6">
                {description}
              </p>
            </div>
          </div>

          <div className="row filterJob">
            <div className="col-12 mb-2 pb-1">
              <h4 className="h4 js-animation--lines">Open Position:</h4>
            </div>
            <div className="col-md-3 filterJob__list mb-md-0 mb-4  js-animation--fade">
              {workLocations && (
                <div className="row">
                  <p className="h6 col-sm-12 col-4 mb-2">Filter by:</p>
                  <div className="col-sm-12 col-7 offset-sm-0 offset-1">
                    <ul className="ul-reset nav row pl-sm-0 pl-3">
                      <li className="mr-sm-2 col-sm-auto col-12 mb-1">
                        <a
                          href="#"
                          className="h6 linkHover--black"
                          data-bs-toggle="tab"
                          data-bs-target="#tab_0"
                        >
                          All
                        </a>
                      </li>
                      {workLocations.map((item, index) => {
                        const { id, title } = item;
                        return (
                          <li key={id} className="mr-sm-2 col-sm-auto col-12 mb-1">
                            <a
                              href="#"
                              className="h6 linkHover--black"
                              data-bs-toggle="tab"
                              data-bs-target={`#tab_${index + 1}`}
                            >
                              {title}
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              )}
            </div>
            <div className="col-md-8 offset-md-1">
              <div className="tab-content">
                <div className="tab-pane fade show active" id="tab_0" role="tabpanel">
                  {careersData && (
                    <ul className="overMenu__accordian ul-reset">
                      {careersData.map((item) => {
                        const { id, title, slug, work_locations } = item;
                        return (
                          <li
                            key={id}
                            className="accordian__item accordian__item--large js-animation--fade"
                            data-offset=".15"
                          >
                            <Link href={`/career/${slug}.html`} legacyBehavior>
                              <a className="accordian__item__link accordian__item__link--black">
                                <div className="row align-items-sm-start align-items-center g-0">
                                  <div className="col-ms-7 col">
                                    <h6 className="h6 accordian__item__link__text mb-0">{title}</h6>
                                  </div>
                                  <div className="col-4 d-sm-block d-none">
                                    {work_locations && (
                                      <p className="desc--small accordian__item__link__desc mb-0">
                                        {work_locations.map((item, index) => (
                                          <span key={item.id}>
                                            {item.title}
                                            {index + 1 < work_locations.length ? " | " : null}
                                          </span>
                                        ))}
                                      </p>
                                    )}
                                  </div>
                                  <div className="col-auto ms-auto accordian__item__link__icon">
                                    <span className="iconLink iconLink--arrow iconLink--arrow--oval iconLink--arrow--large iconLink--arrow--black">
                                      <svg
                                        width="16"
                                        height="28"
                                        viewBox="0 0 16 28"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
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
                                      {work_locations.map((item, index) => (
                                        <span key={item.id}>
                                          {item.title}
                                          {index + 1 < work_locations.length ? " | " : null}
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
                  )}
                </div>
                {workLocations && (
                  <>
                    {workLocations.map((item, index) => {
                      const { id, careers, title } = item;
                      return (
                        <div
                          key={id}
                          className="tab-pane fade"
                          id={`tab_${index + 1}`}
                          role="tabpanel"
                        >
                          <ul className="overMenu__accordian ul-reset">
                            {careers.map((item) => {
                              const { id, title: careerTitle, slug } = item;
                              return (
                                <li key={id} className="accordian__item accordian__item--large">
                                  <Link href={`/career/${slug}.html`} legacyBehavior>
                                    <a className="accordian__item__link accordian__item__link--black">
                                      <div className="row align-items-sm-start align-items-center g-0">
                                        <div className="col-ms-7 col">
                                          <h6 className="h6 accordian__item__link__text mb-0">
                                            {careerTitle}
                                          </h6>
                                        </div>
                                        <div className="col-4 d-sm-block d-none">
                                          <p className="desc--small accordian__item__link__desc mb-0">
                                            {title}
                                          </p>
                                        </div>
                                        <div className="col-auto ms-auto accordian__item__link__icon">
                                          <span className="iconLink iconLink--arrow iconLink--arrow--oval iconLink--arrow--large iconLink--arrow--black">
                                            <svg
                                              width="16"
                                              height="28"
                                              viewBox="0 0 16 28"
                                              fill="none"
                                              xmlns="http://www.w3.org/2000/svg"
                                            >
                                              <path
                                                d="M1.57715 1.61572L13.9615 14.0001L1.57715 26.3844"
                                                stroke="white"
                                                strokeWidth="2"
                                              ></path>
                                            </svg>
                                          </span>
                                        </div>
                                        <p className="desc--small col-12 d-sm-none d-block pb-sm-0 pb-1 accordian__item__link__desc mb-0">
                                          {title}
                                        </p>
                                      </div>
                                    </a>
                                  </Link>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      );
                    })}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </CareersLandingContentStyles>
  );
}

export default CareerLandingContent;
