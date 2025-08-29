import { useEffect, useState } from "react";
import { getBlogApi } from "../../../api";
import Loading from "../../common/Loading";
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
      <div className="lastArticles bg-wild">
        <div className="container pb-sm-5 pb-3">
          <div className="row mb-4">
            {blogList.map((item, index) => {
              const { id } = item;

              return (
                <div
                  key={id}
                  className="col-sm-6 col-12 js-animation--fade"
                  data-screen-offset={index % 2 === 0 ? 0 : 0.15}
                >
                  <Post data={item} />
                </div>
              );
            })}
          </div>
          {blogList.length > 0 && blogList.length < blogToTal ? (
            <div className="row justify-content-center">
              <div className="col-md-auto col-12">
                <button
                  className="btn btn--large btn--bg btn--bg--silver js-btn-load js-link--btn w-100 js-animation--fade"
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

export default CatArticles;
