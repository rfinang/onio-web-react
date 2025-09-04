import { useRef, useEffect, useState } from "react";

import DownloadPopup from "../common/DownloadPopup";
import ImageComp from "../common/Image";
import { Button, Container } from "../ui";
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
        <div className="newsLanding__content bg-primary">
          <Container>
            {mediaCenter && (
              <>
                <div className="grid mb-3">
                  <div className="mb-sm-4 mb-2 pb-1">
                    <h4 className="heading--block heading--block--white d-inline-block js-animation--fade">
                      <span className="heading--block__text">{label}</span>
                    </h4>
                  </div>
                </div>
                <ul className="mediaCentreList js-mediaCentreList ul-reset grid sm:grid-cols-2 md:grid-cols-3 gap-lg mb-4">
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
                      <li key={id} className="mediaCentre js-mediaCentre">
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
                          <div className="mediaCentre__info align-items-end grid grid-cols-[1fr_auto] gap-md">
                            <div className="mediaCentre__info__left">
                              <p className="mb-0">{createAt}</p>
                              <p className="mb-0">{title}</p>
                            </div>
                            <div className="mediaCentre__info__right justify-self-end">
                              <Button variant="icon" hasIcon="download" color="muted" size="small" />
                            </div>
                          </div>
                        </a>
                      </li>
                    );
                  })}
                </ul>
                {currentPage + 1 < mediaArr.length && (
                  <div className="grid justify-center mb-6 pb-2">
                    <div className="js-animation--fade w-full sm:w-1/3 lg:w-1/6">
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

            <div className="grid">
              <div className="text-white js-animation--fade md:w-1/4 sm:w-1/3 w-full">
                <h5 className="h5">Press Contact</h5>
                <h6 className="h6 mb-0">{name}</h6>
                <p>{short_description}</p>
                <Button
                  as="a"
                  href="#contact-form-press"
                  data-bs-toggle="modal"
                  data-bs-target="#contactModal"
                  variant="link"
                  color="white"
                  hasArrow
                  onClick={onClickGetStartedItem("#contact-form-press")}
                >
                  Contact us
                </Button>
              </div>
            </div>
          </Container>
        </div>
      </NewsLandingContentStyles>
      <DownloadPopup mediaFile={mediaList} slider={slider} next={next} previous={previous} />
    </>
  );
}

export default MediaCenter;
