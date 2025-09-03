import { InvestorDataStyles } from "../styles/investor/Data";
import { useAppContext } from "../../context/AppContext";
import { Button, Container } from "../ui";
function InvestorData({ fundingTimeline }) {
  if (!fundingTimeline) return null;
  const { label, description, link, completed, upcoming } = fundingTimeline;
  const { dispatch } = useAppContext();
  const onClickGetStartedItem = (reasoneToContact) => () => {
    return dispatch({
      type: "change_contact",
      value: reasoneToContact,
    });
  };
  return (
    <InvestorDataStyles>
      <div className="invertors__data bg-primary">
        <span className="d-block line__spacing spacing--bottom--xl pt-lg-0 pt-sm-3 pt-4"></span>
        <Container className="pb-6">
          <div className="grid pb-4">
            <div className="col-12 mb-lg-6 mb-sm-5 mb-4">
              <h4 className="heading--block heading--block--white mb-0 d-inline-block js-animation--fade">
                <span className="heading--block__text">{label}</span>
              </h4>
            </div>
          </div>

          <div className="grid md:grid-cols-12 gap-lg mb-lg-6 mb-sm-5 mb-4 pb-lg-2">
            {completed && (
              <>
                {completed.map((item, index) => {
                  const { id, title, description } = item;
                  return (
                    <div key={id} className="lg:col-span-2 sm:col-span-3 col-span-6 mb-lg-0 mb-4 js-animation--fade" data-screen-offset={1 + index * 0.05}>
                      <p className={`text-white mb-2 ${index > 0 ? "opacity-0" : ""}`}>
                        {index === 0 ? "Completed:" : "-"}
                      </p>
                      <div className="fundingTimeline fundingTimeline--solid">
                        <div className="fundingTimeline__inner">
                          <span className="fundingTimeline__label">{title}</span>
                          <h6 className="h6 fundingTimeline__title">{description}</h6>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </>
            )}
            {upcoming && (
              <div className="lg:col-span-4 sm:col-span-6 col-span-12 mb-lg-0 mb-4 js-animation--fade" data-screen-offset={1.15}>
                <p className="text-white mb-2">Upcoming:</p>
                <div className="fundingTimeline fundingTimeline--large fundingTimeline--border">
                  <div className="fundingTimeline__inner">
                    <span className="fundingTimeline__label">{upcoming.title}</span>
                    <h6 className="h6 fundingTimeline__title">{upcoming.description}</h6>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="grid md:grid-cols-12 gap-lg">
            <div className="lg:col-span-5 sm:col-span-6 col-span-12">
              <p className="desc--large text-white mb-4 js-animation--lines ">{description}</p>
              <p className="d-inline-block">
                <Button
                  as="a"
                  href={link.url}
                  variant="white"
                  size="large"
                  className="js-animation--fade"
                  data-screen-offset=".15"
                  data-bs-toggle="modal"
                  data-bs-target="#contactModal"
                  onClick={onClickGetStartedItem(link.url)}
                >
                  {link.label}
                </Button>
              </p>
            </div>
          </div>
        </Container>
      </div>
    </InvestorDataStyles>
  );
}

export default InvestorData;
