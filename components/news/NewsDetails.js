import { useEffect } from "react";

import Head from "next/head";

import NotFound from "../NotFound";
import { ArticleDetailsStyles } from "../styles/blog/details/ArticleDetails";
import NewsDetailMeta from "./NewsDetailMeta";
import NewsDetailHeader from "./NewsDetailHeader";
import BlogDetailPoster from "../article/details/BlogDetailPoster";
import BlogDetailDesc from "../article/details/BlogDetailDesc";
import BlogDetailContent from "../article/details/BlogDetailContent";
import RelatedPages from "../about/RelatedPages";
import PageAnimations from "../helper/animation/page-animations";
import PageHead from "../common/Head";
function NewsDetailsPage({ newsDetailsData }) {
  if (!newsDetailsData || newsDetailsData.length === 0) return <NotFound />;
  useEffect(() => {
    setTimeout(() => {
      new PageAnimations();
    });
  }, []);
  const handleMouseClick = (event) => {
    const btnCopyLink = document.querySelector(".js-copy-clipboard");
    event.preventDefault();
    if (timeClearMessage) clearTimeout(timeClearMessage);
    const input = document.createElement("input");
    input.setAttribute("value", window.location.href);

    input.style.zIndex = "-1";
    input.style.position = "absolute";
    input.style.opacity = "0";

    document.body.appendChild(input);
    const selected =
      document.getSelection().rangeCount > 0 ? document.getSelection().getRangeAt(0) : false;

    input.select();
    document.execCommand("copy");
    document.body.removeChild(input);

    //custom change text to link copied
    btnCopyLink.textContent = `Link Copied`;
    btnCopyLink.classList.add("copied");

    const timeClearMessage = setTimeout(() => {
      btnCopyLink.textContent = `Copy Link`;
      btnCopyLink.classList.remove("copied");
    }, 3000);

    if (selected) {
      document.getSelection().removeAllRanges();
      document.getSelection().addRange(selected);
    }
  };
  const {
    label,
    publish_date,
    title,
    description,
    content,
    feature_image,
    mobile_feature_image,
    link_to,
    send_mail,
    seo,
    section_related,
  } = newsDetailsData[0];
  return (
    <ArticleDetailsStyles>
      <PageHead seo={seo} />

      <div className="newsDetail__content">
        <div className="container">
          <div className="blogDetail blogHeader">
            <NewsDetailMeta label={label} created_at={publish_date} />
            <NewsDetailHeader title={title} />
            <BlogDetailPoster
              feature_image={feature_image}
              mobile_feature_image={mobile_feature_image}
            />
            <BlogDetailDesc shortDescription={description} />
            <BlogDetailContent
              customClass="pb-0"
              content={content}
              linkTo={link_to}
              sendMail={send_mail}
              handleMouseClick={handleMouseClick}
            />
          </div>
        </div>
      </div>
      <RelatedPages whatNext={section_related} />
    </ArticleDetailsStyles>
  );
}

export default NewsDetailsPage;
