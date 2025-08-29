import axios from 'axios';
import Config from "../../../config";
import requestIp from 'request-ip';
import {checkKeywordSearch} from "../../../helper";

const urls = {
    getSearchGeneral: `${Config.DOMAIN_API}/search-data/general`,
};

export default async function handler(req, res) {
    const detectedIp = requestIp.getClientIp(req)
    console.log("ip", detectedIp);
    if (detectedIp == '10.244.3.72') {
        return res.status(405).send();
    }

    if (checkKeywordSearch(req.query.k) === false) {
        return res.status(405).send();
    }

    if (req.method === 'GET') {
        let axios_res = await axios.get(urls.getSearchGeneral, {params: req.query});
        return res.status(axios_res.status).send(axios_res.data)
    } else {
        return res.status(405).send();
    }

}
