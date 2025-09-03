import { BatterylessStyles } from "../../styles/project-landing/shelf-label/Batteryless";
import Container from "../../ui/Container";
function Batteryless({ data }) {
  if (!data) return null;

  const { batteryless } = data;
  const { label, title, description, items } = batteryless;

  return (
    <BatterylessStyles>
      <div className="shelf-label-batteryless">
        <Container>
          <div className="d-block">
            <h4 className="heading--block heading--block--black d-inline-block block-title js-animation--fade">
              <span className="heading--block__text">{label}</span>
            </h4>
          </div>
          <div className="grid md:grid-cols-12 gap-lg">
            <div className="md:col-span-6 lg:col-span-5">
              <h3
                className="h2 section-title  js-animation--fade"
                data-offset=".1"
              >
                {title}
              </h3>
            </div>
            <div className="md:col-span-6 lg:col-span-6 lg:col-start-7">
              <p
                className="h5 section-desc js-animation--fade"
                data-offset=".15"
              >
                {description}
              </p>
            </div>
          </div>
        </Container>

        {items && (
          <Container className="focusFeatureList focusFeatureList--home">
            <div className="grid md:grid-cols-12 gap-lg justify-center">
              {items.map((item, index) => {
                const { image, title, description } = item;
                return (
                  <div key={item.id} className="md:col-span-4 sm:col-span-6 col-span-11 mb-md-0 mb-5">
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
          </Container>
        )}
      </div>
    </BatterylessStyles>
  );
}

export default Batteryless;
