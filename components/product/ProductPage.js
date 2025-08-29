import {useEffect, useRef} from "react";

import Head from "next/head";
import { ProductPageStyles } from "../styles/product/ProductPage";
import NotFound from "../NotFound";
import PageHero from "../common/PageHero";
import Batteryless from "./onio-zero/Batteryless";
import Benefits from "./onio-zero/Benefits";
import ZeroEnvironmentalBenefits from "./onio-zero/EnvironmentalBenefits";
import HomeContact from "../home/HomeContact";
import HomeProject from "../home/HomeProject";
import PageAnimations from "../helper/animation/page-animations";
import PageHead from "../common/Head";
function ProductPage({ onioZeroData, homeProject, lowerBomData, newsletterSectionData }) {
  if (!onioZeroData || onioZeroData.length === 0) return <NotFound />;

    const newsletterRef = useRef(null);

    useEffect(() => {
    setTimeout(() => {
      new PageAnimations();
    });
        if (window.location.hash === "#newsletter") {
            setTimeout(() => {
                newsletterRef.current.scrollIntoView({block: "start", inline: "nearest", behavior: "instant"});
            }, 200)
        }
  }, []);
  const {
    seo,
    product_banner,
    get_start,
    section_benefits,
    section_energy,
    section_key_feature,
    material_savings,
    section_enviromental_benefits,
  } = onioZeroData[0];
  return (
    <ProductPageStyles>
      <PageHead seo={seo} />
      <PageHero investorBanner={product_banner} />
      <Batteryless
        sectionEnergy={section_energy}
        getStart={get_start}
        sectionKeyFeature={section_key_feature}
      />
      <Benefits lowerBomData={lowerBomData} sectionBenefits={section_benefits} />
      <ZeroEnvironmentalBenefits
        materialSavings={material_savings}
        sectionEnviromentalBenefits={section_enviromental_benefits}
      />
      <HomeContact data={newsletterSectionData} newsletterRef={newsletterRef}/>
      <HomeProject homeProject={homeProject} />
    </ProductPageStyles>
  );
}

export default ProductPage;
