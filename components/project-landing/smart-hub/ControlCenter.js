import ImageComp from "../../common/Image";
import { ProgrammingStyles } from "../../styles/project-landing/smart-hub/Programming";
import Container from "../../ui/Container";

function ControlCenter({ data }) {
  if (!data) return null;
  const { label, title, description, image } = data;
  return (
    <ProgrammingStyles>
      <div className="smart-hub-programming">
        <Container>
          <div className="d-block">
            <h4 className="heading--block heading--block--black d-inline-block block-title js-animation--fade">
              <span className="heading--block__text">{label}</span>
            </h4>
          </div>
          <div className="grid md:grid-cols-12 gap-lg">
            <div className="md:col-span-6">
              <h3
                className="h2 section-title js-animation--fade"
                data-offset=".1"
              >
                {title}
              </h3>
            </div>
            <div className="md:col-span-6">
              <p
                className="h5 section-desc js-animation--fade"
                data-offset=".15"
              >
                {description}
              </p>
            </div>
          </div>
          <div className="video-block js-animation--fade image__object-fit image--radius">
            <ImageComp image={image} />
          </div>
        </Container>
      </div>
    </ProgrammingStyles>
  );
}

export default ControlCenter;
