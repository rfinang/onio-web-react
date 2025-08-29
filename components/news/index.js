import { useEffect } from "react";

import Head from "next/head";
import PageHero from "../common/PageHero";
import LatestNews from "./LatestNews";
import RelatedPages from "../about/RelatedPages";
import MediaCenter from "./MediaCenter";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PageAnimations from "../helper/animation/page-animations";
import PageHead from "../common/Head";
function NewsLandingPage({ newsLandingData, newsPostData, newsTotalData }) {
  useEffect(() => {
    setTimeout(() => {
      new PageAnimations();
    });
  }, []);
  const { seo, banner, section_related, send_mail, media_center } = newsLandingData;
  return (
    <>
      <PageHead seo={seo} />

      <PageHero investorBanner={banner} />
      <LatestNews newsData={newsPostData} newsToTal={newsTotalData} />
      <MediaCenter sendMail={send_mail} mediaCenter={media_center} />
      <RelatedPages whatNext={section_related} />
    </>
  );
}

export default NewsLandingPage;
