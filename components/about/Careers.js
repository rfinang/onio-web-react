import Link from "next/link";
import ImageComp from "../common/Image";
import { Typography, Button } from "../ui";
import { CareersStyles } from "../styles/about/Careers";

function Careers({ careerData, positions }) {
  if (!careerData) return null;
  const { label_1: label, title_1: title, description, content_blocks: content } = careerData;
  return (
    <CareersStyles>
      <div className="careers bg-primary">
        <div className="careers__container container">
          <div className="row spacing--bottom--xs">
            <div className="col-12">
              <Typography 
                variant="section-badge" 
                className="white mb-0 js-animation--fade"
              >
                {label}
              </Typography>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-5 col-md-6 col-12">
              <Typography variant="h2" className="text-white js-animation--chars">{title}</Typography>
              <span className="spacing--bottom--xl d-md-block d-none"></span>
            </div>
            <div className="col-lg-6 col-md-5 col-12 pt-2 offset-md-1">
              <Typography 
                variant="body-xl" 
                className="text-white js-animation--lines"
                as="p"
              >
                {description}
              </Typography>
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
                      <Typography variant="h5" className="spacing--top--md mb-3 js-animation--fade text-white" data-offset=".15">
                        {title}
                      </Typography>
                      <Typography
                        variant="body"
                        className="js-animation--fade"
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
                <Typography variant="h4" className="text-white js-animation--fade">Open positions:</Typography>
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
                                <Typography variant="h6" className="accordian__item__link__text mb-0 text-white">{title}</Typography>
                              </div>
                              <div className="col-4 d-sm-block d-none">
                                {work_locations && (
                                  <Typography 
                                    variant="body" 
                                    className="accordian__item__link__desc mb-0"
                                    as="p"
                                  >
                                    {work_locations.map((workItem, index) => (
                                      <span key={workItem.id}>
                                        {workItem.title}
                                        {index + 1 < work_locations.length ? " | " : null}
                                      </span>
                                    ))}
                                  </Typography>
                                )}
                              </div>
                              <div className="col-auto ms-auto accordian__item__link__icon">
                                <Button variant="icon" hasIcon="arrow" color="white" size="large" shape="oval" />
                              </div>
                              {work_locations && (
                                <Typography 
                                  variant="body" 
                                  className="col-12 d-sm-none d-block pb-sm-0 pb-1 accordian__item__link__desc mb-0"
                                  as="p"
                                >
                                  {work_locations.map((workItem, index) => (
                                    <span key={workItem.id}>
                                      {workItem.title}
                                      {index + 1 < workItem.length ? " | " : null}
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
                <div className="text-sm-end">
                  <div className="js-animation--fade">
                    <Button
                      as={Link}
                      href="/career"
                      variant="link"
                      color="white"
                      hasArrow
                    >
                      View all current positions
                    </Button>
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
