import axios from "axios";
import Config from "../config/index";

const urls = {
  getCareerModule: `${Config.DOMAIN_API}/careers-module?populate=deep`,
};

export const getCareerModuleApi = () => {
  return axios.get(urls.getCareerModule);
};
