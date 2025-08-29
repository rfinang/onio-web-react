import Link from "next/link";
import React from "react";
import ImageComp from "../common/Image";

import CardText from "./CardText";
import { generateSlug } from "./helper";

function SearchContent({ keyword, articles, news, products, general }) {
  const { items: productItems } = products.data;
  const { items: generalItems } = general.data;
  const { items: articleItems } = articles.data;
  const { items: newsItems } = news.data;
  return (
    <div className="main-section">
      <div className="container">
        <h3 className="heading--block d-inline-block js-animation--fade">
          <span className="heading--block__text">Top Hits</span>
        </h3>
        <div className="row">
          <div className="col-md-8">
            {articleItems && (
              <div className="block-content">
                <div className="block-top d-flex">
                  <h3 className="h6 block-title js-animation--fade" data-screen-offset=".15">
                    Articles /
                  </h3>
                  <Link href={`/search/article?keyword=${keyword}`}>
                    <a
                      className="block-viewmore js-animation--fade"
                      data-screen-offset=".25"
                      title="See all"
                    >
                      See all
                    </a>
                  </Link>
                </div>
                <div className="block-main">
                  <div className="row">
                    {articleItems.map((item) => {
                      const { id, title, slug, thumbnail } = item;
                      const itemSlug = `/article/${slug}.html`;
                      return (
                        <div key={id} className="col-sm-6 block-col js-animation--fade">
                          <div className="article-card">
                            <div className="img image__object-fit">
                              <ImageComp image={thumbnail} />
                            </div>
                            <div className="info">
                              <h3 className="h6 info-title">{title}</h3>
                              <svg
                                className="info-icon"
                                width="46"
                                height="46"
                                viewBox="0 0 46 46"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <circle cx="23" cy="23" r="22" stroke="#222021" strokeWidth="2" />
                                <path
                                  d="M18.5769 10.6157L30.9613 23.0001L18.5769 35.3844"
                                  stroke="#222021"
                                  strokeWidth="2"
                                />
                              </svg>
                            </div>
                            <Link href={itemSlug}>
                              <a className="link" title={title}></a>
                            </Link>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}

            <div className="block-content">
              <div className="block-top d-flex">
                <h3 className="h6 block-title js-animation--fade" data-screen-offset=".15">
                  News /
                </h3>
                {news?.data?.count === 0 ? (
                  <span className="block-viewmore">No matches</span>
                ) : (
                  <Link href={`/search/news?keyword=${keyword}`}>
                    <a
                      className="block-viewmore js-animation--fade"
                      data-screen-offset=".25"
                      title="See all"
                    >
                      See all
                    </a>
                  </Link>
                )}
              </div>
              <div className="block-main">
                <div className="row">
                  {newsItems.map((item) => {
                    const { id, title, slug, thumbnail } = item;
                    const itemSlug = `/news/${slug}.html`;
                    return (
                      <div key={id} className="col-sm-6 block-col js-animation--fade">
                        <div className="article-card">
                          <div className="img image__object-fit">
                            <ImageComp image={thumbnail} />
                          </div>
                          <div className="info">
                            <h3 className="h6 info-title">{title}</h3>
                            <svg
                              className="info-icon"
                              width="46"
                              height="46"
                              viewBox="0 0 46 46"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <circle cx="23" cy="23" r="22" stroke="#222021" strokeWidth="2" />
                              <path
                                d="M18.5769 10.6157L30.9613 23.0001L18.5769 35.3844"
                                stroke="#222021"
                                strokeWidth="2"
                              />
                            </svg>
                          </div>
                          <Link href={itemSlug}>
                            <a className="link" title={title}></a>
                          </Link>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="sidebar">
              {general && (
                <div className="block-content">
                  <div className="block-top d-flex">
                    <h3 className="h6 block-title js-animation--fade" data-screen-offset=".15">
                      General /
                    </h3>
                    {general?.data?.count === 0 ? (
                      <span className="block-viewmore">No matches</span>
                    ) : (
                      <Link href={`/search/general?keyword=${keyword}`}>
                        <a
                          className="block-viewmore js-animation--fade"
                          data-screen-offset=".25"
                          title="See all"
                        >
                          See all
                        </a>
                      </Link>
                    )}
                  </div>
                  <div className="block-main">
                    {generalItems.map((item) => {
                      const { id, title, description, model_name, slug } = item;
                      const { cardSlug, cardBreadscumb } = generateSlug(title, slug, model_name);
                      return (
                        <div key={id} className="js-animation--fade">
                          <CardText
                            description={description}
                            slug={cardSlug}
                            slugList={cardBreadscumb}
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
              {products && (
                <div className="block-content js-animation--fade">
                  <div className="block-top d-flex">
                    <h3 className="h6 block-title">Products /</h3>
                    {products?.data?.count === 0 ? (
                      <span className="block-viewmore">No matches</span>
                    ) : (
                      <Link href={`/search/products?keyword=${keyword}`}>
                        <a
                          className="block-viewmore js-animation--fade"
                          data-screen-offset=".25"
                          title="See all"
                        >
                          See all
                        </a>
                      </Link>
                    )}
                  </div>
                  <div className="block-main">
                    {productItems.map((item) => {
                      const { id, title, description, model_name, slug } = item;

                      const { cardSlug, cardBreadscumb } = generateSlug(title, slug, model_name);
                      return (
                        <div key={id} className="js-animation--fade">
                          <CardText
                            title={title}
                            description={description}
                            slug={cardSlug}
                            slugList={cardBreadscumb}
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* <div className="block-content js-animation--fade">
                <div className="block-top d-flex">
                  <h3 className="h6 block-title">Documents /</h3>
                  <a href="#" className="block-viewmore" title="See all ">
                    See all
                  </a>
                </div>
                <div className="block-main">
                  <div className="row">
                    <div className="block-col col-6">
                      <a href="#" className="resource resource--black js-animation--fade">
                        <span className="d-block resource__heading">
                          Request ONiO.zero Datasheet
                        </span>
                        <span className="d-block resource__icon">
                          <span className="iconLink iconLink--download iconLink--download--small">
                            <svg
                              width="20"
                              height="24"
                              viewBox="0 0 20 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M18.9131 12.3174L9.94299 21.8287L0.972889 12.3174"
                                stroke="#222021"
                                strokeWidth="2"
                              />
                              <path
                                d="M9.87842 0.837891L9.87842 21.6712"
                                stroke="#222021"
                                strokeWidth="2"
                              />
                            </svg>
                          </span>
                        </span>
                      </a>
                    </div>
                    <div className="block-col col-6">
                      <a href="#" className="resource resource--black js-animation--fade">
                        <span className="d-block resource__heading">
                          Request ONiO.zero Datasheet
                        </span>
                        <span className="d-block resource__icon">
                          <span className="iconLink iconLink--download iconLink--download--small">
                            <svg
                              width="20"
                              height="24"
                              viewBox="0 0 20 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M18.9131 12.3174L9.94299 21.8287L0.972889 12.3174"
                                stroke="#222021"
                                strokeWidth="2"
                              />
                              <path
                                d="M9.87842 0.837891L9.87842 21.6712"
                                stroke="#222021"
                                strokeWidth="2"
                              />
                            </svg>
                          </span>
                        </span>
                      </a>
                    </div>
                    <div className="block-col col-6">
                      <a href="#" className="resource resource--black js-animation--fade">
                        <span className="d-block resource__heading">
                          Request ONiO.zero Datasheet
                        </span>
                        <span className="d-block resource__icon">
                          <span className="iconLink iconLink--download iconLink--download--small">
                            <svg
                              width="20"
                              height="24"
                              viewBox="0 0 20 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M18.9131 12.3174L9.94299 21.8287L0.972889 12.3174"
                                stroke="#222021"
                                strokeWidth="2"
                              />
                              <path
                                d="M9.87842 0.837891L9.87842 21.6712"
                                stroke="#222021"
                                strokeWidth="2"
                              />
                            </svg>
                          </span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchContent;
