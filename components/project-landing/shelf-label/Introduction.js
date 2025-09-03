import Link from "next/link";
import ImageComp from "../../common/Image";
import { Button, Container } from "../../ui";
import { IntroductionStyles } from "../../styles/project-landing/shelf-label/Introduction";

function Introduction({ data }) {
  if (!data) return null;
  const { introduction } = data;
  const { label, first_paragraph, second_paragraph, link, image } = introduction;
  
  
  return (
    <IntroductionStyles>
      <div className="shelf-label-introduction">
        <Container>
          <div className="d-block">
            <h4 className="heading--block heading--block--black d-inline-block block-title js-animation--fade is-animation-loading">
              <span className="heading--block__text">{label}</span>
            </h4>
          </div>
          <div className="grid md:grid-cols-12 gap-lg">
            <div className="sm:col-span-7 md:col-span-6 col-span-12">
              <p className="info-desc desc--large js-animation--fade" data-screen-offset="1.6">
                {first_paragraph}
              </p>
            </div>
            <div className="d-none d-sm-block col-auto ms-auto">
              <Button
                as={Link}
                href={link.url}
                variant="link"
                color="black"
                hasArrow
                className="js-animation--fade"
                data-screen-offset="1.7"
                data-offset=".1"
              >
                {link.label}
              </Button>
            </div>
          </div>
          <p className="info-foot js-animation--fade" data-screen-offset="1.8" data-offset=".2">
            {second_paragraph}
          </p>
          <div
              className="image-block js-animation--fade image__object-fit image--radius"
              data-screen-offset="1.8"
          >
            <ImageComp image={image} />
          </div>
        </Container>
      </div>
    </IntroductionStyles>
  );
}

export default Introduction;
