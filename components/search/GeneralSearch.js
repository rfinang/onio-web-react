import { useEffect } from "react";
import Head from "next/head";
import { SearchPageStyles } from "../styles/Search";
import SearchHeader from "./SearchHeader";

import GeneralSearchContent from "./GeneralSearchContent";
import PageAnimations from "../helper/animation/page-animations";
function GeneralSearchPage({
  popularKeywordData,
  generalResultData,
  productResultData,
  articlesResultData,
  newsResultData,
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
          {keyword} - found {totalResult} results | General | ONiO
        </title>
        <meta name="title" content={`${keyword} - found ${totalResult} results | General | ONiO`} key="meta-title"/>
        <meta property="og:title" content={`${keyword} - found ${totalResult} results | General | ONiO`} key="og-title"/>
      </Head>
      <div className="search-page">
        <SearchHeader
          keyword={keyword}
          productsCount={productResultData?.data?.count}
          generalCount={generalResultData?.data?.count}
          articleCount={articlesResultData?.data?.count}
          newsCount={newsResultData?.data?.count}
          popularKeyword={popularKeywordData}
          active={1}
        />
        {totalResult > 0 && <GeneralSearchContent keyword={keyword} general={generalResultData} />}
      </div>
    </SearchPageStyles>
  );
}

export default GeneralSearchPage;
