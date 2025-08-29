import ImageComp from "../../common/Image";
import { ProgrammingStyles } from "../../styles/project-landing/smart-hub/Programming";

function Programming({ data }) {
  if (!data) return null;
  const { label, title, description, image } = data;
  return (
    <ProgrammingStyles>
      <div className="smart-hub-programming">
        <div className="container">
          <div className="d-block">
            <h4 className="heading--block heading--block--black d-inline-block block-title js-animation--fade">
              <span className="heading--block__text">{label}</span>
            </h4>
          </div>
          <div className="row">
            <div className="col-md-6">
              <h3
                className="h2 section-title js-animation--fade"
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
            </div>
          </div>
          <div className="banner">
            <ImageComp image={image} />
          </div>
        </div>
      </div>
    </ProgrammingStyles>
  );
}

export default Programming;
