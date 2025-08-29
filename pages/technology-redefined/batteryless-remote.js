import { getSmartRemoteLandingApi } from "../../api/project-landing";
import BatterylessRemotePage from "../../components/project-landing/BatterylessRemote";
import ClientRedis from "../../redis/index";
import KeyCache from "../../constant/cache";
import {getNewsletterApi} from "../../api";

function BatterylessRemote(props) {
  return <BatterylessRemotePage {...props} />;
}
export const getServerSideProps = async () => {
  let dataProps = {};
  const dataCache = await ClientRedis.get(KeyCache.batterylessRemote);
  if (dataCache) {
    dataProps = JSON.parse(dataCache);
    return {
      props: dataProps,
    };
  }
  const [batterylessRemote, newsletterSection] = await Promise.all([
    getSmartRemoteLandingApi(),
    getNewsletterApi(),
  ]);
  dataProps = {
    batterylessRemoteData: batterylessRemote.data.data,
    newsletterSectionData: newsletterSection.data.data,
  };
  ClientRedis.set(KeyCache.batterylessRemote, JSON.stringify(dataProps));
  return {
    props: dataProps,
  };
};
export default BatterylessRemote;
