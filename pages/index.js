import HomePage from "../components/home";
import ClientRedis from "../redis/index";
import KeyCache from "../constant/cache";
import {
  getHomeApi,
  getLowerBomApi,
  getOneChipPossibilitiesApi,
  getTechnologyRedefinedApi,
  getPowerZeroApi,
  getBlogApi,
  getContactApi, getNewsletterApi,
} from "../api";
import { blogItemsGenerate, extractDataFromAPI } from "../helper";
import {shuffle} from "lodash";

function Home(props) {
  return <HomePage {...props} />;
}

export const getServerSideProps = async (context) => {

  let cacheProps = {};
  const UA = context.req.headers['user-agent'];
  const isMobile = Boolean(UA.match(
      /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
  ))

  // const dataCache = await ClientRedis.get(KeyCache.home);
  const dataCache = null;
  if (dataCache) {
    cacheProps = JSON.parse(dataCache);
  } else {
    const [dataHome, dataPower, lowserBom, homeProject, oneChipData, newsletterSection] =
        await Promise.all([
          getHomeApi(),
          getPowerZeroApi(),
          getLowerBomApi(),
          getTechnologyRedefinedApi(),
          getOneChipPossibilitiesApi(),
          getNewsletterApi(),
        ]);


    cacheProps = {
      dataHome: dataHome.data.data,
      dataPower: dataPower.data.data,
      lowserBomData: lowserBom.data.data,
      homeProject: homeProject.data.data,
      oneChipData: oneChipData.data.data,
      newsletterSectionData: newsletterSection.data.data,
    };
    ClientRedis.set(KeyCache.home, JSON.stringify(cacheProps));
  }
  const blogData = await getBlogApi({
    pagination: {
      limit: 4,
    },
    sort: "publish_date:DESC"
  });

  const blogPost = blogItemsGenerate(blogData);

  const {oneChipData: oneChip} = cacheProps;
  const { endless_possiblities_item: videos, random_ordering } = oneChip;
  let videoList = videos;
  if (random_ordering) {
    videoList = shuffle(videos);
  }

  return {
    props: {
      ...cacheProps,
      blogData: blogPost,
      oneChipData: {
        ...oneChip,
        endless_possiblities_item: videoList
      },
    },
  };
};

export default Home;
