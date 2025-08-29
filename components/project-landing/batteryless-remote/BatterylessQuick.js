import { BatterylessQuickStyles } from "../../styles/project-landing/batteryless-remote/BatterylessQuick";
import { useAppContext } from "../../../context/AppContext";
function BatterylessQuick({ data }) {
  if (!data) return null;
  const { contents, request_link, video } = data;
  const { dispatch } = useAppContext();
  const onClickGetStartedItem = (reasoneToContact) => () => {
    return dispatch({
      type: "change_contact",
      value: reasoneToContact,
    });
  };
  return (
    <BatterylessQuickStyles>
      <div className="turnkey-landing-quick-info">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-5">
              <div className="video-block js-animation--fade">
                <video
                  className="js-video__responsive"
                  autoPlay
                  poster=""
                  preload="auto"
                  src={video.url}
                  loop
                  muted
                  playsInline
                  webkit-playsinline="true"
                  x5-playsinline="true"
                ></video>
              </div>
            </div>
            <div className="col-md-6 offset-lg-1">
              {contents && (
                <div className="row">
                  {contents.map((item, index) => {
                    const { id, title, content } = item;
                    return (
                      <div
                        key={id}
                        className="col-sm-6 js-animation--fade"
                        data-offset={(0.1 + index * 0.05).toFixed(2)}
                      >
                        <div className="item">
                          <h4 className="h6 title">{title}</h4>
                          <p className="desc desc--block">{content}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
          {request_link.file ? (
            <a href={request_link.file.url} className="resource resource--black">
              <span className="d-block resource__heading">{request_link.label}</span>
              <span className="d-block resource__icon">
                <span className="iconLink iconLink--download iconLink--download--small">
                  <svg
                    className="svg"
                    width="20"
                    height="24"
                    viewBox="0 0 20 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.9131 12.3174L9.94299 21.8287L0.972889 12.3174"
                      stroke="#222021"
                      strokeWidth="2"
                    />
                    <path d="M9.87842 0.837891L9.87842 21.6712" stroke="#222021" strokeWidth="2" />
                  </svg>
                </span>
              </span>
            </a>
          ) : (
            <a
              href={request_link.link}
              data-bs-toggle="modal"
              data-bs-target="#contactModal"
              className="resource resource--black"
              onClick={onClickGetStartedItem(request_link.link)}
            >
              <span className="d-block resource__heading"> {request_link.label} </span>
              <span className="d-block resource__icon">
                <span className="iconLink iconLink--arrow iconLink--arrow--oval iconLink--arrow--small">
                  <svg
                    width="21"
                    height="21"
                    viewBox="0 0 21 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="svg"
                  >
                    <path
                      d="M10.1348 1.07703L19.5576 10.4999L10.1348 19.9228"
                      stroke="#222021"
                      strokeWidth="2"
                    ></path>
                  </svg>
                </span>
              </span>
            </a>
          )}
        </div>
      </div>
    </BatterylessQuickStyles>
  );
}

export default BatterylessQuick;
