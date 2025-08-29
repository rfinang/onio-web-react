import axios from 'axios';
import Config, {HUBSPOT_URL} from "../../config";
import {getGlobalApi} from "../../api";
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

        let isDone;
        if (axios_res.status === 200) {
            // Process Copper CRM submission
            const copperResult = await processCopperSubmission(formData, 'contact');
            if (!copperResult.success) {
                console.error('Copper CRM integration failed:', copperResult.error);
            } else {
                console.log('Successfully created contact and opportunity in Copper CRM');
            }

            const [dataGlobalRes] = await Promise.all([getGlobalApi()]);
            const {data: {data: dataGlobal}} = dataGlobalRes;
            const { hubspot_portal_id, hubspot_form_id } = dataGlobal;
            const postHubspotContact = `${HUBSPOT_URL}/${hubspot_portal_id}/${hubspot_form_id}`

            console.log(postHubspotContact)
            const jsonData = JSON.stringify({
                fields: [
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
                        value: formData.reason_for_contacting,
                    },
                    {
                        name: "TICKET.content",
                        value: formData.message !== "" ? formData.message : formData.reason_for_contacting,
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
                        name: "firstname",
                        value: formData.first_name,
                    },
                    {
                        name: "lastname",
                        value: formData.last_name,
                    },
                    {
                        name: "jobtitle",
                        value: formData.job_title,
                    },
                    {
                        name: "whitepaper",
                        value: formData.whitepaper,
                    },
                    {
                        name: "request_pitch_deck",
                        value: formData.request_pitch_deck,
                    },
                    {
                        name: "request_a_meeting",
                        value: formData.request_a_meeting,
                    },
                    {
                        name: "about_my_project",
                        value: formData.about_my_project,
                    },
                    {
                        name: "about_other",
                        value: formData.about_other,
                    },
                    {
                        name: "project_status",
                        value: formData.project_status,
                    },
                    {
                        name: "estimated_annual_volume",
                        value: formData.estimated_annual_volume,
                    },
                ],
            });
            let hubspot_res = await axios.post(postHubspotContact, jsonData, {
                headers: {
                    "Content-Type": "application/json",
                },
            }).catch((err) => {
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
