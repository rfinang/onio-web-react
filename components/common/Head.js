import Head from "next/head";
import React from "react";

function PageHead({ seo, children }) {
    return (
        <Head>
            (seo?.meta_title && {
                <title key="title">{seo?.meta_title} | ONiO</title>
            })
            {seo?.meta_title && <meta name="title" content={seo?.meta_title + " | ONiO"} key="meta-title"/>}
            {seo?.meta_description && <meta name="description" content={seo?.meta_description} key="description"/>}
            {seo?.share_image?.url && <meta property="og:image" content={seo?.share_image?.url} key="image"/>}
            {seo?.meta_title && <meta property="og:title" content={seo?.meta_title + " | ONiO"} key="og-title"/>}
            {seo?.meta_description && <meta property="og:description" content={seo?.meta_description} key="og-description"/>}
            {children}
        </Head>
    );
}

export default PageHead;
