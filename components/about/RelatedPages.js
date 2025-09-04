import Link from "next/link";
import { HomeQuickStyles } from "../styles/home/HomeQuick";
import ImageComp from "../common/Image";
import { Button } from "../ui";
function RelatedPages({ whatNext }) {
  if (!whatNext) return null;
  const { label, image, links } = whatNext;

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
                  data-offset=".4"
                >
                  <span className="heading--block__text">{label}</span>
                </h4>
              </div>
            </div>
            {links.length > 0 && (
              <div className="row">
                {links.map((item, index) => (
                  <div key={item.id} className="col-sm-6 col-12">
                    <div
                      className="relateLink js-animation--mask"
                      data-offset={(index + 1) * 0.25 + 0.25}
                    >
                      <Link href={item.url} legacyBehavior>
                        <a className="relateLink__link backdropBlur backdropBlur--hover d-block">
                          <div className="backdropBlur__inner">
                            <h5
                              className="h5 relateLink__heading text-white h6"
                              dangerouslySetInnerHTML={{ __html: item.label }}
                            />
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
    </HomeQuickStyles>
  );
}
export default RelatedPages;
