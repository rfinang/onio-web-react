import Link from "next/link";
import { TeamsStyles } from "../styles/about/Teams";
import ImageComp from "../common/Image";
import Typography from "../ui/Typography";
function AboutTeams({ teamData }) {
  if (!teamData) return null;
  const { title, label, images } = teamData;

  return (
    <TeamsStyles>
      <div id="teams" className="teams bg-alert">
        <div className="teams__container container">
          <div className="row">
            <div className="col-12 mb-4 pb-1">
              <div className="heading--block heading--block--black mb-0 d-inline-block  js-animation--fade">
                <Typography variant="section-badge" className="heading--block__text text-primary">{label}</Typography>
              </div>
            </div>
            <div className="col-lg-5 col-md-6">
              <Typography variant="h2" className="spacing--bottom--md text-primary js-animation--chars">{title}</Typography>
            </div>
          </div>
          {images.length > 0 && (
            <div className="row">
              {images.map((item, index) => {
                const { id, title, link, description, image } = item;
                if (!id || !title || !link || !description || !image) return;
                return (
                  <div key={id} className="col-sm-6 col-12">
                    <div className="staff">
                      <Link href={link} legacyBehavior>
                        <a className="staff__link d-block">
                          <div
                            className="staff__thumbnail js-animation--fade--none image__object-fit font-0"
                            data-offset={index % 2 === 0 ? 0 : 0.1}
                          >
                            <ImageComp image={image} />
                          </div>
                          <div
                            className="staff__info js-animation--fade"
                            data-offset={index % 2 === 0 ? 0 : 0.15}
                          >
                            <div className="row align-items-center">
                              <div className="col staff__info__left">
                                <Typography variant="h5" className="staff__info__heading text-primary mb-lg-2 mb-sm-1 mb-0">
                                  {title}
                                </Typography>
                                <Typography variant="h6" className="staff__info__position text-primary mb-0">
                                  {description}
                                </Typography>
                              </div>
                              <div className="col-auto staff__info__right ms-auto">
                                <span className="iconLink iconLink--arrow iconLink--arrow--oval iconLink--arrow--large iconLink--arrow--black">
                                  <svg
                                    width="16"
                                    height="28"
                                    viewBox="0 0 16 28"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="svg"
                                  >
                                    <path
                                      d="M1.57715 1.61572L13.9615 14.0001L1.57715 26.3844"
                                      stroke="white"
                                      strokeWidth="2"
                                    ></path>
                                  </svg>
                                </span>
                              </div>
                            </div>
                          </div>
                        </a>
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </TeamsStyles>
  );
}

export default AboutTeams;
