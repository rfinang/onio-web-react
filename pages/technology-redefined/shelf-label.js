import ShelfLabelPage from "../../components/project-landing/ShelfLabel";
import ClientRedis from "../../redis/index";
import KeyCache from "../../constant/cache";
import {getShelfLabelApi, getNewsletterApi} from "../../api";

function SmartHub(props) {
  return <ShelfLabelPage {...props} />;
}
export const getServerSideProps = async () => {
  let dataProps = {};
  const dataCache = await ClientRedis.get(KeyCache.shelfLabel);
  if (dataCache) {
    dataProps = JSON.parse(dataCache);
    return {
      props: dataProps,
    };
  }

  try {
    const [shelfLabel, newsletterSection] = await Promise.all([
      getShelfLabelApi(),
      getNewsletterApi(),
    ]);
    dataProps = {
      shelfLabelData: shelfLabel.data.data,
      newsletterSectionData: newsletterSection.data.data,
    };
    ClientRedis.set(KeyCache.shelfLabel, JSON.stringify(dataProps));

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
