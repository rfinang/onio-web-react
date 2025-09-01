import Link from "next/link";
import { HomeNewsStyles } from "../styles/home/HomeNews";
import ImageComp from "../common/Image";
function HomeBlog({
  blogData: homeLatestBlog,
  headingBlock = "Latest Articles",
  pageLinkURL = "/article",
  pageLinkText = "View all Latest News",
  hasSpacing = false,
}) {
  if (!homeLatestBlog) return null;
  return (
    <HomeNewsStyles>
      <div className="lastArticles bg-wild lastArticles--home pb-1">
        {hasSpacing ? (
          <span className="d-block line__spacing spacing--bottom--sm pt-sm-0 pt-2"></span>
        ) : null}
        <div className="container pb-2">
          <div className="row spacing--bottom--sm">
            <div className="col-sm-4 col-12">
              <h4 className="heading--block mb-0 d-inline-block js-animation--fade">
                <span className="heading--block__text">{headingBlock}</span>
              </h4>
            </div>
            <div className="col-auto d-sm-block d-none ms-auto">
              <Link href={pageLinkURL} legacyBehavior>
                <a className="pageLink pageLink--black js-animation--fade" data-offset=".15">
                  <span className="pageLink__text">{pageLinkText}</span>
                  <span className="pageLink__icon">
                    <svg
                      width="31"
                      height="27"
                      viewBox="0 0 31 27"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.8594 1L29 13.5L15.8594 26"
                        stroke="#222021"
                        strokeWidth="2"
                      ></path>
                      <path d="M0 13.5898L28.7829 13.5898" stroke="#222021" strokeWidth="2"></path>
                    </svg>
                  </span>
                </a>
              </Link>
            </div>
          </div>
          <div className="row">
            {homeLatestBlog.map((item, index) => {
              let createAt = new Date(item.publish_date);
              createAt = createAt.toLocaleString("en-us", {
                day: "numeric",
                month: "short",
                year: "numeric",
              });
              return (
                <div key={item.id} className="col-lg-6 col-12">
                  <div
                    className="article js-animation--fade"
                    data-offset={index % 2 === 1 ? ".15" : 0}
                  >
                    <Link href={`/article/${item.slug}.html`} legacyBehavior>
                      <a className="article__link">
                        <div className="article__thumbnail image__object-fit font-0">
                          <ImageComp image={item.thumbnail} />
                        </div>
                        <div className="article__info">
                          <div className="article__info__meta d-flex">
                            <span className="metaLabel article__info__meta__date text-primary">
                              {createAt}
                            </span>
                            <span className="metaLabel ms-auto article__info__meta__timeRead text-primary">
                              {item.read_time}
                            </span>
                          </div>
                          {item.categories && item.categories.length > 0 && (
                            <ul className="article__info__tags ul-reset text-muted metaLabel">
                              {item.categories.map((category, index) => {
                                return (
                                  <li key={category.id} className="tag__item">
                                    {category.name}
                                    {index < item.categories.length - 1 ? (
                                      <span className="tag__item tag__item--slack">|</span>
                                    ) : null}
                                  </li>
                                );
                              })}
                            </ul>
                          )}
                          <h4 className="article__info__heading h6 text-primary">{item.title}</h4>
                          <div className="article__info__read">
                            <span className="iconLink iconLink--arrow iconLink--arrow--oval iconLink--arrow--large iconLink--arrow--black">
                              <svg
                                width="16"
                                height="28"
                                viewBox="0 0 16 28"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="svg"
                              >
                                <path
                                  d="M1.57715 1.61572L13.9615 14.0001L1.57715 26.3844"
                                  stroke="white"
                                  strokeWidth="2"
                                ></path>
                              </svg>
                            </span>
                          </div>
                        </div>
                      </a>
                    </Link>
                  </div>
                </div>
              );
            })}

            <div className="col-12 d-sm-none d-block mt-sm-0 mt-4 js-animation--fade">
              <Link href="/articles" legacyBehavior>
                <a className="pageLink pageLink--black">
                  <span className="pageLink__text">View all articles</span>
                  <span className="pageLink__icon">
                    <svg
                      width="31"
                      height="27"
                      viewBox="0 0 31 27"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.8594 1L29 13.5L15.8594 26"
                        stroke="#222021"
                        strokeWidth="2"
                      ></path>
                      <path d="M0 13.5898L28.7829 13.5898" stroke="#222021" strokeWidth="2"></path>
                    </svg>
                  </span>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </HomeNewsStyles>
  );
}

export default HomeBlog;
