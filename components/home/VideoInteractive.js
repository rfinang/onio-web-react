import Link from "next/link";
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
              <ul className="ul-reset h5 d-sm-block d-none text-primary">
                {description.map((item, index) => (
                  <li
                    className="js-animation--fade"
                    data-screen-offset={1.5 + (index + 1) / 10}
                    key={item.id}
                  >
                    {item.text_line}
                  </li>
                ))}
              </ul>
            )}
            <p className="mb-0 d-sm-none d-block h5 text-primary js-animation--lines">
              {description.map((item) => (
                <span key={item.id}>{item.text_line}</span>
              ))}
            </p>
          </div>
          <div className="col-md-auto col-12 ms-md-auto">
            {LinkTo && (
              <Link href={LinkTo.url} legacyBehavior>
                <a className="pageLink pageLink--black  js-animation--fade">
                  <span className="pageLink__text">{LinkTo.label}</span>
                  <span className="pageLink__icon">
                    <svg
                      width="31"
                      height="27"
                      viewBox="0 0 31 27"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M15.8594 1L29 13.5L15.8594 26" stroke="var(--onio-color-primary)" strokeWidth="2" />
                      <path d="M0 13.5898L28.7829 13.5898" stroke="var(--onio-color-primary)" strokeWidth="2" />
                    </svg>
                  </span>
                </a>
              </Link>
            )}
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
