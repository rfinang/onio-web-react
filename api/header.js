import axios from "axios";
import Config from '../config/index';

const urls = {
  getHeader: `${Config.HOST_API}/header?populate=deep`
}

export const  getHeaderApi = () => {
  return axios.get(urls.getHeader);
}


