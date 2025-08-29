import {useEffect, useRef} from "react";

import Head from "next/head";
import styled from "styled-components";
import HomeContact from "../home/HomeContact";
import BatterylessIntro from "./batteryless-remote/BatterylessIntro";
import BatterylessAbout from "./batteryless-remote/BatterylessAbout";
import BatterylessEnergy from "./batteryless-remote/BatterylessEnergy";
import BatterylessReliability from "./batteryless-remote/BatterylessReliability";
import BatterylessInterfaces from "./batteryless-remote/BatterylessInterfaces";
import BatterylessQuick from "./batteryless-remote/BatterylessQuick";
import init from "./batteryless-remote/SpriteAnimation";
import PageAnimations from "../helper/animation/page-animations";
import PageHead from "../common/Head";
const BatterylessRemoteStyles = styled.div`
  .turnkey-landing {
    background-color: #ffe0d6;
  }
`;
function BatterylessRemotePage({ batterylessRemoteData, newsletterSectionData }) {

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
    init();
  }, []);
  const {
    seo,
    title,
    top_description,
    label,
    links,
    link_or_video,
    introduction,
    energy_harvesting,
    reliability,
    reliability_banner,
    user_interfaces,
    interfaces_banner,
    quick_info,
  } = batterylessRemoteData;
  return (
    <BatterylessRemoteStyles>
      <PageHead seo={seo} />
      <div className="turnkey-landing">
        <BatterylessIntro title={title} label={label} description={top_description} links={links} link_or_video={link_or_video} />
        <BatterylessAbout data={introduction} />
        <BatterylessEnergy data={energy_harvesting} />
        <BatterylessReliability data={reliability} banner={reliability_banner} />
        <BatterylessInterfaces data={user_interfaces} banner={interfaces_banner} />
        <BatterylessQuick data={quick_info} />
        <HomeContact data={newsletterSectionData} newsletterRef={newsletterRef} customClass="none-radius" />
      </div>
    </BatterylessRemoteStyles>
  );
}

export default BatterylessRemotePage;
