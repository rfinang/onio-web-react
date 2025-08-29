import { useAppContext } from "../../context/AppContext";
function ProjectLandingContent({ data }) {
  if (!data) return null;
  const { title, content, description, link } = data;
  const { dispatch } = useAppContext();
  const onClickGetStartedItem = (reasoneToContact) => () => {
    return dispatch({
      type: "change_contact",
      value: reasoneToContact,
    });
  };
  return (
    <div className="projectLading__content pageHero--after bg-wild">
      <div className="container">
        <h2
          className="h2 spacing--bottom--md pb-1 js-animation--chars"
          data-screen-offset=".8"
          dangerouslySetInnerHTML={{ __html: title }}
        />

        <div className="row">
          <div className="col-md-6 col-12 mb-md-0 mb-3">
            <div
              className="desc--large spacing--bottom--xs js-animation--lines"
              data-screen-offset=".9"
              dangerouslySetInnerHTML={{ __html: description }}
            />

            <p className="d-md-block d-none js-animation--fade" data-screen-offset=".9">
              <a
                href={link.url}
                data-bs-toggle="modal"
                data-bs-target="#contactModal"
                onClick={onClickGetStartedItem(link.url)}
                className="pageLink pageLink--black"
              >
                <span className="pageLink__text">{link.label}</span>
                <span className="pageLink__icon">
                  <svg
                    width="31"
                    height="27"
                    viewBox="0 0 31 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="svg"
                  >
                    <path d="M15.8594 1L29 13.5L15.8594 26" stroke="white" strokeWidth="2"></path>
                    <path d="M0 13.5898L28.7829 13.5898" stroke="white" strokeWidth="2"></path>
                  </svg>
                </span>
              </a>
            </p>
          </div>
          <div
            className="col-lg-4 col-md-5 desc--small offset-lg-2 offset-md-1 js-animation--fade"
            data-screen-offset="1.05"
            dangerouslySetInnerHTML={{ __html: content }}
          />

          <div className="d-md-none d-block mt-md-0 col-12 mt-5">
            <a
              href={link.url}
              data-bs-toggle="modal"
              data-bs-target="#contactModal"
              onClick={onClickGetStartedItem(link.url)}
              className="pageLink pageLink--black"
            >
              <span className="pageLink__text">{link.label}</span>
              <span className="pageLink__icon">
                <svg
                  width="31"
                  height="27"
                  viewBox="0 0 31 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="svg"
                >
                  <path d="M15.8594 1L29 13.5L15.8594 26" stroke="white" strokeWidth="2"></path>
                  <path d="M0 13.5898L28.7829 13.5898" stroke="white" strokeWidth="2"></path>
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectLandingContent;
