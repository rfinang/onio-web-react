import { useEffect } from "react";
import Link from "next/link";
import { Typography, Button } from "../ui";
import { CareersLandingContentStyles } from "../styles/career/CareerLandingContent";

function CareerLandingContent({ careerHeader, workLocations, careersData }) {
  if (!careerHeader) return null;
  const { title, label, description } = careerHeader;

  return (
    <CareersLandingContentStyles>
      <div className="careersLanding__content section--topPage bg-background">
        <div className="container">
          <div className="row spacing--bottom--xs">
            <div className="col-4">
              <Typography variant="section-badge" className="mb-0 js-animation--fade">
                {label}
              </Typography>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-7 col-md-8 col-sm-10 col-12 pb-1">
              <Typography
                variant="h1"
                className="spacing--bottom--md pb-2js-animation--chars"
                data-screen-offset=".3"
              >
                {title}
              </Typography>
            </div>
            <div className="col-lg-6 col-md-8 col-sm-10 col-12 spacing--bottom--md pb-2">
              <Typography 
                variant="body-xl" 
                className="js-animation--lines" 
                data-screen-offset=".6"
              >
                {description}
              </Typography>
            </div>
          </div>

          <div className="row filterJob">
            <div className="col-12 mb-2 pb-1">
              <Typography variant="h4" className="js-animation--lines">Open Position:</Typography>
            </div>
            <div className="col-md-3 filterJob__list mb-md-0 mb-4  js-animation--fade">
              {workLocations && (
                <div className="row">
                  <Typography variant="h6" className="col-sm-12 col-4 mb-2">Filter by:</Typography>
                  <div className="col-sm-12 col-7 offset-sm-0 offset-1">
                    <ul className="ul-reset nav row pl-sm-0 pl-3">
                      <li className="mr-sm-2 col-sm-auto col-12 mb-1">
                        <Button
                          as="a"
                          href="#"
                          variant="ghost"
                          color="black"
                          data-bs-toggle="tab"
                          data-bs-target="#tab_0"
                        >
                          <Typography variant="h6" as="span">All</Typography>
                        </Button>
                      </li>
                      {workLocations.map((item, index) => {
                        const { id, title } = item;
                        return (
                          <li key={id} className="mr-sm-2 col-sm-auto col-12 mb-1">
                            <Button
                              as="a"
                              href="#"
                              variant="ghost"
                              color="black"
                              data-bs-toggle="tab"
                              data-bs-target={`#tab_${index + 1}`}
                            >
                              <Typography variant="h6" as="span">{title}</Typography>
                            </Button>
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
                                    <Typography variant="h6" className="accordian__item__link__text mb-0">{title}</Typography>
                                  </div>
                                  <div className="col-4 d-sm-block d-none">
                                    {work_locations && (
                                      <Typography variant="body" className="accordian__item__link__desc mb-0">
                                        {work_locations.map((item, index) => (
                                          <span key={item.id}>
                                            {item.title}
                                            {index + 1 < work_locations.length ? " | " : null}
                                          </span>
                                        ))}
                                      </Typography>
                                    )}
                                  </div>
                                  <div className="col-auto ms-auto accordian__item__link__icon">
                                    <Button variant="icon" hasIcon="arrow" color="black" size="large" shape="oval" />
                                  </div>
                                  {work_locations && (
                                    <Typography variant="body" className="col-12 d-sm-none d-block pb-sm-0 pb-1 accordian__item__link__desc mb-0">
                                      {work_locations.map((item, index) => (
                                        <span key={item.id}>
                                          {item.title}
                                          {index + 1 < work_locations.length ? " | " : null}
                                        </span>
                                      ))}
                                    </Typography>
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
                                          <Typography variant="h6" className="accordian__item__link__text mb-0">
                                            {careerTitle}
                                          </Typography>
                                        </div>
                                        <div className="col-4 d-sm-block d-none">
                                          <Typography variant="body" className="accordian__item__link__desc mb-0">
                                            {title}
                                          </Typography>
                                        </div>
                                        <div className="col-auto ms-auto accordian__item__link__icon">
                                          <Button variant="icon" hasIcon="arrow" color="black" size="large" shape="oval" />
                                        </div>
                                        <Typography variant="body" className="col-12 d-sm-none d-block pb-sm-0 pb-1 accordian__item__link__desc mb-0">
                                          {title}
                                        </Typography>
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
