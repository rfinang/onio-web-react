import { IntegrationStyles } from "../../styles/project-landing/shelf-label/Integration";
import ImageComp from "../../common/Image";
import {useAppContext} from "../../../context/AppContext";
import {isMobile} from "react-device-detect";

function Integration({data}) {
  if (!data) return null;

  const { dispatch } = useAppContext();
  const onClickVideoItem = (videoUrl) => () => {
    return dispatch({
      type: "change_video",
      value: videoUrl,
    });
  };
  const { integration } = data;
  const { label, description, image, contents, watch_demo } = integration;

  let video_url;
  if (watch_demo?.video) {
    video_url = (isMobile && watch_demo.mobile_video?.url) ? watch_demo.mobile_video.url : watch_demo.video.url;
  }

  return (
    <IntegrationStyles>
      <div className="shelf-label-integration">
        <div className="container">
          <div className="d-block">
            <h4 className="heading--block heading--block--black d-inline-block block-title js-animation--fade is-animation-loading">
              <span className="heading--block__text">{label}</span>
            </h4>
          </div>
          <div className="row">
            <div className="col-sm-7 col-md-6 order-2 order-sm-1">
              <p className="h5 info-desc desc--large js-animation--fade" data-screen-offset="1.6">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="shelf-label-quick-info">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-5">
              <div className="video-block image__object-fit js-animation--fade">
                <ImageComp image={image} />
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
          {video_url && (
              <a
                  href="#"
                  data-src-mobile={watch_demo.mobile_video?.url ?? watch_demo.video.url}
                  data-src={watch_demo.video.url}
                  className="resource resource--black mb-0 js-animation--fade"
                  onClick={onClickVideoItem(video_url)}
                  data-bs-toggle="modal"
                  data-bs-target="#videoModal"
              >
              <span className="d-block resource__heading">
                {watch_demo.label}
              </span>
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

    </IntegrationStyles>
  );
}

export default Integration;
