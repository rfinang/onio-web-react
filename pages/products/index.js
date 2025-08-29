import { getOneChipPossibilitiesApi, getProductLandingApi, getTechnologyRedefinedApi, getLowerBomApi } from "../../api";
import ClientRedis from '../../redis/index'
import KeyCache from '../../constant/cache';

import ProductLandingPage from "../../components/product/ProductLanding";
import {shuffle} from "lodash";
function ProductsLanding(props) {
  return <ProductLandingPage {...props} />;
}
export const getServerSideProps = async () => {
  let dataProps = {};
  const dataCache = await ClientRedis.get(KeyCache.productLanding)
  // const dataCache = null;
  if (dataCache) {
    dataProps = JSON.parse(dataCache);
  } else {
    const [productLanding, oneChipData, homeProject, lowerBom] = await Promise.all([
      getProductLandingApi(),
      getOneChipPossibilitiesApi(),
      getTechnologyRedefinedApi(),
      getLowerBomApi(),
    ]);

    dataProps = {
      lowerBomData: lowerBom.data.data,
      homeProject: homeProject.data.data,
      oneChipData: oneChipData.data.data,
      productLandingData: productLanding.data.data,
    }

    ClientRedis.set(KeyCache.productLanding, JSON.stringify(dataProps))
  }

  const {oneChipData: oneChip} = dataProps;
  const { endless_possiblities_item: videos, random_ordering } = oneChip;
  let videoList = videos;
  if (random_ordering) {
    videoList = shuffle(videos);
  }

  return {
    props: {
      ...dataProps,
      oneChipData: {
        ...oneChip,
        endless_possiblities_item: videoList
      }
    }
  };
};
export default ProductsLanding;
