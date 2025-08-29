import { useEffect } from "react";

import { SearchPageStyles } from "../styles/Search";
import SearchHeader from "./SearchHeader";
import ArticleSearchContent from "./ArticleSearchContent";
import PageAnimations from "../helper/animation/page-animations";
import Head from "next/head";
function ArticleSearchPage({
  popularKeywordData,
  articlesResultData,
  newsResultData,
  productResultData,
  generalResultData,
  ...props
}) {
  const keyword = props.query.keyword;
  useEffect(() => {
    setTimeout(() => {
      new PageAnimations();
    });
  }, []);
  const totalResult =
    0 +
    articlesResultData?.data?.count +
    newsResultData?.data?.count +
    productResultData?.data?.count +
    generalResultData?.data?.count;
  return (
    <SearchPageStyles>
      <Head>
        <title>
          {keyword} - found {totalResult} results | Articles | ONiO
        </title>
        <meta name="title" content={`${keyword} - found ${totalResult} results | Articles | ONiO`} key="meta-title"/>
        <meta property="og:title" content={`${keyword} - found ${totalResult} results | Articles | ONiO`} key="og-title"/>
      </Head>
      <div className="search-page">
        <SearchHeader
          keyword={keyword}
          popularKeyword={popularKeywordData}
          articleCount={articlesResultData?.data?.count}
          newsCount={newsResultData?.data?.count}
          productsCount={productResultData?.data?.count}
          generalCount={generalResultData?.data?.count}
          active={3}
        />
        {totalResult > 0 && (
          <ArticleSearchContent keyword={keyword} articles={articlesResultData} />
        )}
      </div>
    </SearchPageStyles>
  );
}

export default ArticleSearchPage;
