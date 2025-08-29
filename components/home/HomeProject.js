import Link from "next/link";
import { HomeProjectStyles } from "../styles/home/HomeProject";
import ImageComp from "../common/Image";
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
                <h4 className="heading--block mb-0 d-inline-block  js-animation--fade">
                  <span className="heading--block__text">{label}</span>
                </h4>
              </div>
              <div
                className="col-auto ms-auto d-sm-block d-none js-animation--fade"
                data-offset=".15"
              >
                <Link href={link_to.url}>
                  <a className="pageLink pageLink--black">
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
                        <path
                          d="M15.8594 1L29 13.5L15.8594 26"
                          stroke="white"
                          strokeWidth="2"
                        ></path>
                        <path d="M0 13.5898L28.7829 13.5898" stroke="white" strokeWidth="2"></path>
                      </svg>
                    </span>
                  </a>
                </Link>
              </div>
            </div>
          )}
          {showDesc && (
            <>
              <div className="row">
                <div className="col-md-6 col-12">
                  <h2
                    className="h2 mb-md-0 mb-2 js-animation--chars"
                    dangerouslySetInnerHTML={{ __html: description_title }}
                  />
                </div>
                <div className="col-md-6 col-12 pt-2 pr-md-4">
                  <p className="desc--large mb-md-2 mb-0 js-animation--lines">{description}</p>
                </div>
              </div>
              <span className="d-sm-block d-none spacing--bottom--xl"></span>
              <span className="d-sm-none d-block mb-3"></span>
            </>
          )}
          <div className="row mb-5">
            <div className="col-lg-6 col-md-7 col-sm-10 col-12 mb-sm-0 mb-4">
              <h2
                className={`${showDesc ? "h3" : "h2"} mb-0 ${
                  showDesc ? "js-animation--chars" : "js-animation--chars--2d"
                }`}
                dangerouslySetInnerHTML={{ __html: title }}
              />
            </div>
            <div className="col-12 d-sm-none d-block">
              <Link href={link_to.url}>
                <a className="pageLink pageLink--black">
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
          {tech_redefined_items.length < 2 ? (
            <div className="bigThumbnailLink">
              <Link href={techRedefinedItem.link}>
                <a className="bigThumbnailLink__link" href="#">
                  <div className="bigThumbnailLink__thumbnail image__object-fit js-animation--fade--none">
                    <ImageComp image={techRedefinedItem.image} />
                  </div>
                  <div className="bigThumbnailLink__info">
                    <div
                      className="bigThumbnailLink__info__inner backdropBlur js-animation--mask"
                      data-offset=".1"
                    >
                      <h5 className="h5 bigThumbnailLink__info__heading">
                        {techRedefinedItem.title}
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
              {tech_redefined_items.map((item) => {
                const { id, title, image } = item;
                return (
                  <div key={id} className="col-sm-6 col-12">
                    <div className="project">
                      <Link href={item.link}>
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
                              <h5 className="h5 project__info__heading">{title}</h5>
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
