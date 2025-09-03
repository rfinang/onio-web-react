import axios from 'axios';
import Config from "../../config";
import {processCopperSubmission} from "../../lib/copper";

const urls = {
    postContact: `${Config.DOMAIN_API}/contact-form-submissions`
};

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const formData = req.body;
        let axios_res = await axios.post(urls.postContact, {
            data: formData
        });

        if (axios_res.status === 200) {
            // Process Copper CRM submission
            const copperResult = await processCopperSubmission(formData, 'contact');
            if (!copperResult.success) {
                console.error('Copper CRM integration failed:', copperResult.error);
            } else {
                console.log('Successfully created contact and opportunity in Copper CRM');
            }
        }
        
        return res.status(axios_res.status).send(axios_res.data);
    } else {
        return res.status(405).send();
    }

}
