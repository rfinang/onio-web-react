import axios from "axios";
import Config from '../config/index';

const urls = {
  getLowerBom: `${Config.DOMAIN_API}/lower-bom-module?populate=deep`
}

export const getLowerBomApi = () => {
  return axios.get(urls.getLowerBom);
}



