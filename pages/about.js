import AboutPage from "../components/about";
import ClientRedis from "../redis/index";
import KeyCache from "../constant/cache";

import {
  getPowerZeroApi,
  getBlogApi,
  getAboutusApi,
  getCareerModuleApi,
  getCareersToStrapiApi,
  getContactApi,
  getNewsPostApi, getNewsletterApi,
} from "../api";

function Aboutus(props) {
  return <AboutPage {...props} />;
}

export const getServerSideProps = async () => {
  let dataProps = {};
  const dataCache = await ClientRedis.get(KeyCache.about);
  if (dataCache) {
    dataProps = JSON.parse(dataCache);
    return {
      props: dataProps,
    };
  }

  const [dataPower, newsData, aboutUs, careerModule, careers, newsletterSection] = await Promise.all([
    getPowerZeroApi(),
    getNewsPostApi({ _limit: 4, _sort: "publish_date:DESC",}),
    getAboutusApi(),
    getCareerModuleApi(),
    getCareersToStrapiApi({
      sort:["publishedAt:DESC"],
      pagination: {limit: 4}
    }),
    getNewsletterApi(),
  ]);

  dataProps = {
    dataPower: dataPower.data.data,
    newsPostData: newsData.data.data,
    aboutUsData: aboutUs.data.data,
    careerModuleData: careerModule.data.data,
    careersData: careers.data.data,
    newsletterSectionData: newsletterSection.data.data,
  };

  ClientRedis.set(KeyCache.about, JSON.stringify(dataProps));

  return {
    props: dataProps,
  };
};
export default Aboutus;
