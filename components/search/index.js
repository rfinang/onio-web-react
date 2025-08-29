import { useEffect } from "react";

import { SearchPageStyles } from "../styles/Search";
import SearchHeader from "./SearchHeader";
import SearchContent from "./SearchContent";
import PageAnimations from "../helper/animation/page-animations";
import Head from "next/head";
function SearchPage({
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
          {keyword} - found {totalResult} results | Top Hits | ONiO
        </title>
        <meta name="title" content={`${keyword} - found ${totalResult} results | Top Hits | ONiO`} key="meta-title"/>
        <meta property="og:title" content={`${keyword} - found ${totalResult} results | Top Hits | ONiO`} key="og-title"/>
      </Head>
      <div className="search-page">
        <SearchHeader
          keyword={keyword}
          popularKeyword={popularKeywordData}
          articleCount={articlesResultData?.data?.count}
          newsCount={newsResultData?.data?.count}
          productsCount={productResultData?.data?.count}
          generalCount={generalResultData?.data?.count}
        />
        {totalResult > 0 && (
          <SearchContent
            keyword={keyword}
            articles={articlesResultData}
            news={newsResultData}
            products={productResultData}
            general={generalResultData}
          />
        )}
      </div>
    </SearchPageStyles>
  );
}

export default SearchPage;
