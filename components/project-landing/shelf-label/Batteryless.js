import { BatterylessStyles } from "../../styles/project-landing/shelf-label/Batteryless";
function Batteryless({ data }) {
  if (!data) return null;

  const { batteryless } = data;
  const { label, title, description, items } = batteryless;

  return (
    <BatterylessStyles>
      <div className="shelf-label-batteryless">
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
    </BatterylessStyles>
  );
}

export default Batteryless;
