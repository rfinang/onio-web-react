import React from "react";
import { getPrivacyPolicyApi } from "../api";
import ClientRedis from '../redis/index'
import KeyCache from '../constant/cache';
import PrivacyPolicyPage from "../components/privacy-policy";

function PrivacyPolicy(props) {
  return <PrivacyPolicyPage {...props} />;
}
export const getServerSideProps = async () => {
  let dataProps = {};
  const dataCache = await ClientRedis.get(KeyCache.privacyPolicy)
  if (dataCache) {
    dataProps = JSON.parse(dataCache);
    return {
      props: dataProps
    };
  }
  const privacyPolicy = await getPrivacyPolicyApi();
  dataProps =  {
    privacyPolicyData: privacyPolicy.data.data,
  };

  ClientRedis.set(KeyCache.privacyPolicy, JSON.stringify(dataProps))

  return {
    props: dataProps
  };
};
export default PrivacyPolicy;
