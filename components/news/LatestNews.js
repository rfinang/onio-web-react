import { useEffect, useState } from "react";
import { getNewsPostApi } from "../../api";
import Loading from "../common/Loading";

import ImageLazy from "../helper/image-lazy/image-lazy";
import { LastArticleStyles } from "../styles/blog/LastArticles";
import Post from "./Post";

function LatestNews({ newsData, newsToTal }) {
  if (!newsData) return null;
  const [newsList, setNewsList] = useState([]);

  const [queryStart, setQueryStart] = useState(6);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (newsData) {
      setNewsList(newsData);
    }
  }, [newsData]);
  const handleLoadmore = async () => {
    setIsLoading(true);
    const res = await getNewsPostApi({
      _limit: 6,
      _start: queryStart,
      _sort: "publish_date:DESC",
    });
    setQueryStart(queryStart + 6);
    const newsPostArr = _.get(res, "data.data", []);
    const newsPostData = newsPostArr.map((item) => {
      return {
        id: item.id,
        title: item.title,
        slug: item.slug,
        publish_date: item.publish_date,
        thumbnail: item.thumbnail,
      };
    });
    setNewsList([...newsList, ...newsPostData]);
    new ImageLazy();
    setIsLoading(false);
  };

  return (
    <LastArticleStyles>
      {isLoading && <Loading />}
      <div className="lastArticles bg-wild pb-3">
        <div className="container pb-1">
          <div className="row mb-2 pb-1">
            <div className="col-12">
              <h4
                className="heading--block mb-0 d-inline-block mb-4 js-animation--fade"
                data-screen-offset=".8"
              >
                <span className="heading--block__text">Latest News</span>
              </h4>
            </div>
          </div>
          <div className="row mb-4">
            {newsList.map((item) => {
              const { id } = item;

              return (
                <div
                  key={id}
                  className="col-sm-6 col-12 js-animation--fade"
                  data-screen-offset=".9"
                >
                  <Post data={item} />
                </div>
              );
            })}
          </div>
          {newsList.length < newsToTal ? (
            <div className="row justify-content-center">
              <div className="col-md-auto col-12 js-animation--fade">
                <button
                  className="btn btn--large btn--bg btn--bg--silver js-btn-load js-link--btn w-100"
                  disabled={isLoading}
                  onClick={handleLoadmore}
                >
                  <span className="js-link__text">Load More</span>
                </button>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </LastArticleStyles>
  );
}

export default LatestNews;
