import axios from "axios";
import Config from "../config/index";
const urls = {
  postNewsletter: `/api/newsletter-form-submissions`,
  getNewsletter: `${Config.DOMAIN_API}/newsletter-module?populate=deep`,
};

export const postNewsletterApi = (data = null) => {
  return axios.post(urls.postNewsletter, data);
};
export const getNewsletterApi = () => {
  return axios.get(urls.getNewsletter);
};
