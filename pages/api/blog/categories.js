import axios from 'axios';
import Config from "../../../config";
import ClientRedis from "../../../redis";
import KeyCache from "../../../constant/cache";
import dayjs from "dayjs";
import qs from "qs";
let utc = require('dayjs/plugin/utc');
dayjs.extend(utc);

const urls = {
    getBlogCategories: `${Config.DOMAIN_API}/categories`,
};

export default async function handler(req, res) {
    if (req.method === 'GET') {
        let query = {
            ...qs.parse(req.query),
            populate: [
                'seo',
                'seo.share_image',
                'section_related',
                'section_related.links',
                'section_related.image',
            ]
        }
        const cacheKey = KeyCache.blogCategories + '--' + qs.stringify(req.query);

        const dataCache = await ClientRedis.get(cacheKey)
        if (dataCache) {
            return res.status(200).send(dataCache);
        } else {
            let axios_res = await axios.get(urls.getBlogCategories, {
                params: query,
                paramsSerializer: params => {
                    return qs.stringify(params)
                }
            });
            if (axios_res.status === 200 && axios_res.data) {
                ClientRedis.set(cacheKey, JSON.stringify(axios_res.data));
            }
            return res.status(axios_res.status).send(axios_res.data)
        }
    } else {
        return res.status(405).send();
    }

}
