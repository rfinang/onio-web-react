import React, {useEffect, useRef} from "react";

import styled from "styled-components";
import init from "./smart-hub/SpriteAnimation";
import HomeContact from "../home/HomeContact";
import BatterylessIntro from "./smart-hub/BatterylessIntro";
import BatterylessAbout from "./smart-hub/BatterylessAbout";

import PageAnimations from "../helper/animation/page-animations";
import PageHead from "../common/Head";
import OpenSource from "./smart-hub/OpenSouce";
import Community from "./smart-hub/Community";
import Features from "./smart-hub/Features";
import Programming from "./smart-hub/Programming";
import Integration from "./smart-hub/Integration";
import Resource from "./smart-hub/Resource";
import Project from "./smart-hub/Projects";
import NotFound from "../NotFound";
import ControlCenter from "./smart-hub/ControlCenter";
const SmartHubStyles = styled.div`
  .turnkey-landing {
    background-color: #d4ffcd;
  }
`;
function SmartHubPage({ smartHubData, newsletterSectionData, notFound }) {
  if (notFound) {
    return <NotFound />;
  }
  if (!smartHubData) return null;

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
    init(28);
  }, []);
  const {
    seo,
    top_description,
    label,
    title,
    smart_hub_introduction,
    links,
    hub_image,
    section_open_source,
    section_community,
    section_features,
    section_quick_info,
    section_programming,
    section_control_center,
    section_integration,
    section_resources,
    section_powered_by,
  } = smartHubData;
  return (
    <SmartHubStyles>
      <PageHead seo={seo || null} />
      <div className="turnkey-landing">
        <BatterylessIntro
          data={{ description: top_description, label, title, links: links }}
        />
        <BatterylessAbout
          data={{
            smart_hub_introduction: smart_hub_introduction,
            banner: hub_image,
          }}
        />
        <OpenSource data={{ section_open_source }} />
        <Community data={section_community} />
        <Features data={{ section_features, section_quick_info }} />
        <Programming data={section_programming} />
        <ControlCenter data={section_control_center} />
        <Integration data={section_integration} />
        <Resource data={section_resources} />
        <Project data={section_powered_by} />
        <HomeContact data={newsletterSectionData} newsletterRef={newsletterRef} customClass="none-radius" />
      </div>
    </SmartHubStyles>
  );
}

export default SmartHubPage;
