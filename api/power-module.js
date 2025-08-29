import axios from "axios";
import Config from "../config/index";

const urls = {
  getPowerZero: `${Config.DOMAIN_API}/the-power-of-zero-module?populate=deep`,
};

export const getPowerZeroApi = () => {
  return axios.get(urls.getPowerZero);
};
