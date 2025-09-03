import styled from "styled-components";
import { Button, Typography } from "../ui";
const CareerDetailsStyles = styled.div`
  .careersDetail__content {
    padding-bottom: 7rem;
    position: relative;
  }
  .careersDetail__content:after {
    content: "";
    position: absolute;
    height: 6rem;
    bottom: -5.9rem;
    background: var(--onio-color-background);
    display: block;
    width: 100%;
    z-index: 3;
    border-radius: 0 0 var(--border-radius) var(--border-radius);
    transition: opacity 0.3s cubic-bezier(0.33, 1, 0.68, 1);
    will-change: opacity;
  }
  .careersDetail__content ul {
    padding-left: 1em;
    margin-bottom: 3.5rem;
  }
  .careersDetail__content h6 {
    margin-bottom: 1rem;
  }
  .careersDetail__content__apply {
    margin-top: 6rem;
  }
`;
function CareerDetailsContent({ title, description, content, linkTo }) {
  return (
    <CareerDetailsStyles>
      <div className="careersDetail__content section--topPage bg-background">
        <div className="container">
          <div className="row spacing--bottom--xs">
            <div className="col-12">
              <Typography 
                variant="section-badge"
                className="mb-0 js-animation--fade"
              >
                Careers
              </Typography>
            </div>
          </div>
          <div className="row">
            <div className="col-md-7 col-12 pb-1">
              <Typography
                variant="h1"
                className="pb-md-2 mb-md-0 mb-3 js-animation--chars"
                data-screen-offset=".3"
              >
                {title}
              </Typography>
              <span className="d-md-block d-none spacing--bottom--md"></span>
            </div>
          </div>
          <div className="row">
            <div className="col-md-5 col-12 pb-md-2">
              <Typography 
                variant="body-xl" 
                className="js-animation--lines" 
                data-screen-offset=".6"
              >
                {description}
              </Typography>
              <span className="d-md-block d-none spacing--bottom--md"></span>
              <span className="d-md-none d-block spacing--bottom--sm"></span>
            </div>

            <div
              className="col-md-5 col-12 offset-md-1 js-animation--fade"
              data-screen-offset=".75"
              data-offset=".15"
            >
              <div
                className="dynamic-content"
                dangerouslySetInnerHTML={{ __html: content }}
              />
              <div className="d-sm-inline-block d-block careersDetail__content__apply">
                <Button
                  variant="secondary"
                  size="lg"
                  href={linkTo.url}
                  target="_blank"
                  className="js-link--btn"
                >
                  Apply Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </CareerDetailsStyles>
  );
}

export default CareerDetailsContent;
