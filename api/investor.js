import axios from "axios";
import Config from "../config/index";

const urls = {
  getInvestor: `${Config.DOMAIN_API}/investor?populate=deep`,
};

export const getInvestorApi = () => {
  return axios.get(urls.getInvestor);
};
