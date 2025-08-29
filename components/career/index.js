import { useEffect } from "react";
import Head from "next/head";

import CareerLandingContent from "./CareerLandingContent";
import Careers from "../about/Careers";
import RelatedPages from "../about/RelatedPages";
import PageAnimations from "../helper/animation/page-animations";
import PageHead from "../common/Head";
function CareerPage(props) {
  const { careersData, careerModuleData, careerLandingData, workLocationsData } = props;
  const { section_related, seo, career_header } = careerLandingData;
  useEffect(() => {
    setTimeout(() => {
      new PageAnimations();
    });
  }, []);
  return (
    <>
      <PageHead seo={seo} />
      <CareerLandingContent
        careerHeader={career_header}
        workLocations={workLocationsData}
        careersData={careersData}
      />
      <Careers careerData={careerModuleData} />
      <RelatedPages whatNext={section_related} />
    </>
  );
}

export default CareerPage;
