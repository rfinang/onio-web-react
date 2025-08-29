import axios from "axios";
import Config from '../../config/index';
import KeyCache from "../../constant/cache";
import ClientRedis from "../../redis";

const urls = {
  getGlobal: `${Config.DOMAIN_API}/global?populate=deep`
}

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const cacheKey = KeyCache.global;
    const dataCache = await ClientRedis.get(cacheKey)
    if (dataCache) {
      return res.status(200).send(dataCache);
    } else {
      let axios_res = await axios.get(urls.getGlobal);
      if (axios_res.status === 200 && axios_res.data) {
        ClientRedis.set(cacheKey, JSON.stringify(axios_res.data));
      }
      return res.status(axios_res.status).send(axios_res.data)
    }
  } else {
    return res.status(405).send();
  }

}
