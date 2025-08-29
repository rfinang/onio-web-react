import { useState } from "react";
import Link from "next/link";
import { VideoItem } from "../styles/VideoItem";
import { NavNewsItem } from "../styles/NavNewsItem";
import { NavMobileStyles } from "../styles/NavMobile";
import ImageComp from "../common/Image";
import {useAppContext} from "../../context/AppContext";
function NavMobile({ menus, social, menuPolicy, isOpen }) {
  const { dispatch } = useAppContext();
  const onClickVideoItem = (urlVideo) => () => {
    dispatch({
      type: "change_video",
      value: urlVideo,
    });
  };
  const [childOpen, setChildOpen] = useState("");
  return (
    <NavMobileStyles isOpen={isOpen}>
      <div className="container">
        <div className="nav-mobile__wrapper">
          <div className="scrollable">
            {menus && (
              <ul className="header__navigation__menu">
                {menus.map((item) => {
                  const video = item.video;
                  const news = item.file_or_link;
                  const listChild = item.items.filter((item) => item.Child.length === 0);
                  return (
                    <li
                      key={item.id}
                      className={`menu-item ${item.items.length ? "has-sub-menu" : ""}`}
                    >
                      {item.items.length > 0 ? (
                        <>
                          <button
                            className={`menu-item__link menu-item__has-sub`}
                            type="button"
                            data-href={item.name}
                            onClick={() => setChildOpen(item.name)}
                          >
                            <span className="menu-item__text">{item.name}</span>

                            <span className="menu-item__icon">
                              <svg
                                width="11"
                                height="18"
                                viewBox="0 0 11 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M1.11523 0.923096L9.19199 8.99985L1.11523 17.0766"
                                  stroke="#222021"
                                  strokeWidth="1.5"
                                />
                              </svg>
                            </span>
                          </button>
                          <div
                            className={`menu-item__child ${childOpen === item.name ? "show" : ""}`}
                          >
                            <div className="container">
                              <button
                                type="button"
                                onClick={() => setChildOpen("")}
                                className="menu-item__back"
                              >
                                <svg
                                  width="23"
                                  height="20"
                                  viewBox="0 0 23 20"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M11.4766 19.0298L1.99968 10.0149L11.4766 1.00005"
                                    stroke="#222021"
                                    strokeWidth="1.5"
                                  />
                                  <path
                                    d="M22.9141 9.9502L2.15614 9.95019"
                                    stroke="#222021"
                                    strokeWidth="1.5"
                                  />
                                </svg>
                                Back
                              </button>
                              <div className="scrollable">
                                {item.items &&
                                  item.items.map((itemChild, index) => {
                                    if (itemChild.Child.length > 0) {
                                      return (
                                        <div key={itemChild.id}>
                                          <h6 className="h6 menu-item__child__title">
                                            <Link href={itemChild.url} legacyBehavior>
                                              <a>{itemChild.label}</a>
                                            </Link>
                                          </h6>
                                          {itemChild.Child.length > 0 && (
                                            <ul className="menu-item__child__menu">
                                              {itemChild.Child.map((itemSubChild) => (
                                                <li key={itemSubChild.id}>
                                                  <Link href={itemSubChild.url} legacyBehavior>
                                                    <a>{itemSubChild.label}</a>
                                                  </Link>
                                                </li>
                                              ))}
                                            </ul>
                                          )}
                                        </div>
                                      );
                                    }
                                  })}

                                {listChild.length > 0 && (
                                  <ul className="menu-item__child__pages">
                                    {listChild.map((listChildItem) => (
                                      <li key={listChildItem.id}>
                                        <Link href={listChildItem.url} legacyBehavior>
                                          <a className="h6 d-block">{listChildItem.label}</a>
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                )}
                                {video && (
                                  <>
                                    <h6
                                      className="h6 menu-item__child__title"
                                      dangerouslySetInnerHTML={{
                                        __html: video.label,
                                      }}
                                    />

                                    <VideoItem
                                      data-src-mobile={video.mobile_video?.url ?? video.video.url}
                                      data-src={video.video.url}
                                      href="#video-popup"
                                      data-bs-toggle="modal"
                                      data-bs-target="#videoModal"
                                      onClick={onClickVideoItem(video.mobile_video?.url ?? video.video.url)}
                                    >
                                      <figure className="link__video__img">
                                        <ImageComp image={video.thumbnail} />
                                        <span className="link__video__icon">
                                          <img
                                            src="/icons/i-arrow-none-large.svg"
                                            className="svg"
                                            alt="i-arrow"
                                          />
                                        </span>
                                      </figure>
                                    </VideoItem>
                                  </>
                                )}
                                {news && (
                                  <div className={video ? `mt-3` : ""}>
                                    <h6 className="h6 menu-item__child__title">{news.label}</h6>

                                    {news.items.length &&
                                      news.items.map((newsItem) => (
                                        <NavNewsItem
                                          key={newsItem.id}
                                          href={newsItem.link}
                                          className="t-body mb-3"
                                        >
                                          <p
                                            className="news-nav__desc"
                                            dangerouslySetInnerHTML={{
                                              __html: newsItem.label,
                                            }}
                                          />
                                          <span className="news-nav__icon">
                                            <svg
                                              width="12"
                                              height="21"
                                              viewBox="0 0 12 21"
                                              fill="none"
                                              xmlns="http://www.w3.org/2000/svg"
                                            >
                                              <path
                                                d="M1.16504 1.40454L10.3033 10.5428L1.16504 19.6811"
                                                stroke="#AEADAD"
                                                strokeWidth="2"
                                              />
                                            </svg>
                                          </span>
                                        </NavNewsItem>
                                      ))}
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        </>
                      ) : (
                        <Link href={item.link} legacyBehavior>
                          <a className={`menu-item__link`}>
                            <span className="menu-item__text">{item.name}</span>
                          </a>
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>
            )}
            <a
              href="#contact-form"
              data-bs-toggle="modal"
              data-bs-target="#contactModal"
              className="btn btn--bg btn--border btn--bg--white btn-contact"
              title="Contact us"
            >
              Contact us
            </a>
            {social?.length > 0 && (
              <ul className="socials ul-reset">
                {social.map((item) => (
                  <li key={item.id} className="social__item">
                    <a
                      className="social__item__link social__item__link--fb"
                      href={item.url}
                      target="_blank"
                    >
                      <img src={item.icon.url} className="svg" alt={item.title} />
                    </a>
                  </li>
                ))}
              </ul>
            )}
            {menuPolicy?.items?.length > 0 && (
              <ul className="terms ul-reset mt-sm-1 mt-2">
                {menuPolicy.items.map((item) => (
                  <li key={item.id} className="term__item">
                    <Link href={item.url} legacyBehavior>
                      <a className="term__item__link">{item.label}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </NavMobileStyles>
  );
}

export default NavMobile;
