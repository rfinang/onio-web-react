import { IntegrationStyles } from "../../styles/project-landing/shelf-label/Integration";
import Container from "../../ui/Container";
import ImageComp from "../../common/Image";
import { Button } from "../../ui";
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
        <Container>
          <div className="d-block">
            <h4 className="heading--block heading--block--black d-inline-block block-title js-animation--fade is-animation-loading">
              <span className="heading--block__text">{label}</span>
            </h4>
          </div>
          <div className="grid md:grid-cols-12 gap-lg">
            <div className="sm:col-span-7 md:col-span-6 col-span-12 order-2 sm:order-1">
              <p className="h5 info-desc desc--large js-animation--fade" data-screen-offset="1.6">
                {description}
              </p>
            </div>
          </div>
        </Container>
      </div>
      <div className="shelf-label-quick-info">
        <Container>
          <div className="grid md:grid-cols-12 gap-lg">
            <div className="md:col-span-6 lg:col-span-5 col-span-12">
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
                  <Button variant="icon" hasIcon="arrow" color="black" size="small" shape="oval" />
                </span>
              </a>
          )}
        </Container>
      </div>

    </IntegrationStyles>
  );
}

export default Integration;
