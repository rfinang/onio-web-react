import React from 'react'
import axios from "axios";
import Config from "../config/index";
import NotFound from "../components/NotFound";

const Sitemap = ({ notFound }) => {
    if (notFound) {
        return <NotFound />;
    }
}

const strapi_url = `${Config.DOMAIN_API}/custom-plugin/get-sitemap-url`;

export const getServerSideProps = async ({ res }) => {
    if (res) {
        let sitemap_url;
        try {
            let {data: data_url} = await axios.get(strapi_url);
            sitemap_url = data_url;
        }
        catch (e) {
            return {
                props: {
                    notFound: true
                },
            }
        }

        if (!sitemap_url) {
            return {
                props: {
                    notFound: true
                },
            }
        }
        try {
            let {data} = await axios.get(sitemap_url);
            res.setHeader('Content-Type', 'text/xml')
            res.write(data)
            res.end()
        }
        catch (e) {
            return {
                props: {
                    notFound: true
                },
            }
        }

    }
    return {
        props: {},
    }
}

export default Sitemap