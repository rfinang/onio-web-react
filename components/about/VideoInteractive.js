import { useAppContext } from "../../context/AppContext";
import { VideoInteractiveStyles } from "../styles/home/VideoInterative";
import ImageComp from "../common/Image";
import { Button } from "../ui";
function VideoInteractive({ powerZero }) {
  if (!powerZero) return null;
  const { dispatch } = useAppContext();
  const onClickVideoItem = (videoUrl) => () => {
    return dispatch({
      type: "change_video",
      value: videoUrl,
    });
  };
  const { description, title, video, thumbnail } = powerZero;
  return (
    <VideoInteractiveStyles className="videoInteractive">
      <div className="videoInteractive__container container">
        <div className="row spacing--bottom--xs">
          <div className="col-12 spacing--bottom--md">
            <h4 className="heading--block heading--block--black mb-0 d-inline-block js-animation--fade is-animation-loading">
              <span className="heading--block__text">About</span>
            </h4>
          </div>
          <div className="col-lg-6 col-md-7 col-12 mb-md-0 mb-4 pb-md-0 pb-2">
            {description && (
              <ul className="ul-reset h5 d-sm-block d-none text-primary">
                {description.map((item, index) => (
                  <li
                    className="js-animation--fade"
                    data-screen-offset={0.4 + (index + 1) / 10}
                    data-offset={0.1 + (index + 1) / 10}
                    key={item.id}
                  >
                    {item.text_line}
                  </li>
                ))}
              </ul>
            )}
            <p className="mb-0 d-sm-none d-block h5 text-primary">
              {description.map((item) => (
                <span key={item.id}>{item.text_line}</span>
              ))}
            </p>
          </div>
        </div>
        <div className="videoInteractive__inner">
          <h2 className="videoInteractive__heading heading--supper mb-0 text-center text-primary">
            <span className="d-block js-animation--chars--2d">{title[0]?.text_line}</span>
            <br className="d-sm-block d-none" />
            <span className="d-block js-animation--chars--2d">{title[1]?.text_line}</span>
          </h2>
          <div className="videoInteractive__element ">
            <div className="row justify-content-center">
              <div className="col-sm-6">
                <a
                  href="#"
                  data-src-mobile={video.url}
                  data-src={video.url}
                  className="videoInteractive__element__inner  js-animation--fade d-inline-block"
                  data-offset=".5"
                  onClick={onClickVideoItem(video.url)}
                  data-bs-toggle="modal"
                  data-bs-target="#videoModal"
                >
                  <div className="videoInteractive__button">
                    <Button
                      variant="white"
                      size="lg"
                      className="js-link--btn"
                      as="button"
                    >
                      Play Video
                    </Button>
                  </div>
                  <div className="image__object-fit image--radius">
                    <ImageComp image={thumbnail} />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </VideoInteractiveStyles>
  );
}

export default VideoInteractive;
