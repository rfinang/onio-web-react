import React from "react";
import {getCareersToStrapiApi, getNewsPostApi} from "../../api";
import NewsDetailsPage from "../../components/news/NewsDetails";
import KeyCache from "../../constant/cache";
import ClientRedis from "../../redis";

function NewsDetails(props) {
  return <NewsDetailsPage {...props} />;
}
export const getServerSideProps = async (props) => {
  const slug = props.query.slug.replace(".html", "");

  let newsDetailsData;
  let cacheKey = KeyCache.news + '--' + slug;
  const dataCache = await ClientRedis.get(cacheKey)
  if (dataCache) {
    newsDetailsData = JSON.parse(dataCache);
  } else {
    const newsDetails = await getNewsPostApi({
      filters: {
        slug: {
          $eq: slug
        }
      },
    }).catch(() => {
      return false;
    });
    newsDetailsData = newsDetails?.data?.data;
    ClientRedis.set(cacheKey, JSON.stringify(newsDetailsData))
  }


  return {
    props: {
      newsDetailsData
    },
  };
};
export default NewsDetails;
