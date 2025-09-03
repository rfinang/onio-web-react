import Link from "next/link";
import { Typography } from "../ui";
import { VideoInteractiveStyles } from "../styles/home/VideoInterative";
import { useAppContext } from "../../context/AppContext";
import ImageComp from "../common/Image";
import { Button } from "../ui";
function VideoInteractive({ powerZero, customClass = "" }) {
  if (!powerZero) return null;
  const { dispatch } = useAppContext();
  const { description, link_to: LinkTo, title, video, thumbnail } = powerZero;
  const onClickVideoItem = (videoUrl) => () => {
    return dispatch({
      type: "change_video",
      value: videoUrl,
    });
  };
  return (
    <VideoInteractiveStyles className={`videoInteractive ${customClass ? customClass : ""}`}>
      <div className="videoInteractive__container container">
        <div className="row spacing--bottom--sm">
          <div className="col-lg-6 col-md-7 col-12 mb-md-0 mb-4 pb-md-0 pb-2">
            {description && (
              <Typography 
                variant="h5" 
                as="ul" 
                className="ul-reset d-sm-block d-none text-primary"
              >
                {description.map((item, index) => (
                  <li
                    className="js-animation--fade"
                    data-screen-offset={1.5 + (index + 1) / 10}
                    key={item.id}
                  >
                    {item.text_line}
                  </li>
                ))}
              </Typography>
            )}
            <Typography 
              variant="h5" 
              className="mb-0 d-sm-none d-block text-primary js-animation--lines"
            >
              {description.map((item) => (
                <span key={item.id}>{item.text_line}</span>
              ))}
            </Typography>
          </div>
          <div className="col-md-auto col-12 ms-md-auto">
            {LinkTo && (
              <Button
                as={Link}
                href={LinkTo.url}
                variant="link"
                color="black"
                hasArrow
                className="js-animation--fade"
              >
                {LinkTo.label}
              </Button>
            )}
          </div>
        </div>
        <div className="videoInteractive__inner">
          <Typography 
            variant="hero" 
            as="h2"
            className="videoInteractive__heading mb-0 text-center text-primary"
          >
            <span className="d-block js-animation--chars--2d">{title[0]?.text_line}</span>
            <br className="d-sm-block d-none" />
            <span className="d-block js-animation--chars--2d">{title[1]?.text_line}</span>
          </Typography>
          <div className="videoInteractive__element ">
            <div className="row justify-content-center">
              <div className="col-sm-6">
                <a
                  href="#"
                  data-src-mobile={video.url}
                  data-src={video.url}
                  className="videoInteractive__element__inner d-inline-block js-animation--fade"
                  onClick={onClickVideoItem(video.url)}
                  data-bs-toggle="modal"
                  data-bs-target="#videoModal"
                  data-offset=".5"
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
