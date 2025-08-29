import axios from 'axios';
import Config from "../../../config";
import ClientRedis from "../../../redis";
import KeyCache from "../../../constant/cache";
import dayjs from "dayjs";
let utc = require('dayjs/plugin/utc');
let timezone = require('dayjs/plugin/timezone');
dayjs.extend(utc);
dayjs.extend(timezone);

const urls = {
    getNewsTotal: `${Config.DOMAIN_API}/articles/count`,
};

export default async function handler(req, res) {
    if (req.method === 'GET') {
        let query = {
            ...req.query,
            'publish_date_lte': dayjs().tz(Config.SERVER_TIMEZONE).format('YYYY-MM-DD')
        }
        const cacheKey = KeyCache.newsCount + '--' + new URLSearchParams(query).toString();
        const dataCache = await ClientRedis.get(cacheKey)
        if (dataCache) {
            return res.status(200).send(dataCache);
        } else {
            let existKeys = await ClientRedis.keys(KeyCache.newsCount + '--' + new URLSearchParams(req.query) + '*')
            let pipeline = ClientRedis.pipeline();
            existKeys.forEach(function (key) {
                pipeline.del(key);
            });
            await pipeline.exec();
            let axios_res = await axios.get(urls.getNewsTotal, {params: query});
            if (axios_res.status === 200 && axios_res.data) {
                ClientRedis.set(cacheKey, JSON.stringify(axios_res.data));
            }
            return res.status(axios_res.status).send(axios_res.data)
        }
    } else {
        return res.status(405).send();
    }

}
