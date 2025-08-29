import axios from "axios";
import Config from "../config/index";

const urls = {
  getProjectLanding: `${Config.DOMAIN_API}/turnkey-project-landing?populate=deep`,
  getSmartRemoteLanding: `${Config.DOMAIN_API}/turnkey-smart-remote?populate=deep`,
  getSmartHub: `${Config.DOMAIN_API}/smart-hub?populate=deep`,
  getShelfLabel: `${Config.DOMAIN_API}/shelf-label?populate=deep`,

};

export const getProjectLandingApi = () => {
  return axios.get(urls.getProjectLanding);
};
export const getSmartRemoteLandingApi = () => {
  return axios.get(urls.getSmartRemoteLanding);
};
export const getSmartHubApi = () => {
  return axios.get(urls.getSmartHub);
};
export const getShelfLabelApi = () => {
  return axios.get(urls.getShelfLabel);
};