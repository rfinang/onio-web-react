import { useRef, useEffect, useState } from "react";

import DownloadPopup from "../common/DownloadPopup";
import ImageComp from "../common/Image";
import { Button } from "../ui";
import { NewsLandingContentStyles } from "../styles/news/NewsLandingContent";
import { useAppContext } from "../../context/AppContext";

import ImageLazy from "../helper/image-lazy/image-lazy";
function MediaCenter({ sendMail, mediaCenter }) {
  if (!mediaCenter) return null;
  const { dispatch } = useAppContext();
  const onClickGetStartedItem = (reasoneToContact) => () => {
    return dispatch({
      type: "change_contact",
      value: reasoneToContact,
    });
  };

  const { name, short_description } = sendMail;
  const { label, media_file } = mediaCenter;

  const [mediaList, setMediaList] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  // slider
  const slider = useRef(null);
  const next = () => {
    slider.current.slickNext();
  };
  const previous = () => {
    slider.current.slickPrev();
  };
  const handleClick = (index) => {
    slider.current.slickGoTo(index);
  };
  // loadmore
  function chunks(arr, n) {
    let newArr = [];
    for (let i = 0; i < arr.length; i += n) {
      newArr.push(arr.slice(i, i + n));
    }
    return newArr;
  }
  const mediaArr = chunks(media_file, 6);

  useEffect(() => {
    setMediaList([...mediaArr[0]]);
  }, []);
  const handleLoadmore = () => {
    setMediaList([...mediaList, ...mediaArr[currentPage + 1]]);
    setCurrentPage(currentPage + 1);
    setTimeout(() => {
      new ImageLazy();
    });
  };
  return (
    <>
      <NewsLandingContentStyles>
        <div className="newsLanding__content bg-dark">
          <div className="container">
            {mediaCenter && (
              <>
                <div className="row mb-3">
                  <div className="col-12 mb-sm-4 mb-2 pb-1">
                    <h4 className="heading--block heading--block--white d-inline-block js-animation--fade">
                      <span className="heading--block__text">{label}</span>
                    </h4>
                  </div>
                </div>
                <ul className="mediaCentreList js-mediaCentreList ul-reset row mb-4">
                  {mediaList.map((item, index) => {
                    const { id, title, date, thumbnail } = item;
                    let createAt = new Date(date);
                    createAt =
                      date &&
                      createAt.toLocaleString("en-us", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      });
                    return (
                      <li key={id} className="mediaCentre js-mediaCentre col-md-4 col-sm-6 col-12">
                        <a
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#downloadModal"
                          className="d-block js-animation--fade"
                          onClick={() => handleClick(index)}
                          data-offset={(index % 3) * 0.15}
                        >
                          <div className="mediaCentre__thumbnail image__object-fit">
                            <ImageComp image={thumbnail} />
                          </div>
                          <div className="mediaCentre__info align-items-end row">
                            <div className="col mediaCentre__info__left">
                              <p className="mb-0">{createAt}</p>
                              <p className="mb-0">{title}</p>
                            </div>
                            <div className="col-auto ms-auto mediaCentre__info__right">
                              <span className="iconLink iconLink--download iconLink--download--small iconLink--arrow--silver">
                                <svg
                                  width="21"
                                  height="23"
                                  viewBox="0 0 21 23"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="svg"
                                >
                                  <path
                                    d="M19.5115 11.8057L10.4998 21.2791L1.48822 11.8057"
                                    stroke="#FF6231"
                                    strokeWidth="2"
                                  ></path>
                                  <path
                                    d="M10.4351 0.37207L10.4351 21.1225"
                                    stroke="#FF6231"
                                    strokeWidth="2"
                                  ></path>
                                </svg>
                              </span>
                            </div>
                          </div>
                        </a>
                      </li>
                    );
                  })}
                </ul>
                {currentPage + 1 < mediaArr.length && (
                  <div className="row justify-content-center mb-6 pb-2">
                    <div className="col-lg-2 col-sm-3 col-12 js-animation--fade">
                      <Button
                        variant="secondary"
                        size="lg"
                        fullWidth={true}
                        className="js-btn-load js-btn-load__media js-link--btn"
                        onClick={handleLoadmore}
                      >
                        Load More
                      </Button>
                    </div>
                  </div>
                )}
              </>
            )}

            <div className="row">
              <div className="col-md-3 col-sm-4 col-12 text-white js-animation--fade">
                <h5 className="h5">Press Contact</h5>
                <h6 className="h6 mb-0">{name}</h6>
                <p>{short_description}</p>
                <p>
                  <a
                    href="#contact-form-press"
                    data-bs-toggle="modal"
                    data-bs-target="#contactModal"
                    className="pageLink pageLink--white"
                    onClick={onClickGetStartedItem("#contact-form-press")}
                  >
                    <span className="pageLink__text">Contact us</span>
                    <span className="pageLink__icon">
                      <svg
                        width="31"
                        height="27"
                        viewBox="0 0 31 27"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="svg"
                      >
                        <path
                          d="M15.8594 1L29 13.5L15.8594 26"
                          stroke="white"
                          strokeWidth="2"
                        ></path>
                        <path d="M0 13.5898L28.7829 13.5898" stroke="white" strokeWidth="2"></path>
                      </svg>
                    </span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </NewsLandingContentStyles>
      <DownloadPopup mediaFile={mediaList} slider={slider} next={next} previous={previous} />
    </>
  );
}

export default MediaCenter;
