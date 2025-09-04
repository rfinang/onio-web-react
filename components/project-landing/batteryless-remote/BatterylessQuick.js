import { Typography, Button } from "../../ui";
import { BatterylessQuickStyles } from "../../styles/project-landing/batteryless-remote/BatterylessQuick";
import { useAppContext } from "../../../context/AppContext";
import Container from "../../ui/Container";
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
        <Container>
          <div className="grid md:grid-cols-12 gap-lg">
            <div className="md:col-span-6 lg:col-span-5">
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
            <div className="md:col-span-6 lg:col-span-6 lg:col-start-7">
              {contents && (
                <div className="grid sm:grid-cols-2 gap-lg">
                  {contents.map((item, index) => {
                    const { id, title, content } = item;
                    return (
                      <div key={id} className="js-animation--fade" data-offset={(0.1 + index * 0.05).toFixed(2)}>
                        <div className="item">
                          <Typography variant="h6" className="title" as="h4">{title}</Typography>
                          <Typography variant="body" className="desc desc--block" as="p">{content}</Typography>
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
                <Button variant="icon" hasIcon="download" color="black" size="small" />
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
                <Button variant="icon" hasIcon="arrow" color="black" size="small" shape="oval" />
              </span>
            </a>
          )}
        </Container>
      </div>
    </BatterylessQuickStyles>
  );
}

export default BatterylessQuick;
