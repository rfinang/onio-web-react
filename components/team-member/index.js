import { useEffect, useState } from "react";

import Head from "next/head";
import NotFound from "../NotFound";
import RelatedPages from "../about/RelatedPages";
import TeamMemberContent from "./TeamMemberContent";
import LastArticles from "./LastArticles";
import { getBlogApi } from "../../api";
import PageAnimations from "../helper/animation/page-animations";
import PageHead from "../common/Head";

function TeamMemberPage({ teamMemberData, articleCountData, notFound }) {
  if (notFound) return <NotFound />;
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      new PageAnimations();
    });
  }, []);
  useEffect(() => {
    getBlogApi({
      filters: {
        writer: {
          id: {
            $eq: `${teamMemberData[0].id}`
          }
        }
      },
      pagination: {
        page: 1,
        pageSize: 4
      },
      sort: "publish_date:DESC",
    }).then((res) => {
      setArticles(res.data.data);
      setTimeout(() => {
        new PageAnimations();
      });
    });
  }, [teamMemberData]);

  const { seo, name, section_related } = teamMemberData[0];
  return (
    <>
      <PageHead seo={seo} />
      <TeamMemberContent data={teamMemberData[0]} articleCount={articleCountData} />
      <LastArticles name={name} data={articles} />
      <RelatedPages whatNext={section_related} />
    </>
  );
}

export default TeamMemberPage;
