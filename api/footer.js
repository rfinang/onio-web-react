import axios from "axios";
import Config from '../config/index';
const urls = {
  getFooter: `${Config.HOST_API}/footer`
}

export const getFooterApi = () => {
  return axios.get(urls.getFooter);
}