import axios from 'axios';
import Config, {HUBSPOT_URL} from "../../config";
import {getGlobalApi} from "../../api";

const urls = {
    postNewsletter: `${Config.DOMAIN_API}/newsletter-submissions`
};

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const formData = req.body;
        let axios_res = await axios.post(urls.postNewsletter, {
            data: formData
        });

        let isDone;
        if (axios_res.status === 200) {
            const [dataGlobalRes] = await Promise.all([getGlobalApi()]);
            const {data: {data: dataGlobal}} = dataGlobalRes;
            const { hubspot_newsletter_portal_id, hubspot_newsletter_form_id } = dataGlobal;
            const postHubspotNewsletter = `${HUBSPOT_URL}/${hubspot_newsletter_portal_id}/${hubspot_newsletter_form_id}`

            console.log(postHubspotNewsletter)
            const jsonData = JSON.stringify({
                fields: [
                    {
                        name: "firstname",
                        value: formData.name,
                    },
                    {
                        name: "email",
                        value: formData.email,
                    },
                    {
                        name: "company",
                        value: formData.company,
                    },
                    {
                        name: "TICKET.subject",
                        value: "Newsletter",
                    },
                    {
                        name: "TICKET.content",
                        value: `${formData.name} - ${formData.email} - ${formData.company}`,
                    },
                    {
                        name: "TICKET.source_type",
                        value: "FORM",
                    },
                    {
                        name: "TICKET.hs_ticket_priority",
                        value: "HIGH",
                    },
                    {
                        name: "TICKET.hs_ticket_category",
                        value: "GENERAL_INQUIRY",
                    },
                    {
                        name: "contact_when_datasheet_ready",
                        value: formData.contact_when_datasheet_ready,
                    },
                ],
            });
            let hubspot_res = await axios.post(postHubspotNewsletter, jsonData, {
                headers: {
                    "Content-Type": "application/json",
                },
            }).catch((err) => {
                console.log(err)
                isDone = true;
                return res.status(err.response.status).send(err.response.data)
            });

        }
        if (!isDone) {
            return res.status(axios_res.status).send(axios_res.data)
        }
    } else {
        return res.status(405).send();
    }

}
