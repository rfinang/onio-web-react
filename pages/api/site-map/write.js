import multiparty from "multiparty";
import https from "https";
import fs from "fs";
import os from "os";


let sampleRobotsLines = [
    "User-agent: *",
    "Allow: /",
];

export default async function handler(req, res) {
    if (req.method === 'POST') {
        let hook_key = process.env.WEBHOOK_HANDLER_KEY;
        let hook_key_header = req.headers['webhook-handler-key'];

        if (hook_key !== req.headers['webhook-handler-key']) {
            return res.status(400).json({
                status: 400,
                message: 'Invalid WEBHOOK_HANDLER_KEY'
            })

        }

        const form = new multiparty.Form();
        const data = await new Promise((resolve, reject) => {
            form.parse(req, function (err, fields, files) {
                if (err) reject( err );
                resolve({ fields, files });
            });
        });
        let sitemap_url = data?.fields?.sitemap_url?.[0];
        console.log(`sitemap_url: `,sitemap_url);

        const sitemap_file = fs.createWriteStream("./public/sitemap.xml");
        const request = https.get(sitemap_url, function(response) {
            response.pipe(sitemap_file);

            // after download completed close filestream
            sitemap_file.on("finish", () => {
                sitemap_file.close();

                console.log("Download Sitemap Completed");
            });
            sitemap_file.on("error", (e) => {
                console.log(e);
            });
        });

        let robots_content = sampleRobotsLines.join(os.EOL) + os.EOL + `Sitemap: ${process.env.HOST_URL}/sitemap.xml`
        fs.writeFile('./public/robots.txt', robots_content, err => {
            if (err) {
                console.error(err);
            }
        });


        return res.status(200).json({ success: true });

    } else {
        return res.status(400).json({})
    }

}

export const config = {
    api: {
        bodyParser: false,
    },
};