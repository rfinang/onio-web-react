import axios from "axios";
import Config from "../config/index";
import qs from "qs";

const urls = {
    getNewsLanding: `${Config.DOMAIN_API}/news-landing?populate=deep`,
    getNewsPost: `${Config.HOST_API}/articles?populate=deep`,
    getNewsTotal: `${Config.HOST_API}/articles/count?populate=deep`,
    getNewsDetails: `${Config.DOMAIN_API}/articles/slug/`,
};

export const getNewsLandingApi = (params = {}) => {
    return axios.get(urls.getNewsLanding, {
        params: {
            "populate": "deep",
            ...params
        }
    });
};
export const getNewsPostApi = (params = {}) => {
    return axios.get(urls.getNewsPost, {
        params: {
            populate: 'deep,3',
            ...params
        },
        paramsSerializer: params => {
            return qs.stringify(params)
        }
    });
};

export const getNewsDetailsApi = (slug) => {
    return axios.get(urls.getNewsDetails + slug + "?populate=deep");
};
