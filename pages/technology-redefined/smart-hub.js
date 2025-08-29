import SmartHubPage from "../../components/project-landing/SmartHub";
import ClientRedis from "../../redis/index";
import KeyCache from "../../constant/cache";
import {getSmartHubApi, getNewsletterApi} from "../../api";
import axios from "axios";

function SmartHub(props) {
  return <SmartHubPage {...props} />;
}
export const getServerSideProps = async () => {
  let dataProps = {};
  const dataCache = await ClientRedis.get(KeyCache.smartHub);
  if (dataCache) {
    dataProps = JSON.parse(dataCache);
    return {
      props: dataProps,
    };
  }

  try {
    const [smartHub, newsletterSection] = await Promise.all([
      getSmartHubApi(),
      getNewsletterApi(),
    ]);
    dataProps = {
      smartHubData: smartHub.data.data,
      newsletterSectionData: newsletterSection.data.data,
    };
    ClientRedis.set(KeyCache.smartHub, JSON.stringify(dataProps));
    return {
      props: dataProps,
    };
  }
  catch (e) {
    return {
      props: {
        notFound: true
      },
    }
  }
};
export default SmartHub;
