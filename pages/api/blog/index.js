import axios from 'axios';
import Config from "../../../config";
import ClientRedis from "../../../redis";
import KeyCache from "../../../constant/cache";
import dayjs from "dayjs";
import qs from "qs";
let utc = require('dayjs/plugin/utc');
let timezone = require('dayjs/plugin/timezone');
dayjs.extend(utc);
dayjs.extend(timezone);

const urls = {
    getBlog: `${Config.DOMAIN_API}/blogs`,
};

export default async function handler(req, res) {
    if (req.method === 'GET') {
        let query_minute = (Math.floor(dayjs().minute()/30) * 30).toString().padStart(2, '0');
        let format = 'YYYY-MM-DD\THH:' + query_minute + ':00.000\Z';
        let query = {
            ...qs.parse(req.query),
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

        const currentDate = dayjs().tz(Config.SERVER_TIMEZONE).format(format);

        query.filters = {
            ...query.filters,
            publish_date: {
                $lte: currentDate
            }
        }
        const cacheKey = KeyCache.blogList + '--' + qs.stringify(req.query) + currentDate;

        const dataCache = await ClientRedis.get(cacheKey)
        if (dataCache) {
            return res.status(200).send(dataCache);
        } else {
            let existKeys = await ClientRedis.keys(KeyCache.blogList + '--' + qs.stringify(req.query) + '*')
            let pipeline = ClientRedis.pipeline();
            existKeys.forEach(function (key) {
                pipeline.del(key);
            });
            await pipeline.exec();
            let axios_res = await axios.get(urls.getBlog, {
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
