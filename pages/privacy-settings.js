import React from "react";
import ClientRedis from '../redis/index'
import KeyCache from '../constant/cache';
import { getPrivacySettingsApi } from "../api";

import PrivacySettingsPage from "../components/privacy-policy/PrivacySettings";

function PrivacySettings(props) {
  return <PrivacySettingsPage {...props} />;
}
export const getServerSideProps = async () => {
  let dataProps = {};
  const dataCache = await ClientRedis.get(KeyCache.privacySetting)
  if (dataCache) {
    dataProps = JSON.parse(dataCache);
    return {
      props: dataProps
    };
  }

  const privacySettings = await getPrivacySettingsApi();

  dataProps =  {
    privacySettingsData: privacySettings.data.data,
  };

  ClientRedis.set(KeyCache.privacySetting, JSON.stringify(dataProps))
  return {
    props: dataProps
  };
};
export default PrivacySettings;
