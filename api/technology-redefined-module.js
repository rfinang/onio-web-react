import axios from "axios";
import Config from '../config/index';

const urls = {
  getTechnologyRedefined: `${Config.DOMAIN_API}/technology-redefined-module?populate=deep`
}

export const getTechnologyRedefinedApi = () => {
  return axios.get(urls.getTechnologyRedefined);
}


