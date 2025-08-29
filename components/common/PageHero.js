import { PageHeroStyles } from "../styles/block/PageHero";
import ImageComp from "./Image";

function PageHero({ investorBanner, maxWidthTitle }) {
  if (!investorBanner) return null;
  const { title, label, image, mobile_image } = investorBanner;

  return (
    <PageHeroStyles>
      <div className="pageHero">
        <figure className="image__object-fit pageHero__image mb-0 js-animation--image">
          {image && (
            <>
              <div className="d-sm-block d-none">
                <ImageComp image={image} preload={true} />
              </div>
              <div className="d-sm-none d-block">
                <ImageComp image={mobile_image ? mobile_image : image} preload={true}/>
              </div>
            </>
          )}
        </figure>
        <div className="pageHero__container">
          <div className="container">
            <h4
              className="heading--block heading--block--solid mb-0 d-inline-block mb-4 js-animation--fade is-animation-loading"
              data-screen-offset=".3"
            >
              <span className="heading--block__text pr-4 pl-4">{label}</span>
            </h4>
            <div className="row">
              <div className="col-lg-8 col-sm-10 col-12">
                <h1
                  className="h1 text-white js-animation--chars is-animation-loading"
                  style={{maxWidth: `${maxWidthTitle}rem`}}
                  data-screen-offset=".6"
                  dangerouslySetInnerHTML={{ __html: title }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageHeroStyles>
  );
}

export default PageHero;
