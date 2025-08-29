import React from 'react'
import Config from "../config/index";

const Robot = () => {}

export const getServerSideProps = async ({ res }) => {
    if (res) {
        res.setHeader('Content-Type', 'text/plain')
        res.write(`User-agent: *
Allow: /
Sitemap: ${Config.HOST_URL}/sitemap.xml`)
        res.end()

    }
    return {
        props: {},
    }
}

export default Robot