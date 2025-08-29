import axios from "axios";
import Config from "../config/index";

const urls = {
  getPopularSearch: `${Config.HOST_API}/popular-search/get-keyword`,
  getSearchArticles: `${Config.HOST_API}/blog/search`,
  getSearchNews: `${Config.HOST_API}/articles/search`,
  getSearchProduct: `${Config.HOST_API}/search-data/products`,
  getSearchGeneral: `${Config.HOST_API}/search-data/general`,
};

export const getPopularSearchApi = (params = null) => {
  return axios.get(urls.getPopularSearch, { params });
};
export const getSearchArticlesApi = (params = null) => {
  return axios.get(urls.getSearchArticles, { params });
};
export const getSearchNewsApi = (params = null) => {
  return axios.get(urls.getSearchNews, { params });
};

export const getSearchProductApi = (params = null) => {
  return axios.get(urls.getSearchProduct, { params });
};

export const getSearchGeneralApi = (params = null) => {
  return axios.get(urls.getSearchGeneral, { params });
};
