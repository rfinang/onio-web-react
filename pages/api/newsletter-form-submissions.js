import axios from 'axios';
import Config from "../../config";

const urls = {
    postNewsletter: `${Config.DOMAIN_API}/newsletter-submissions`
};

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const formData = req.body;
        let axios_res = await axios.post(urls.postNewsletter, {
            data: formData
        });

        return res.status(axios_res.status).send(axios_res.data);
    } else {
        return res.status(405).send();
    }
}
