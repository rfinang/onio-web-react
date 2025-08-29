import axios from "axios";
import Config from "../config/index";

const urls = {
  getProductLanding: `${Config.DOMAIN_API}/product-landing?populate=deep`,
  getProductPage: `${Config.DOMAIN_API}/products?populate=deep`,
};

export const getProductLandingApi = () => {
  return axios.get(urls.getProductLanding);
};
export const getProductPageApi = (params = null) => {
  return axios.get(urls.getProductPage, { params });
};
