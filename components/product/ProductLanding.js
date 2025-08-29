import { useEffect } from "react";

import Head from "next/head";
import PageHero from "../common/PageHero";
import BenefitBattery from "./landing/BenefitBattery";
import SizeMatter from "./landing/SizeMatter";
import Powered from "./landing/Powered";
import RelatedPages from "../about/RelatedPages";
import HomeProject from "../home/HomeProject";
import { ProductLandingStyles } from "../styles/product/ProductLanding";

import PageAnimations from "../helper/animation/page-animations";
import PageHead from "../common/Head";
function ProductLandingPage({ productLandingData, oneChipData, homeProject, lowerBomData }) {
  useEffect(() => {
    setTimeout(() => {
      new PageAnimations();
    });
  }, []);

  const {
    seo,
    banner,
    section_navigation,
    section_batteryless,
    section_related,
    size_matters,
    section_magic,
  } = productLandingData;
  return (
    <ProductLandingStyles>
      <PageHead seo={seo} />
      <PageHero investorBanner={banner} />
      <BenefitBattery
        oneChipData={oneChipData}
        benefitBatteryless={section_batteryless}
        sectionNavigation={section_navigation}
      />
      <SizeMatter data={size_matters} lowerBomData={lowerBomData} />
      <Powered data={section_magic} />
      <HomeProject
        customClass="turnkeyProjects--productLandingpage"
        showDesc={true}
        homeProject={homeProject}
      />
      <RelatedPages whatNext={section_related} />
    </ProductLandingStyles>
  );
}

export default ProductLandingPage;
