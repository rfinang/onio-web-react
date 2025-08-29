import Link from "next/link";

import Post from "../news/Post";
import { HomeNewsStyles } from "../styles/home/HomeNews";
function NewsPost({
  data,
  headingBlock = "Latest Articles",
  pageLinkURL = "/article",
  pageLinkText = "View all Latest News",
  hasSpacing = false,
}) {
  if (!data) return null;
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
            {data.map((item, index) => {
              return (
                <div key={item.id} className="col-lg-6 col-12">
                  <div className="js-animation--fade" data-offset={index % 2 === 1 ? ".15" : 0}>
                    <Post data={item} />
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

export default NewsPost;
