import axios from 'axios';
import Config from "../../../config";
import ClientRedis from "../../../redis";
import KeyCache from "../../../constant/cache";
import dayjs from "dayjs";
let utc = require('dayjs/plugin/utc');
dayjs.extend(utc);

const urls = {
    getBlogTotal: `${Config.DOMAIN_API}/blog/count`,
};

export default async function handler(req, res) {
    if (req.method === 'GET') {
        let query_minute = (Math.floor(dayjs().minute()/30) * 30).toString().padStart(2, '0');
        let format = 'YYYY-MM-DD\THH:' + query_minute + ':00.000\Z';
        let query = {
            ...req.query,
            'publish_date_lte': dayjs().utc().format(format)
        }
        const cacheKey = KeyCache.blogCount + '--' + new URLSearchParams(query).toString();

        const dataCache = await ClientRedis.get(cacheKey)
        if (dataCache) {
            return res.status(200).send(dataCache);
        } else {
            let existKeys = await ClientRedis.keys(KeyCache.blogCount + '--' + new URLSearchParams(req.query) + '*')
            let pipeline = ClientRedis.pipeline();
            existKeys.forEach(function (key) {
                pipeline.del(key);
            });
            await pipeline.exec();
            let axios_res = await axios.get(urls.getBlogTotal, {params: query});
            if (axios_res.status === 200 && axios_res.data) {
                ClientRedis.set(cacheKey, JSON.stringify(axios_res.data));
            }
            return res.status(axios_res.status).send(axios_res.data)
        }
    } else {
        return res.status(405).send();
    }

}
