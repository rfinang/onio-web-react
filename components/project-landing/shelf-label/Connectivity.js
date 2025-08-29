import ImageComp from "../../common/Image";
import { ConnectivityStyles } from "../../styles/project-landing/shelf-label/Connectivity";

function Connectivity({ data }) {
  if (!data) return null;
  const { connectivity } = data;
  const { label, title, description, image } = connectivity;
  return (
    <ConnectivityStyles>
      <div className="shelf-label-connectivity">
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
        </div>
        <div className="image-block js-animation--fade image__object-fit animation--fade banner">
          <ImageComp image={image} />
        </div>
      </div>
    </ConnectivityStyles>
  );
}

export default Connectivity;
