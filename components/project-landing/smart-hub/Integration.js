import ImageComp from "../../common/Image";
import { IntegrationStyles } from "../../styles/project-landing/smart-hub/Integration";

function Integration({ data }) {
  if (!data) return null;
  const { label, title, description, images } = data;
  return (
    <IntegrationStyles>
      <div className="smart-hub-integration">
        <div className="container">
          <div className="d-block">
            <h4 className="heading--block heading--block--black d-inline-block block-title js-animation--fade">
              <span className="heading--block__text">{label}</span>
            </h4>
          </div>
          <div className="row">
            <div className="col-md-6">
              <h3
                className="h2 section-title  js-animation--fade"
                data-offset=".1"
              >
                {title}
              </h3>
            </div>
            <div className="col-md-6">
              <p
                className="h5 section-desc js-animation--fade"
                data-offset=".15"
              >
                {description}
              </p>
              {images && (
                <div className="banner-list">
                  <div className="row">
                    {images.map((item, index) => (
                      <div
                        key={item.id}
                        className="col-sm-6 js-animation--fade"
                        data-offset={index % 2 === 1 ? 0.15 : 0}
                      >
                        <div className="banner">
                          <img src={item.image.url} alt={item.image.alternativeText} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </IntegrationStyles>
  );
}

export default Integration;
