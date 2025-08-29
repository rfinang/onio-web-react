import { useEffect } from "react";

import { SearchPageStyles } from "../styles/Search";
import SearchHeader from "./SearchHeader";
import Head from "next/head";
import ProductsSearchContent from "./ProductsSearchContent";
import PageAnimations from "../helper/animation/page-animations";
function ProductsSearchPage({
  newsResultData,
  popularKeywordData,
  productResultData,
  generalResultData,
  articlesResultData,
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
          {keyword} - found {totalResult} results | Products | ONiO
        </title>
        <meta name="title" content={`${keyword} - found ${totalResult} results | Products | ONiO`} key="meta-title"/>
        <meta property="og:title" content={`${keyword} - found ${totalResult} results | Products | ONiO`} key="og-title"/>
      </Head>
      <div className="search-page">
        <SearchHeader
          keyword={keyword}
          productsCount={productResultData?.data?.count}
          generalCount={generalResultData?.data?.count}
          articleCount={articlesResultData?.data?.count}
          newsCount={newsResultData?.data?.count}
          popularKeyword={popularKeywordData}
          active={2}
        />
        {totalResult > 0 && <ProductsSearchContent keyword={keyword} data={productResultData} />}
      </div>
    </SearchPageStyles>
  );
}

export default ProductsSearchPage;
