import { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { VideoSlide } from "../styles/elements/video-slide";
import VideoResponsive from "../helper/video-responsive";
import ImageComp from "../common/Image";
function HomePossibilities({ oneChipData: oneChipVideos, isHomepage = false }) {
  if (!oneChipVideos) return null;
  useEffect(() => {
    new VideoResponsive();
  }, []);
  const settings = {
    dots: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplay: true,
    autoplaySpeed: 5000,
    customPaging: (i) => <span>{i + 1}</span>,
  };
  const { label, endless_possiblities_item: videoList } = oneChipVideos;

  return (
    <>
      <div className="mb-4">
        <h4 className="heading--block heading--block--border d-inline-block mb-0 js-animation--fade">
          <span className="heading--block__text">{label}</span>
        </h4>
      </div>
      {videoList && (
        <VideoSlide className="js-animation--fade">
          <div className="videoSlide fadeSlide js-videoSlide">
            <div className="videoSlide__images fadeSlide__images">
              <Slider {...settings}>
                {videoList.map((item) => {
                  const { title, description, id, icon, video, mobile_video, mobile_icon, image, mobile_image } = item;
                  return (
                    <div className="slider-item" key={id}>
                      <div className="videoSlide__item fadeSlide__item ">
                        { isHomepage && image ?
                            (<div className="fadeSlide__item__player image__object-fit js-animation--image is-animation-loading">
                              {image && (
                                  <ImageComp image={image} preload={true} customClass={mobile_image ? 'd-sm-block d-none' : ''} />
                              )}
                              {mobile_image && (
                                  <ImageComp image={mobile_image} preload={true}  customClass={'d-sm-none d-block'}/>
                              )}
                            </div>)
                                :
                            (<div className="fadeSlide__item__player">
                            {video && (
                                <video
                                    className="js-fadeSlide__item__video js-video__responsive"
                                    poster=""
                                    preload="metadata"
                                    data-src={video.url}
                                    data-src-mobile={mobile_video ? mobile_video.url : video.url}
                                    loop
                                    muted
                                    playsInline
                                    webkit-playsinline="true"
                                    x5-playsinline="true"
                                    style={{width: "100%", height: "100%"}}
                                ></video>
                            )}
                          </div>)
                        }
                        <div className="fadeSlide__item__content">
                          <div className="bigImageRow__desc__title__icon mb-1 d-inline-block">
                            <img
                              className="d-sm-block d-none"
                              src={icon.url}
                              alt="i-heading-big-image-row"
                            />

                            <img
                              src={mobile_icon.url}
                              className="d-sm-none d-block"
                              alt="i-heading-big-image-row"
                            />
                          </div>
                          <h5 className="bigImageRow__desc__title heading--small">{title}</h5>
                          <p className="mb-0 bigImageRow__desc__content">{description}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </Slider>
            </div>
          </div>
        </VideoSlide>
      )}
    </>
  );
}

export default HomePossibilities;
