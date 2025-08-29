import axios from "axios";
import Config from "../config/index";

const urls = {
  getPrivacyPolicy: `${Config.DOMAIN_API}/privacy-policy?populate=deep`,
  getPrivacySettings: `${Config.DOMAIN_API}/privacy-setting?populate=deep`,
};

export const getPrivacyPolicyApi = () => {
  return axios.get(urls.getPrivacyPolicy);
};
export const getPrivacySettingsApi = () => {
  return axios.get(urls.getPrivacySettings);
};
