import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ContactPopupStyles } from "../styles/block/ContactPopup";
import ImageComp from "./Image";
import { Button } from "../ui";
import Slider from "react-slick";
function DownloadPopup({ mediaFile, slider, next, previous }) {
  if (!mediaFile) return null;

  const settings = {
    dots: false,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    initialSlide: 4,
  };

  return (
    <ContactPopupStyles
      className="modal fade modal-download"
      id="downloadModal"
      tabindex="-1"
      aria-labelledby="contactModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-body">
            <div className="popup--main popup--main--full popup--main--download">
              <div className="popup--main-body">
                <div className="container">
                  <div className="row align-items-center mb-6 pb-sm-0 pb-1">
                    <div className="col-auto">
                      <h4 className="heading--block heading--block--title mb-0 d-block">
                        <span className="heading--block__text">Media</span>
                      </h4>
                    </div>
                    <div className="col-auto ms-auto">
                      <button className="popupClose popupClose--black" data-bs-dismiss="modal">
                        <span className="popupClose__text">Close</span>
                        <span>
                          <svg
                            width="30"
                            height="30"
                            viewBox="0 0 30 30"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="svg fill-dark"
                          >
                            <path
                              d="M1 29L29 1"
                              stroke="white"
                              strokeWidth="2"
                              strokeMiterlimit="10"
                            ></path>
                            <path
                              d="M1 1L29 29"
                              stroke="white"
                              strokeWidth="2"
                              strokeMiterlimit="10"
                            ></path>
                          </svg>
                        </span>
                      </button>
                    </div>
                  </div>
                  <Slider ref={slider} {...settings}>
                    {mediaFile.map((item) => {
                      const { id, title, date, thumbnail, image, file, description } = item;
                      let createAt = new Date(date);
                      createAt =
                        date &&
                        createAt.toLocaleString("en-us", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        });
                      return (
                        <div key={id} className="slider-item">
                          <div className="row mediaPopup">
                            <div className="col-md-8 col-12 mediaPopup__thumbnail mb-md-0 mb-sm-4 mb-2 image__object-fit">
                              <ImageComp image={image} />
                            </div>
                            <div className="col-md-4 col-12 mediaPopup__info">
                              <div className="row">
                                <div className="col-md-12 col-sm-3 col-12">
                                  <ul className="row g-0 ul-reset justify-content-sm-start justify-content-between mb-md-6 mb-sm-0 mb-3">
                                    <li className="col-sm-auto col-auto">
                                      <button
                                        className="js-mediaPopup__info__prev mediaPopup__info__btn"
                                        onClick={previous}
                                      >
                                        <img src="/icons/i-popup-arrow.svg" alt="i-popup-arrow" />
                                      </button>
                                    </li>
                                    <li className="col-sm-auto col-auto">
                                      <button
                                        className="js-mediaPopup__info__next mediaPopup__info__btn"
                                        onClick={next}
                                      >
                                        <img
                                          src="/icons/i-popup-arrow.svg"
                                          className="reverse"
                                          alt="i-popup-arrow"
                                        />
                                      </button>
                                    </li>
                                  </ul>
                                </div>
                                <div className="col-md-12 col-sm-9 col-12">
                                  <h6 className="h6 mediaPopup__info__title mb-1">{title}</h6>
                                  <p className="mediaPopup__info__date mb-md-5 mb-3">{createAt}</p>
                                  <div className="js-mediaPopup__info__desc mediaPopup__info__desc mb-3 pb-1 pr-5">
                                    {description}
                                  </div>
                                  <p className="mb-0 d-inline-block">
                                    {file && (
                                      <Button
                                        as="a"
                                        variant="secondary"
                                        size="lg"
                                        className="js-mediaPopup__info__link js-link--btn"
                                        href={file?.url}
                                        download
                                      >
                                        Download
                                      </Button>
                                    )}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ContactPopupStyles>
  );
}

export default DownloadPopup;
