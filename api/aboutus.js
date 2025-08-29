import axios from "axios";
import Config from "../config/index";

const urls = {
  getAboutus: `${Config.DOMAIN_API}/about-us?populate=deep`,
};

export const getAboutusApi = (params = null) => {
  return axios.get(urls.getAboutus, { params });
};
