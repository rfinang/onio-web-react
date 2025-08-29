import axios from "axios";
import Config from "../config/index";
import qs from "qs";

const urls = {
  getBlog: `${Config.HOST_API}/blogs`,
  getBlogLanding: `${Config.DOMAIN_API}/blog-landing?populate=deep`,
  getBlogDetail: `${Config.DOMAIN_API}/blogs/slug/`,
  getBlogCategories: `${Config.HOST_API}/categories`,
};

export const getBlogApi = (params = null) => {
  // Always populate thumbnail and other media fields for blogs
  const enhancedParams = {
    ...params,
    populate: params?.populate || ['thumbnail', 'feature_image', 'categories', 'writer']
  };
  
  return axios.get(urls.getBlog, {
    params: enhancedParams,
    paramsSerializer: params => {
      return qs.stringify(params)
    }
  });
};
export const getBlogLandingApi = (params = null) => {
  return axios.get(urls.getBlogLanding, { params });
};
export const getBlogCategoriesApi = (params = null) => {
  return axios.get(urls.getBlogCategories, {
    params,
    paramsSerializer: params => {
      return qs.stringify(params)
    }
  });
};

export const getBlogDetailApi = (slug) => {
  return axios.get(urls.getBlogDetail + slug, {
    params: {
      populate: [
        'feature_image',
        'seo',
        'seo.share_image',
        'categories',
        'writer',
        'writer.avatar',
        'writer.social',
        'thumbnail',
        'mobile_feature_image'
      ]
    }
  });
};
