import axios from 'axios';
import Config from "../../../config";
import ClientRedis from "../../../redis";
import KeyCache from "../../../constant/cache";
import qs from "qs";
import dayjs from "dayjs";
let utc = require('dayjs/plugin/utc');
let timezone = require('dayjs/plugin/timezone');
dayjs.extend(utc);
dayjs.extend(timezone);

const urls = {
    getNewsPost: `${Config.DOMAIN_API}/articles?populate=deep`,
};

export default async function handler(req, res) {
    if (req.method === 'GET') {
        const {_limit, _sort, _start} = req.query;
        const currentDate = dayjs().tz(Config.SERVER_TIMEZONE).format('YYYY-MM-DD');
        let params = qs.parse(req.query);
        params.filters = {
            ...params.filters,
            "publish_date": {
                "$lte": currentDate
            }
        }
        let query = {
            ...params,
            sort: [_sort],
            pagination: {
                "limit": _limit,
                "start": _start ? _start : 0
            }
        }

        const cacheKey = KeyCache.news + '--' +  qs.stringify(req.query) + "-" + currentDate ;
        const dataCache = await ClientRedis.get(cacheKey)
        if (dataCache) {
            return res.status(200).send(dataCache);
        } else {
            let existKeys = await ClientRedis.keys(KeyCache.news + '--' + qs.stringify(req.query) + '*')
            let pipeline = ClientRedis.pipeline();
            existKeys.forEach(function (key) {
                pipeline.del(key);
            });
            await pipeline.exec();
            let axios_res = await axios.get(urls.getNewsPost, {params: query,
                paramsSerializer:params => qs.stringify(params)
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
