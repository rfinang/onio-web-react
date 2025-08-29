import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { ArticleDetailsStyles } from "../styles/blog/details/ArticleDetails";
import BlogDetailMeta from "./details/BlogDetailMeta";
import BlogDetailHeader from "./details/BlogDetailHeader";
import BlogDetailPoster from "./details/BlogDetailPoster";
import BlogDetailDesc from "./details/BlogDetailDesc";
import BlogDetailContent from "./details/BlogDetailContent";
import BlogDetailReadmore from "./details/BlogDetailReadmore";
import BlogDetailAuthor from "./details/BlogDetailAuthor";
import Head from "next/head";
import NotFound from "../NotFound";
import PageAnimations from "../helper/animation/page-animations";
import PageHead from "../common/Head";
function ArticleDetailsPage({ blogDetailsData, notFound, authorPost, relatedPost, query }) {
  if (notFound) return <NotFound />;
  if (!blogDetailsData) return null;

  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      new PageAnimations();
    });
  }, [query?.slug]);
  const handleGoBack = (e) => {
    e.preventDefault();
    router.back();
  };
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
    title,
    read_time,
    short_description,
    content,
    publish_date,
    writer,
    categories,
    feature_image,
    mobile_feature_image,
    seo,
  } = blogDetailsData;

  return (
    <ArticleDetailsStyles key={query?.slug}>
      <PageHead seo={seo} />
      <div className="container">
        <div className="blogDetail blogHeader">
          <div className="d-sm-none d-block mb-4">
            <a
              href="#"
              className="pageLink pageLink--black pageLink--reverse js-animation--fade"
              onClick={handleGoBack}
            >
              <span className="pageLink__text">Back</span>
              <span className="pageLink__icon">
                <svg
                  width="31"
                  height="27"
                  viewBox="0 0 31 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="svg"
                >
                  <path d="M15.8594 1L29 13.5L15.8594 26" stroke="white" strokeWidth="2"></path>
                  <path d="M0 13.5898L28.7829 13.5898" stroke="white" strokeWidth="2"></path>
                </svg>
              </span>
            </a>
          </div>
          <BlogDetailMeta read_time={read_time} created_at={publish_date} categories={categories} content={content} />
          <BlogDetailHeader title={title} handleGoBack={handleGoBack} />
          <BlogDetailPoster
            feature_image={feature_image}
            mobile_feature_image={mobile_feature_image}
          />
          <BlogDetailDesc shortDescription={short_description} />
          <BlogDetailContent content={content} handleMouseClick={handleMouseClick} />
          <BlogDetailReadmore relatedPost={relatedPost} />
          <BlogDetailAuthor writer={writer} authorPost={authorPost} />
        </div>
      </div>
    </ArticleDetailsStyles>
  );
}

export default ArticleDetailsPage;
