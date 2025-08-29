import {getBlogApi, getBlogDetailApi, getNewsPostApi} from "../../api";
import ArticleDetailsPage from "../../components/article/ArticleDetails";
import { blogItemsGenerate } from "../../helper";
import KeyCache from "../../constant/cache";
import ClientRedis from "../../redis";
function ArticleDetails(props) {
  return <ArticleDetailsPage {...props} />;
}
export const getServerSideProps = async (props) => {
  const slug = props.query.slug.replace(".html", "");

  let blogDetailsData;
  let cacheKey = KeyCache.blogDetail + '--' + slug;
  const dataCache = await ClientRedis.get(cacheKey)
  if (dataCache) {
    blogDetailsData = JSON.parse(dataCache);
  } else {
    const blogDetails = await getBlogDetailApi(slug).catch((e) => {
      return false;
    });
    blogDetailsData = blogDetails?.data;
    ClientRedis.set(cacheKey, JSON.stringify(blogDetailsData))
  }

  if (!blogDetailsData || !blogDetailsData.publishedAt) {
    return {
      props: {
        notFound: true,
      },
    };
  }

  const categories = blogDetailsData.categories ? blogDetailsData.categories.map((item) => item.id) : [];

  const [authorPostData, relatedPostData] = await Promise.all([
    getBlogApi({
      filters: {
        writer: {
          id: {
            $eq: blogDetailsData.writer.id
          }
        }
      },
      pagination: {
        limit: 2,
      },
      sort: "publish_date:DESC",
    }),
    getBlogApi({
      filters: {
        categories: {
          id: {
            $in: [...categories],
          }
        }
      },
      pagination: {
        limit: 4,
      },
      sort: "publish_date:DESC"
    }),
  ]);

  const authorPost = blogItemsGenerate(authorPostData);
  const relatedPost = blogItemsGenerate(relatedPostData);

  return {
    props: {
      blogDetailsData,
      authorPost: authorPost,
      relatedPost: relatedPost,
    },
  };
};
export default ArticleDetails;
