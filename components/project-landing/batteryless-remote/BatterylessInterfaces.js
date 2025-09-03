import ImageComp from "../../common/Image";
import { BatterylessInterfacesStyles } from "../../styles/project-landing/batteryless-remote/BatterylessInterfaces";
import Container from "../../ui/Container";

function BatterylessInterfaces({ data, banner }) {
  if (!data) return null;
  const { title, label, description } = data;
  return (
    <BatterylessInterfacesStyles>
      <div className="turnkey-landing-interfaces">
        <Container>
          <div className="d-block">
            <h4 className="heading--block heading--block--black d-inline-block block-title  js-animation--fade">
              <span className="heading--block__text">{label}</span>
            </h4>
          </div>

          <div className="grid md:grid-cols-12 gap-lg">
            <div className="md:col-span-6 lg:col-span-5">
              <h3 className="h2 section-title  js-animation--fade" data-offset=".1">
                {title}
              </h3>
            </div>
            <div className="md:col-span-6 lg:col-span-6 lg:col-start-7">
              <p className="h5 section-desc js-animation--fade" data-offset=".15">
                {description}
              </p>
            </div>
          </div>
        </Container>
        {banner && (
          <div className="banner js-animation--fade" data-offset=".35">
            <div className="items">
              {banner.remote_left && (
                <div className="item">
                  <div className="img">
                    <ImageComp image={banner.remote_left} />
                  </div>
                  <span></span>
                </div>
              )}

              {banner.remote_mid && (
                <div className="item">
                  <div className="img">
                    <ImageComp image={banner.remote_mid} />
                  </div>
                  <span></span>
                </div>
              )}

              {banner.remote_right && (
                <div className="item">
                  <div className="img">
                    <ImageComp image={banner.remote_right} />
                  </div>
                  <span></span>
                </div>
              )}
            </div>

            <div className="bg  js-animation--fade">
              <ImageComp image={banner.background} />
            </div>
          </div>
        )}
      </div>
    </BatterylessInterfacesStyles>
  );
}

export default BatterylessInterfaces;
