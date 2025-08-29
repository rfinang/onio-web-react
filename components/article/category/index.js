import { useEffect, useState } from "react";

import Head from "next/head";
import RelatedPages from "../../about/RelatedPages";
import CatHeader from "./CatHeader";
import CatArticles from "./CatArticles";

import NotFound from "../../NotFound";
import PageAnimations from "../../helper/animation/page-animations";
import PageHead from "../../common/Head";

function ArticleCategoryPage({
  blogCategoryData,
  blogCategoriesData,
  blogPostData,
  blogPostTotalData,
}) {
  if (blogCategoryData.length === 0) {
    return <NotFound />;
  }
  useEffect(() => {
    setTimeout(() => {
      new PageAnimations();
    });
  }, []);

  const { section_related, seo, name, id } = blogCategoryData[0];
  return (
    <div>
      <PageHead seo={seo} />
      <CatHeader blogToTal={blogPostTotalData} name={name} blogCategories={blogCategoriesData} />
      <CatArticles catID={id} blogData={blogPostData} blogToTal={blogPostTotalData} />
      <RelatedPages whatNext={section_related} />
    </div>
  );
}

export default ArticleCategoryPage;
