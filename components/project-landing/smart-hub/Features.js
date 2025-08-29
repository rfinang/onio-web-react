import ImageComp from "../../common/Image";
import { BatterylessReliabilityStyles } from "../../styles/project-landing/smart-hub/Features";
import Link from "next/link";
function Features({ data }) {
  if (!data) return null;

  const { section_features, section_quick_info } = data;
  const { label, title, description, items } = section_features;
  const { contents, buy_hardware, image } = section_quick_info;

  return (
    <BatterylessReliabilityStyles>
      <div className="turnkey-landing-reliability">
        <div className="container">
          <div className="d-block">
            <h4 className="heading--block heading--block--black d-inline-block block-title js-animation--fade">
              <span className="heading--block__text">{label}</span>
            </h4>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-5">
              <h3
                className="h2 section-title  js-animation--fade"
                data-offset=".1"
              >
                {title}
              </h3>
            </div>
            <div className="col-md-6 offset-lg-1">
              <p
                className="h5 section-desc js-animation--fade"
                data-offset=".15"
              >
                {description}
              </p>
            </div>
          </div>
        </div>

        {items && (
          <div className="container focusFeatureList focusFeatureList--home">
            <div className="row justify-content-center">
              {items.map((item, index) => {
                const { image, title, description } = item;
                return (
                  <div
                    key={item.id}
                    className="col-md-4 col-sm-6 col-11 mb-md-0 mb-5"
                  >
                    <div className="focusFeature text-center">
                      <div className="focusFeature__thumbnail">
                        <div
                          className="focusFeature__thumbnail__inner font-0 js-animation--fade"
                          data-offset={index * 0.15}
                        >
                          <img src={image.url} />
                        </div>
                      </div>
                      <div
                        className="focusFeature__info js-animation--fade"
                        data-offset={index * 0.15 + 0.1}
                      >
                        <h4
                          className="focusFeature__info__heading h5"
                          dangerouslySetInnerHTML={{ __html: title }}
                        />
                        <div className="focusFeature__info__desc desc--small">
                          <p className="mb-0">{description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
      <div className="turnkey-landing-quick-info">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-5">
              <div className="video-block image__object-fit js-animation--fade">
                <ImageComp image={image} />
              </div>
            </div>
            <div className="col-md-6 offset-lg-1">
              {contents && (
                <div className="row">
                  {contents.map((item, index) => {
                    const { id, title, content } = item;
                    return (
                      <div
                        key={id}
                        className="col-sm-6 js-animation--fade"
                        data-offset={(0.1 + index * 0.05).toFixed(2)}
                      >
                        <div className="item">
                          <h4 className="h6 title">{title}</h4>
                          <p className="desc desc--block">{content}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
          {buy_hardware && (
            <Link href={buy_hardware.url}>
              <a
                className="resource resource--black mb-0 js-animation--fade"
                target={buy_hardware.open_new_tab ? "_blank" : "_self"}
              >
                <span className="d-block resource__heading">
                  {buy_hardware.label}
                </span>
                <span className="d-block resource__icon">
                  <span className="iconLink iconLink--download iconLink--download--small">
                    <svg
                      width="24"
                      height="23"
                      viewBox="0 0 24 23"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <line
                        x1="12"
                        y1="23"
                        x2="12"
                        y2="-4.7354e-08"
                        stroke="#222021"
                        strokeWidth="2"
                      />
                      <line
                        x1="24"
                        y1="12"
                        y2="12"
                        stroke="#222021"
                        strokeWidth="2"
                      />
                    </svg>
                  </span>
                </span>
              </a>
            </Link>
          )}
        </div>
      </div>
    </BatterylessReliabilityStyles>
  );
}

export default Features;
