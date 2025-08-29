import React from "react";
import {
  getPopularSearchApi,
  getSearchGeneralApi,
  getSearchProductApi,
  getSearchArticlesApi,
  getSearchNewsApi,
} from "../../api";

import NewsSearchPage from "../../components/search/NewsSearch";

function GeneralSearch(props) {
  return <NewsSearchPage {...props} />;
}
export const getServerSideProps = async (props) => {
  const keyword = props.query.keyword;
  const [popularKeyword, productResult, generalResult, newsResult, articlesResult] =
    await Promise.all([
      getPopularSearchApi({
        k: keyword,
      }),
      getSearchProductApi({
        _limit: 1,
        k: keyword,
      }),
      getSearchGeneralApi({
        _limit: 1,
        k: keyword,
      }),
      getSearchNewsApi({
        _limit: 9,
        k: keyword,
      }),
      getSearchArticlesApi({
        _limit: 1,
        k: keyword,
      }),
    ]);
  return {
    props: {
      articlesResultData: articlesResult.data,
      popularKeywordData: popularKeyword.data,
      productResultData: productResult.data,
      generalResultData: generalResult.data,
      newsResultData: newsResult.data,
    },
  };
};
export default GeneralSearch;
