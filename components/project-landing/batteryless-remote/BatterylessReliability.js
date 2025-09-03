import { Typography } from "../../ui";
import ImageComp from "../../common/Image";
import BenefitAnimations from "../../home/BenefitAnimations";
import { BatterylessReliabilityStyles } from "../../styles/project-landing/batteryless-remote/BatterylessReliability";
import Container from "../../ui/Container";

function BatterylessReliability({ data, banner }) {
  if (!data) return null;
  const { label, title, description, items } = data;
  return (
    <BatterylessReliabilityStyles>
      <div className="turnkey-landing-reliability">
        <Container>
          <div className="d-block">
            <Typography 
              variant="section-badge" 
              className="block-title js-animation--fade"
            >
              {label}
            </Typography>
          </div>
          <div className="grid md:grid-cols-12 gap-lg">
            <div className="md:col-span-6 lg:col-span-5">
              <Typography 
                variant="h2" 
                className="section-title js-animation--fade" 
                data-offset=".1"
                as="h3"
              >
                {title}
              </Typography>
            </div>
            <div className="md:col-span-6 lg:col-span-6 lg:col-start-7">
              <Typography 
                variant="h5" 
                className="section-desc js-animation--fade" 
                data-offset=".15"
                as="p"
              >
                {description}
              </Typography>
            </div>
          </div>
        </Container>
        <BenefitAnimations benefitAnimations={items} />
        <Container>
          <div className="banner js-animation--fade" data-offset=".35">
            <ImageComp image={banner} />
          </div>
        </Container>
      </div>
    </BatterylessReliabilityStyles>
  );
}

export default BatterylessReliability;
