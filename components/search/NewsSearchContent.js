import { useState, useEffect } from "react";
import Link from "next/link";
import { getSearchArticlesApi, getSearchNewsApi } from "../../api";
import ImageComp from "../common/Image";
import { Button } from "../ui";

import Loading from "../common/Loading";
import ImageLazy from "../helper/image-lazy/image-lazy";

function NewsSearchContent({ keyword, news }) {
  const { items: articleItems } = news.data;
  const { count } = news.data;
  const [itemList, setItemList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [queryStart, setQueryStart] = useState(9);
  useEffect(() => {
    setItemList(news.data.items);
  }, [news]);
  const handleLoadmore = async () => {
    setIsLoading(true);
    const res = await getSearchNewsApi({
      _limit: 9,
      _start: queryStart,
      k: keyword,
    });
    setQueryStart(queryStart + 9);
    setItemList([...itemList, ...res.data.data.items]);
    new ImageLazy();
    setIsLoading(false);
  };
  return (
    <div className="main-section">
      {isLoading && <Loading />}
      <div className="container">
        <h3 className="heading--block d-inline-block js-animation--fade">
          <span className="heading--block__text">News</span>
        </h3>
        {itemList.length === 0 && (
          <p className="mb-0 h5 js-animation--fade" data-screen-offset=".15">
            No matches found
          </p>
        )}
        {articleItems && (
          <div className="block-content">
            <div className="block-main">
              <div className="row">
                {itemList.map((item) => {
                  const { id, title, slug, thumbnail } = item;
                  const itemSlug = `/news/${slug}.html`;
                  return (
                    <div
                      key={id}
                      className="col-sm-6 col-md-4 block-col js-animation--fade"
                      data-screen-offset=".15"
                    >
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
                        <Link href={itemSlug} legacyBehavior>
                          <a className="link" title={title}></a>
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
              {itemList.length < count && (
                <div className="row justify-content-center search-page__loadmore">
                  <div className="col-md-auto col-12 js-animation--fade">
                    <Button
                      variant="secondary"
                      size="lg"
                      fullWidth={true}
                      className="js-btn-load js-link--btn"
                      onClick={handleLoadmore}
                      disabled={isLoading}
                    >
                      Load More
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default NewsSearchContent;
