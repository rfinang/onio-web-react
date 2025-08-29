import {useEffect, useRef} from "react";

import VideoInteractive from "./VideoInteractive";
import HeroBanner from "./HeroBanner";
import BenefitBattery from "./BenefitBattery";
import HomeProject from "./HomeProject";
import HomeBlog from "./HomeBlog";
import HomeContact from "./HomeContact";
import HomeQuick from "./HomeQuick";

import PageAnimations from "../helper/animation/page-animations";
import PageHead from "../common/Head";
import HomeSmartHub from "./SmartHub";

function HomePage({
  dataHome: homePage,
  dataPower: powerZero,
  lowserBomData,
  blogData,
  homeProject,
  oneChipData,
  newsletterSectionData,
}) {

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
  if (!homePage || !powerZero) return null;

  const {
    home_banner,
    banner_links,
    section_benefit_batteryless,
    section_benefit_animations,
    what_next: whatNext,
    seo,
    section_smart_hub,
  } = homePage;
  return (
    <>
      <PageHead seo={seo} />
      <HeroBanner banners={home_banner} bannerLinks={banner_links} />
      {(section_smart_hub === null) && (<VideoInteractive powerZero={powerZero} customClass="videoInteractive--home"/>)}
      <HomeSmartHub
          data={section_smart_hub}
          customClass="videoInteractive--home"
      />
      <BenefitBattery
        oneChipData={oneChipData}
        lowerBomData={lowserBomData}
        benefitBatteryless={section_benefit_batteryless}
        benefitAnimations={section_benefit_animations}
      />
      <HomeProject homeProject={homeProject} />
      <HomeBlog blogData={blogData} />
      <HomeContact data={newsletterSectionData} newsletterRef={newsletterRef} />
      <HomeQuick whatNext={whatNext} />
    </>
  );
}

export default HomePage;
