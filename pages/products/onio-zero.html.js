import React from "react";
import {
  getProductPageApi,
  getTechnologyRedefinedApi,
  getLowerBomApi,
  getContactApi, getNewsletterApi,
} from "../../api";

import ProductPage from "../../components/product/ProductPage";
import ClientRedis from "../../redis";
import KeyCache from "../../constant/cache";

function OnioZero(props) {
  return <ProductPage {...props} />;
}
export const getServerSideProps = async () => {
  let props = {};
  const dataCache = await ClientRedis.get(KeyCache.onioZero);
  // const dataCache = null;
  if (dataCache) {
    props = JSON.parse(dataCache);
    return {
      props: props,
    };
  }

  const [onioZero, homeProject, lowerBom, newsletterSection] = await Promise.all([
    getProductPageApi({
      slug: "onio-zero",
    }),
    getTechnologyRedefinedApi(),
    getLowerBomApi(),
    getNewsletterApi(),
  ]);

  props = {
    onioZeroData: onioZero.data.data,
    homeProject: homeProject.data.data,
    lowerBomData: lowerBom.data.data,
    newsletterSectionData: newsletterSection.data.data,
  };
  ClientRedis.set(KeyCache.onioZero, JSON.stringify(props));

  return {
    props: props,
  };
};
export default OnioZero;
