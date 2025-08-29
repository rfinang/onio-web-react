import { useEffect } from "react";
import Head from "next/head";

import { BlogLandingStyles } from "../styles/blog/BlogLanding";
import BlogHeader from "./BlogHeader";
import BlogSlide from "./BlogSlide";
import BlogLastArticles from "./BlogLastArticles";
import HomeProject from "../home/HomeProject";
import RelatedPages from "../about/RelatedPages";
import PageAnimations from "../helper/animation/page-animations";
import PageHead from "../common/Head";

function ArticlePage({
  homeProjectData,
  blogLandingData,
  blogData,
  blogCategoryData,
  blogFeaturedData,
  blogToTal,
}) {
  useEffect(() => {
    setTimeout(() => {
      new PageAnimations();
    });
  }, []);
  const { blog_header, section_related, seo } = blogLandingData;

  return (
    <BlogLandingStyles>
      <PageHead seo={seo} />
      <div className="page page--blogLanding blogLanding">
        <BlogHeader blogHeaderData={blog_header} blogCategories={blogCategoryData} />
        <BlogSlide blogFeatured={blogFeaturedData} />
        <BlogLastArticles blogData={blogData} blogToTal={blogToTal} />
        <HomeProject homeProject={homeProjectData} />
        <RelatedPages whatNext={section_related} />
      </div>
    </BlogLandingStyles>
  );
}

export default ArticlePage;
