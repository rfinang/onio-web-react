import axios from "axios";
import Config from '../config/index';

const urls = {
  getHomepage: `${Config.DOMAIN_API}/homepage?populate=deep`
}

export const getHomeApi = () => {
  return axios.get(urls.getHomepage);
}


