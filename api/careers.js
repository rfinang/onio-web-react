import axios from "axios";
import qs from 'qs'
import Config from "../config/index";
const urls = {
  getCareers: `${Config.DOMAIN_API}/careers`,
  getCareerLanding: `${Config.DOMAIN_API}/career-landing`,
  getWorkLocations: `${Config.DOMAIN_API}/work-locations`,
};

export const getCareersToStrapiApi = (params = null) => {
  return axios.get(urls.getCareers, {
    params: {
      populate: 'deep,3',
      ...params
    },
    paramsSerializer: params => qs.stringify(params)
  });
};
export const getCareerLandingApi = (params = null) => {
  return axios.get(urls.getCareerLanding, {
    params: {
      populate: 'deep',
      ...params
    }
  });
};
export const getWorkLocationsApi = (params = null) => {
  return axios.get(urls.getWorkLocations, {
    params: {
      populate: 'deep',
      ...params
    }
  });
};
