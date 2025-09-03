import { useEffect, useState } from "react";
import { getNewsPostApi } from "../../api";
import Loading from "../common/Loading";
import { Button, Typography, Container } from "../ui";

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
    const newsPostArr = res?.data?.data || [];
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
      <div className="lastArticles bg-background pb-3">
        <Container className="pb-1">
          <div className="grid mb-2 pb-1">
            <div className="col-12">
              <Typography
                variant="section-badge"
                className="mb-4 js-animation--fade"
                data-screen-offset=".8"
              >
                Latest News
              </Typography>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-lg mb-4">
            {newsList.map((item) => {
              const { id } = item;

              return (
                <div key={id} className="js-animation--fade" data-screen-offset=".9">
                  <Post data={item} />
                </div>
              );
            })}
          </div>
          {newsList.length < newsToTal ? (
            <div className="grid justify-center">
              <div className="js-animation--fade">
                <Button
                  variant="secondary"
                  size="lg"
                  fullWidth={true}
                  className="js-btn-load js-link--btn"
                  disabled={isLoading}
                  onClick={handleLoadmore}
                >
                  Load More
                </Button>
              </div>
            </div>
          ) : null}
        </Container>
      </div>
    </LastArticleStyles>
  );
}

export default LatestNews;
