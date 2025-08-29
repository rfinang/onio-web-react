import { useEffect } from "react";
import Head from "next/head";
import { SearchPageStyles } from "../styles/Search";
import SearchHeader from "./SearchHeader";

import NewsSearchContent from "./NewsSearchContent";
import PageAnimations from "../helper/animation/page-animations";
function NewsSearchPage({
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
          {keyword} - found {totalResult} results | News | ONiO
        </title>
        <meta name="title" content={`${keyword} - found ${totalResult} results | News | ONiO`} key="meta-title"/>
        <meta property="og:title" content={`${keyword} - found ${totalResult} results | News | ONiO`} key="og-title"/>
      </Head>
      <div className="search-page">
        <SearchHeader
          keyword={keyword}
          popularKeyword={popularKeywordData}
          articleCount={articlesResultData?.data?.count}
          newsCount={newsResultData?.data?.count}
          productsCount={productResultData?.data?.count}
          generalCount={generalResultData?.data?.count}
          active={4}
        />
        {totalResult > 0 && <NewsSearchContent keyword={keyword} news={newsResultData} />}
      </div>
    </SearchPageStyles>
  );
}

export default NewsSearchPage;
