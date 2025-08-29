import axios from "axios";
import Config from '../config/index';

const urls = {
  getGlobal: `${Config.HOST_API}/global`
}

export const getGlobalApi = () => {
  return axios.get(urls.getGlobal);
}