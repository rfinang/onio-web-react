import Link from "next/link";
import { Typography, Button } from "../ui";
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
                <Typography
                  variant="section-badge"
                  className="mb-0 js-animation--fade"
                  data-offset=".3"
                >
                  {label}
                </Typography>
              </div>
            </div>
            <div className="row">
              <div className="col-xxl-3 col-lg-4 col-md-5 col-sm-10 col-12 mb-md-0 mb-4">
                <Typography variant="h2" className="text-white mb-0 js-animation--chars" data-offset=".4">
                  {title}
                </Typography>
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
                                <Typography variant="h6" className="relateLink__heading text-white">
                                  {item.label}
                                </Typography>
                                <Button variant="icon" hasIcon="arrow" color="white" size="large" shape="oval" />
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
