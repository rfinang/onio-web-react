import Link from "next/link";
import { Typography } from "../ui";
import { VideoItem } from "../styles/VideoItem";
import { NavNewsItem } from "../styles/NavNewsItem";
import { useAppContext } from "../../context/AppContext";
import ImageComp from "../common/Image";
function Nav({ menus }) {
  const { dispatch } = useAppContext();
  const onClickVideoItem = (urlVideo) => () => {
    dispatch({
      type: "change_video",
      value: urlVideo,
    });
  };

  return (
    <nav className="t-nav header__navigation col-auto">
      {menus && (
        <ul className="header__navigation__menu">
          {menus.map((item) => {
            const video = item.video;
            const news = item.file_or_link;
            const listChild = item.items.filter((item) => item.Child.length === 0);
            return (
              <li key={item.id} className={`menu-item ${item.items.length ? "has-sub-menu" : ""}`}>
                <Link href={item.link} legacyBehavior>
                  <a
                    className={`menu-item__link ${item.items.length ? "menu-item__has-sub" : ""}`}
                    data-href={item.name}
                  >
                    <span className="menu-item__text">{item.name}</span>
                    {item.items.length > 0 ? <span className="menu-item__icon"></span> : null}
                  </a>
                </Link>
                {item.items.length > 0 && (
                  <div className="menu-item__child">
                    <div className="container">
                      <div className="row justify-content-start d-sm-flex d-block">
                        {item.items &&
                          item.items.map((itemChild, index) => {
                            if (itemChild.Child.length > 0) {
                              return (
                                <div
                                  key={itemChild.id}
                                  className={`col-lg-${2 + index} col-sm-6 col-12`}
                                >
                                  <Typography variant="h6" className="menu-item__child__title" as="h6">
                                    <Link href={itemChild.url} legacyBehavior>
                                      <a>{itemChild.label}</a>
                                    </Link>
                                  </Typography>
                                  {itemChild.Child.length > 0 && (
                                    <ul className="menu-item__child__menu mb-3 mb-lg-0">
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
                          <div className="col-lg-2 col-md-3 col-sm-6 col-12 mb-sm-0 mb-5">
                            <ul className="menu-item__child__pages">
                              {listChild.map((listChildItem) => (
                                <li key={listChildItem.id}>
                                  <Link href={listChildItem.url} legacyBehavior>
                                    <Typography variant="h6" className="d-block" as="a">{listChildItem.label}</Typography>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                        {video && (
                          <div className="col-lg-3 col-sm-6 col-12 offset-lg-1 mt-lg-0 mt-md-5 mt-sm-4 mt-3">
                            <Typography
                              variant="h6"
                              className="menu-item__child__title"
                              as="h6"
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
                              onClick={onClickVideoItem(video.video.url)}
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
                          </div>
                        )}
                        {news && (
                          <div
                            className={
                              video
                                ? "col-lg-3 col-sm-6 col-12 mt-lg-0 mt-md-5 mt-sm-4 mt-3"
                                : "col-lg-6 col-sm-6 col-12 mt-md-0 mt-sm-4 mt-3 ms-md-auto"
                            }
                          >
                            <Typography variant="h6" className="menu-item__child__title">{news.label}</Typography>
                            <div className="row">
                              {news.items.length &&
                                news.items.map((newsItem) => (
                                  <div
                                    key={newsItem.id}
                                    className={
                                      video ? "col-12 mb-1" : "col-lg-4 col-md-6 col-12 mb-1"
                                    }
                                  >
                                    <NavNewsItem href={newsItem.link} className="t-body">
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
                                  </div>
                                ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      )}
    </nav>
  );
}

export default Nav;
