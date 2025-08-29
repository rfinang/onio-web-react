import {useEffect, useRef} from "react";

import Head from "next/head";
import PageHero from "../common/PageHero";

import RelatedPages from "../about/RelatedPages";
import {ProductLandingStyles} from "../styles/product/ProductLanding";

import PageAnimations from "../helper/animation/page-animations";
import PageHead from "../common/Head";
import PoweredProfiler from "./landing/PoweredProfiler";
import HomeContact from "../home/HomeContact";
import PowerSolver from "./landing/PowerSolver";

function EnergyLandingPage({energyEmulatorLandingData, newsletterSectionData}) {
  useEffect(() => {
    setTimeout(() => {
      new PageAnimations();
    });
  }, []);

  const {
    seo,
    banner,
    section_related,
    power_profiler,
    power_profiles_config,
    solar_profiles_config,
    power_solver,
    power_profiles_preset
  } = energyEmulatorLandingData;

  const newsletterRef = useRef(null);

  const sortedEntries = Object.entries(solar_profiles_config)
    .sort(([, a], [, b]) => a.area - b.area);

  const solarProfilesConfig = Object.fromEntries(sortedEntries);


  return (
    <ProductLandingStyles>
      <PageHead seo={seo}/>
      <PageHero maxWidthTitle={70} investorBanner={banner}/>
      <PoweredProfiler solarProfilesConfig={solarProfilesConfig} powerProfilesConfig={power_profiles_config}
                       data={power_profiler} powerProfilesPreset={power_profiles_preset}/>
      <PowerSolver data={power_solver}></PowerSolver>
      <HomeContact data={newsletterSectionData} newsletterRef={newsletterRef}/>
      <RelatedPages whatNext={section_related}/>
    </ProductLandingStyles>
  );
}

export default EnergyLandingPage;
