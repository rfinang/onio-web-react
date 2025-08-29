import { InvestorDataStyles } from "../styles/investor/Data";
import { useAppContext } from "../../context/AppContext";
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
      <div className="invertors__data bg-dark">
        <span className="d-block line__spacing spacing--bottom--xl pt-lg-0 pt-sm-3 pt-4"></span>
        <div className="container pb-6">
          <div className="row pb-4">
            <div className="col-12 mb-lg-6 mb-sm-5 mb-4">
              <h4 className="heading--block heading--block--white mb-0 d-inline-block js-animation--fade">
                <span className="heading--block__text">{label}</span>
              </h4>
            </div>
          </div>

          <div className="row mb-lg-6 mb-sm-5 mb-4 pb-lg-2">
            {completed && (
              <>
                {completed.map((item, index) => {
                  const { id, title, description } = item;
                  return (
                    <div
                      key={id}
                      className="col-lg-2 col-sm-3 col-6 mb-lg-0 mb-4 js-animation--fade"
                      data-screen-offset={1 + index * 0.05}
                    >
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
              <div
                className="col-lg-4 col-sm-6 col-12 mb-lg-0 mb-4 js-animation--fade"
                data-screen-offset={1.15}
              >
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
          <div className="row">
            <div className="col-lg-5 col-sm-6 col-12">
              <p className="desc--large text-white mb-4 js-animation--lines ">{description}</p>
              <p className="d-inline-block">
                <a
                  href={link.url}
                  className="btn btn--large pr-3 pl-3 js-link--btn btn--bg btn--bg--white js-animation--fade"
                  data-screen-offset=".15"
                  data-bs-toggle="modal"
                  data-bs-target="#contactModal"
                  onClick={onClickGetStartedItem(link.url)}
                >
                  <span className="js-link__text">{link.label}</span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </InvestorDataStyles>
  );
}

export default InvestorData;
