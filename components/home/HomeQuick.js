import Link from "next/link";
import { HomeQuickStyles } from "../styles/home/HomeQuick";
import ImageComp from "../common/Image";
function HomeQuick({ whatNext }) {
  if (!whatNext) return null;
  const { label, title, image, links } = whatNext;
  return (
    <HomeQuickStyles>
      <div className="parallaxBg">
        <div className="parallaxBg__image">
          <div className="image__object-fit js-animation--fade--none h-100">
            {image && <ImageComp image={image} />}
          </div>
        </div>
        <div className="parallaxBg__content">
          <div className="container">
            <div className="row mb-3 pb-1 g-0">
              <div className="col-auto">
                <h4
                  className="heading--block heading--block--solid mb-0 d-inline-block js-animation--fade"
                  data-offset=".3"
                >
                  <span className="heading--block__text">{label}</span>
                </h4>
              </div>
            </div>
            <div className="row">
              <div className="col-xxl-3 col-lg-4 col-md-5 col-sm-10 col-12 mb-md-0 mb-4">
                <h2 className="h2 text-white mb-0 js-animation--chars" data-offset=".4">
                  {title}
                </h2>
              </div>
              <div className="col-lg-6 col-md-7 col-12 offset-lg-2">
                {links.length > 0 && (
                  <div className="row">
                    {links.map((item, index) => (
                      <div
                        key={item.id}
                        className="col-sm-6 col-12 js-animation--mask"
                        data-offset={index / 2 === 0 ? ".5" : ".75"}
                      >
                        <div className="relateLink">
                          <Link href={item.url} legacyBehavior>
                            <a className="relateLink__link backdropBlur backdropBlur--hover d-block">
                              <div className="backdropBlur__inner">
                                <h5 className="h5 relateLink__heading text-white h6">
                                  {item.label}
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
                            </a>
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </HomeQuickStyles>
  );
}
export default HomeQuick;
