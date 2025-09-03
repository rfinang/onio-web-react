import Link from "next/link";
import ImageComp from "../../common/Image";
import { Button } from "../../ui";
import { SmartHubProjectStyles } from "../../styles/project-landing/smart-hub/Projects";

function Project({ data }) {
  if (!data) return null;
  const { title, link_to, items } = data;

  return (
    <SmartHubProjectStyles>
      <div
        className={`turnkeyProjects turnkeyProjects--home turnkeyProjects--productLandingpage`}
      >
        <div className="container">
          <div className="row mb-5">
            <div className="col-lg-6 col-md-7 col-sm-8 col-12 mb-sm-0 mb-4">
              <h2 className={`h2 mb-0 js-animation--chars`}>{title}</h2>
            </div>
            <div className="col-auto ms-sm-auto mb-3 mt-sm-2">
              <Button
                as={Link}
                href={link_to.url}
                variant="link"
                color="black"
                hasArrow
                target={link_to.open_new_tab ? "_blank" : "_self"}
              >
                {link_to.label}
              </Button>
            </div>
          </div>
          {items.length < 2 ? (
            <div className="bigThumbnailLink">
              <Link href={items[0].link} legacyBehavior>
                <a className="bigThumbnailLink__link" href="#">
                  <div className="bigThumbnailLink__thumbnail image__object-fit js-animation--fade--none">
                    <ImageComp image={items[0].image} />
                  </div>
                  <div className="bigThumbnailLink__info">
                    <div
                      className="bigThumbnailLink__info__inner backdropBlur js-animation--mask"
                      data-offset=".1"
                    >
                      <h5 className="h5 bigThumbnailLink__info__heading">
                        {items[0].title}
                      </h5>
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
                  </div>
                </a>
              </Link>
            </div>
          ) : (
            <div className="row">
              {items.map((item) => {
                const { id, title, image } = item;
                return (
                  <div key={id} className="col-sm-6 col-12">
                    <div className="project">
                      <Link href={item.link} legacyBehavior>
                        <a className="project__link">
                          <div
                            className="project__thumbnail image__object-fit js-animation--fade--none"
                            data-offset=".15"
                          >
                            <ImageComp image={image} />
                          </div>
                          <div className="project__info">
                            <div
                              className="project__info__inner backdropBlur js-animation--mask"
                              data-offset=".25"
                            >
                              <h5 className="h5 project__info__heading">
                                {title}
                              </h5>
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
                          </div>
                        </a>
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </SmartHubProjectStyles>
  );
}

export default Project;
