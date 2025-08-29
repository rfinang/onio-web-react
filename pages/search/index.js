import React from "react";
import {
  getPopularSearchApi,
  getSearchArticlesApi,
  getSearchNewsApi,
  getSearchGeneralApi,
  getSearchProductApi,
} from "../../api";
import SearchPage from "../../components/search";

function Search(props) {
  return <SearchPage {...props} />;
}
export const getServerSideProps = async (props) => {
  const keyword = props.query.keyword;
  const [popularKeyword, articlesResult, newsResult, productResult, generalResult] =
    await Promise.all([
      getPopularSearchApi({
        k: keyword,
      }),
      getSearchArticlesApi({
        _limit: 4,
        k: keyword,
      }),
      getSearchNewsApi({
        _limit: 4,
        k: keyword,
      }),
      getSearchProductApi({
        _limit: 2,
        k: keyword,
      }),
      getSearchGeneralApi({
        _limit: 2,
        k: keyword,
      }),
    ]);
  return {
    props: {
      popularKeywordData: popularKeyword.data,
      articlesResultData: articlesResult.data,
      newsResultData: newsResult.data,
      productResultData: productResult.data,
      generalResultData: generalResult.data,
    },
  };
};
export default Search;
