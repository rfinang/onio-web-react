import ImageComp from "../../common/Image";
import { Typography, Container, Button } from "../../ui";
import { BatterylessReliabilityStyles } from "../../styles/project-landing/smart-hub/Features";
import Link from "next/link";
function Features({ data }) {
  if (!data) return null;

  const { section_features, section_quick_info } = data;
  const { label, title, description, items } = section_features;
  const { contents, buy_hardware, image } = section_quick_info;

  return (
    <BatterylessReliabilityStyles>
      <div className="turnkey-landing-reliability">
        <Container>
          <div className="d-block">
            <Typography variant="section-badge" className="heading--block--black d-inline-block block-title js-animation--fade">
              {label}
            </Typography>
          </div>
          <div className="grid md:grid-cols-12 gap-lg">
            <div className="md:col-span-6 lg:col-span-5">
              <Typography
                variant="h2"
                className="section-title js-animation--fade"
                data-offset=".1"
              >
                {title}
              </Typography>
            </div>
            <div className="md:col-span-6 lg:col-span-6 lg:col-start-7">
              <Typography
                variant="h5"
                className="section-desc js-animation--fade"
                data-offset=".15"
              >
                {description}
              </Typography>
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
                        <Typography
                          variant="h5"
                          className="focusFeature__info__heading"
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
      <div className="turnkey-landing-quick-info">
        <Container>
          <div className="grid md:grid-cols-12 gap-lg">
            <div className="md:col-span-6 lg:col-span-5">
              <div className="video-block image__object-fit js-animation--fade">
                <ImageComp image={image} />
              </div>
            </div>
            <div className="md:col-span-6 lg:col-span-6 lg:col-start-7">
              {contents && (
                <div className="grid sm:grid-cols-2 gap-lg">
                  {contents.map((item, index) => {
                    const { id, title, content } = item;
                    return (
                      <div key={id} className="js-animation--fade" data-offset={(0.1 + index * 0.05).toFixed(2)}>
                        <div className="item">
                          <Typography variant="h6" className="title">{title}</Typography>
                          <p className="desc desc--block">{content}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
          {buy_hardware && (
            <Link href={buy_hardware.url} legacyBehavior>
              <a
                className="resource resource--black mb-0 js-animation--fade"
                target={buy_hardware.open_new_tab ? "_blank" : "_self"}
              >
                <span className="d-block resource__heading">
                  {buy_hardware.label}
                </span>
                <span className="d-block resource__icon">
                  <Button variant="icon" hasIcon="download" color="black" size="small" />
                </span>
              </a>
            </Link>
          )}
        </Container>
      </div>
    </BatterylessReliabilityStyles>
  );
}

export default Features;
