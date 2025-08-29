import ArticlePage from "../../components/article";
import {
  getBlogApi,
  getBlogCategoriesApi,
  getBlogLandingApi,
  getTechnologyRedefinedApi,
} from "../../api";
import { blogItemsGenerate } from "../../helper";
import ClientRedis from "../../redis";
import KeyCache from "../../constant/cache";

function ArticleLanding(props) {
  return <ArticlePage {...props} />;
}

export const getServerSideProps = async () => {
    let cacheProps = {};
    const dataCache = await ClientRedis.get(KeyCache.blogLanding)
    if (dataCache) {
        cacheProps = JSON.parse(dataCache);
    } else {
        const [blogLanding, homeProject] = await Promise.all(
            [
                getBlogLandingApi(),
                getTechnologyRedefinedApi()
            ]
        );

        cacheProps = {
            blogLandingData: blogLanding.data.data,
            homeProjectData: homeProject.data.data,
        }
        ClientRedis.set(KeyCache.blogLanding, JSON.stringify(cacheProps))
    }

  const [blog, blogCategory, blogFeatured] = await Promise.all(
    [
      getBlogApi({
          pagination: {
              page: 1,
              pageSize: 8
          },
          sort: "publish_date:DESC",
      }),
      getBlogCategoriesApi(),
      getBlogApi({
          filters: {
              is_feature: {
                  $eq: true
              }
          },
          pagination: {
              page: 1,
              pageSize: 4
          },
          sort: "publish_date:DESC",
      }),
    ]
  );

  const blogFeaturedPost = blogItemsGenerate(blogFeatured);
  const lastArticlePost = blogItemsGenerate(blog);

  return {
    props: {
      ...cacheProps,
      blogData: lastArticlePost,
      blogCategoryData: blogCategory.data.data,
      blogFeaturedData: blogFeaturedPost,
      blogToTal: blog.data?.meta?.pagination?.total ?? 0,
    },
  };
};
export default ArticleLanding;
