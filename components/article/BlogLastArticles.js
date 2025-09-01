import { useEffect, useState } from "react";

import { getBlogApi } from "../../api";
import Loading from "../common/Loading";
import { Button } from "../ui";
import { LastArticleStyles } from "../styles/blog/LastArticles";
import Post from "./Post";
import { blogItemsGenerate } from "../../helper";

import ImageLazy from "../helper/image-lazy/image-lazy";
function BlogLastArticles({ blogData, blogToTal }) {
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
      sort: "publish_date:DESC"
    });
    const blogPost = blogItemsGenerate(res);
    setQueryStart(queryStart + 8);
    setBlogList([...blogList, ...blogPost]);

    new ImageLazy();
    setIsLoading(false);
  };

  return (
    <LastArticleStyles>
      {isLoading && <Loading />}
      <div className="lastArticles bg-wild">
        <div className="container pb-sm-5 pb-3">
          <div className="row mb-4">
            {blogList.map((item, index) => {
              const { id } = item;

              return (
                <div
                  key={id}
                  className="col-sm-6 col-12  js-animation--fade"
                  data-offset={index % 2 === 1 ? ".15" : 0}
                >
                  <Post data={item} />
                </div>
              );
            })}
          </div>
          {blogList.length < blogToTal ? (
            <div className="row justify-content-center">
              <div className="col-md-auto col-12 js-animation--fade">
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
        </div>
      </div>
    </LastArticleStyles>
  );
}

export default BlogLastArticles;
