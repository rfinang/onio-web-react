import { useEffect } from "react";

import CareerDetailsContent from "./CareerDetailsContent";
import NotFound from "../NotFound";
import Head from "next/head";
import RelatedPages from "../about/RelatedPages";
import PageHead from "../common/Head";
function CareerDetailsPage({ careersDetailsData, notFound }) {
  if (notFound) return <NotFound />;
  if (careersDetailsData.length === 0) return <NotFound />;
  if (!careersDetailsData) return null;
  const { seo, title, description, content, link_to, section_related } = careersDetailsData[0];
  useEffect(() => {}, []);
  return (
    <>
      <PageHead seo={seo} />
      <CareerDetailsContent
        title={title}
        description={description}
        content={content}
        linkTo={link_to}
      />
      <RelatedPages linkTo={section_related} />
    </>
  );
}

export default CareerDetailsPage;
