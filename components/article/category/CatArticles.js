import { useEffect, useState } from "react";
import { getBlogApi } from "../../../api";
import Loading from "../../common/Loading";
import { Button, Container } from "../../ui";
import { LastArticleStyles } from "../../styles/blog/LastArticles";
import Post from "../Post";

import { blogItemsGenerate } from "../../../helper";
import ImageLazy from "../../helper/image-lazy/image-lazy";
function CatArticles({ blogData, blogToTal, catID }) {
  if (!blogData) return null;
  const [blogList, setBlogList] = useState([]);

  const [queryStart, setQueryStart] = useState(8);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (blogData) {
      setBlogList(blogData);
    }
    setQueryStart(8);
  }, [blogData]);
  const handleLoadmore = async () => {
    setIsLoading(true);
    const res = await getBlogApi({
      pagination: {
        limit: 8,
        start: queryStart
      },
      sort: "publish_date:DESC",
      filters: {
        categories: {
          id: {
            $eq: catID
          }
        }
      }
    });
    setQueryStart(queryStart + 8);
    const blogPost = blogItemsGenerate(res);
    setBlogList([...blogList, ...blogPost]);
    new ImageLazy();
    setIsLoading(false);
  };

  return (
    <LastArticleStyles>
      {isLoading && <Loading />}
      <div className="lastArticles bg-background">
        <Container className="pb-sm-5 pb-3">
          <div className="grid sm:grid-cols-2 gap-lg mb-4">
            {blogList.map((item, index) => {
              const { id } = item;

              return (
                <div key={id} className="js-animation--fade" data-screen-offset={index % 2 === 0 ? 0 : 0.15}>
                  <Post data={item} />
                </div>
              );
            })}
          </div>
          {blogList.length > 0 && blogList.length < blogToTal ? (
            <div className="grid justify-center">
              <div>
                <Button
                  variant="secondary"
                  size="lg"
                  fullWidth={true}
                  className="js-btn-load js-link--btn js-animation--fade"
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

export default CatArticles;
