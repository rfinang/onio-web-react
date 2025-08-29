import axios from "axios";
import Config from "../config/index";
import qs from "qs";

const urls = {
  getWriters: `${Config.DOMAIN_API}/writers`,
};

export const getWritersApi = (params = null) => {
  return axios.get(urls.getWriters, {
    params: {
      populate: 'deep',
      ...params
    },
    paramsSerializer: params => {
      return qs.stringify(params)
    }
  });
};
