import React from "react";
import {
  getPopularSearchApi,
  getSearchGeneralApi,
  getSearchProductApi,
  getSearchArticlesApi,
  getSearchNewsApi,
} from "../../api";

import GeneralSearchPage from "../../components/search/GeneralSearch";

function GeneralSearch(props) {
  return <GeneralSearchPage {...props} />;
}
export const getServerSideProps = async (props) => {
  const keyword = props.query.keyword;
  const [popularKeyword, productResult, generalResult, articlesResult, newsResult] =
    await Promise.all([
      getPopularSearchApi({
        k: keyword,
      }),
      getSearchProductApi({
        _limit: 1,
        k: keyword,
      }),
      getSearchGeneralApi({
        _limit: 6,
        k: keyword,
      }),
      getSearchArticlesApi({
        _limit: 1,
        k: keyword,
      }),
      getSearchNewsApi({
        _limit: 1,
        k: keyword,
      }),
    ]);
  return {
    props: {
      popularKeywordData: popularKeyword.data,
      productResultData: productResult.data,
      generalResultData: generalResult.data,
      articlesResultData: articlesResult.data,
      newsResultData: newsResult.data,
    },
  };
};
export default GeneralSearch;
