import _ from "lodash";
import { getNewsLandingApi, getNewsPostApi } from "../../api";
import NewsLandingPage from "../../components/news";
import ClientRedis from "../../redis";
import KeyCache from "../../constant/cache";

function index(props) {
  return <NewsLandingPage {...props} />;
}
export const getServerSideProps = async () => {
  let cacheProps = {};
  const dataCache = await ClientRedis.get(KeyCache.newsLanding)
  if (dataCache) {
    cacheProps = JSON.parse(dataCache);
  } else {
    const newsLanding = await getNewsLandingApi();

    cacheProps = {
      newsLandingData: newsLanding.data.data,
    }
    ClientRedis.set(KeyCache.newsLanding,JSON.stringify(cacheProps))
  }

  const newsPost = await getNewsPostApi({
    _limit: 6,
    _sort: "publish_date:DESC",
  })


  const newsPostArr = _.get(newsPost, "data.data", []);
  const newsTotalData = _.get(newsPost, "data.meta.pagination.total", 0);
  const newsPostData = newsPostArr.map((item) => {
    return {
      id: item.id,
      title: item.title,
      slug: item.slug,
      publish_date: item.publish_date,
      thumbnail: item.thumbnail,
    };
  });
  return {
    props: {
      ...cacheProps,
      newsPostData: newsPostData,
      newsTotalData: newsTotalData,
    },
  };
};
export default index;
