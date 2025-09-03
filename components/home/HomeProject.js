import Link from "next/link";
import { HomeProjectStyles } from "../styles/home/HomeProject";
import ImageComp from "../common/Image";
import { Typography, Button } from "../ui";
function HomeProject({ homeProject, customClass, hideTop = false, showDesc = false }) {
  if (!homeProject) return null;
  
  const { label, title, link_to, tech_redefined_items, description_title, description } =
    homeProject;
  const techRedefinedItem = tech_redefined_items.length > 0 ? tech_redefined_items[0] : null;
  return (
    <HomeProjectStyles>
      <div className={`turnkeyProjects turnkeyProjects--home ${customClass ? customClass : ""}`}>
        <div className="container">
          {!hideTop && (
            <div className="row spacing--bottom--xs">
              <div className="col-sm-7 col-md-4 col-12">
                <Typography variant="section-badge" className="mb-0 js-animation--fade">{label}</Typography>
              </div>
              <div
                className="col-auto ms-auto d-sm-block d-none js-animation--fade"
                data-offset=".15"
              >
                <Button
                  as={Link}
                  href={link_to.url}
                  variant="link"
                  color="black"
                  hasArrow
                >
                  {link_to.label}
                </Button>
              </div>
            </div>
          )}
          {showDesc && (
            <>
              <div className="row">
                <div className="col-md-6 col-12">
                  <Typography
                    variant="h2"
                    className="mb-md-0 mb-2 js-animation--chars"
                    dangerouslySetInnerHTML={{ __html: description_title }}
                  />
                </div>
                <div className="col-md-6 col-12 pt-2 pr-md-4">
                  <Typography variant="body-xl" className="mb-md-2 mb-0 js-animation--lines">{description}</Typography>
                </div>
              </div>
              <span className="d-sm-block d-none spacing--bottom--xl"></span>
              <span className="d-sm-none d-block mb-3"></span>
            </>
          )}
          <div className="row mb-5">
            <div className="col-lg-6 col-md-7 col-sm-10 col-12 mb-sm-0 mb-4">
              <Typography
                variant={showDesc ? "h3" : "h2"}
                className={`mb-0 ${
                  showDesc ? "js-animation--chars" : "js-animation--chars--2d"
                }`}
                dangerouslySetInnerHTML={{ __html: title }}
              />
            </div>
            <div className="col-12 d-sm-none d-block">
              <Button
                as={Link}
                href={link_to.url}
                variant="link"
                color="black"
                hasArrow
              >
                {link_to.label}
              </Button>
            </div>
          </div>
          {tech_redefined_items.length < 2 ? (
            <div className="bigThumbnailLink">
              <Link href={techRedefinedItem.link} legacyBehavior>
                <a className="bigThumbnailLink__link" href="#">
                  <div className="bigThumbnailLink__thumbnail image__object-fit js-animation--fade--none">
                    <ImageComp image={techRedefinedItem.image} />
                  </div>
                  <div className="bigThumbnailLink__info">
                    <div
                      className="bigThumbnailLink__info__inner backdropBlur js-animation--mask"
                      data-offset=".1"
                    >
                      <Typography variant="h5" className="bigThumbnailLink__info__heading">
                        {techRedefinedItem.title}
                      </Typography>
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
              {tech_redefined_items.map((item) => {
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
                              <Typography variant="h5" className="project__info__heading">{title}</Typography>
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
    </HomeProjectStyles>
  );
}

export default HomeProject;
