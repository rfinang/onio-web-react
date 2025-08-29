import React from "react";
import CareerDetailsPage from "../../components/career/CareerDetails";
import { getCareersToStrapiApi } from "../../api";
import ClientRedis from '../../redis/index'
import KeyCache from '../../constant/cache'

function CareerDetails(props) {
  return <CareerDetailsPage {...props} />;
}
export const getServerSideProps = async (props) => {
  const slug = props.query.slug.replace(".html", "");
  let careersDetailsData;
  let cacheKey = KeyCache.career + '--' + slug;
  const dataCache = await ClientRedis.get(cacheKey)
  if (dataCache) {
    careersDetailsData = JSON.parse(dataCache);
  } else {
    const careersDetails = await getCareersToStrapiApi({
      filters: {
        slug:{"$eq":slug}
      }
    }).catch((e) => {
      return false;
    });

    careersDetailsData = careersDetails?.data.data;
    ClientRedis.set(cacheKey, JSON.stringify(careersDetailsData))
  }

  if (!careersDetailsData) {
    return {
      props: {
        notFound: true,
      },
    };
  }

  return {
    props: {
      careersDetailsData,
    },
  };
};
export default CareerDetails;
