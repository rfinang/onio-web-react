import React, {useEffect, useRef} from "react";

import styled from "styled-components";
import HomeContact from "../home/HomeContact";
import BatterylessIntro from "./shelf-label/BatterylessIntro";
import Introduction from "./shelf-label/Introduction";
import Batteryless from "./shelf-label/Batteryless";
import Connectivity from "./shelf-label/Connectivity";
import Integration from "./shelf-label/Integration";

import PageAnimations from "../helper/animation/page-animations";
import PageHead from "../common/Head";
import Project from "./smart-hub/Projects";
import NotFound from "../NotFound";
import init from "./shelf-label/SpriteAnimation";
const ShelfLabelStyles = styled.div`
  .shelf-label {
    background-color: #CDEDFF;
  }
`;
function ShelfLabelPage({ shelfLabelData, newsletterSectionData, notFound }) {
  if (notFound) {
    return <NotFound />;
  }
  if (!shelfLabelData) return null;

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
    
    // Debug: Log data to see if there are animation settings
    console.log('ShelfLabel CMS Data:', {
      label,
      title,
      introduction,
      batteryless,
      connectivity,
      integration
    });
    
    init(24);
  }, []);
  const {
    seo,
    top_description,
    label,
    title,
    link_or_video,
    introduction,
    batteryless,
    connectivity,
    integration,
    section_powered_by,
  } = shelfLabelData;
  return (
    <ShelfLabelStyles>
      <PageHead seo={seo || null} />
      <div className="shelf-label">
        <BatterylessIntro
            data={{ description: top_description, label, title, link_or_video: link_or_video }}
        />
        <Introduction
            data={{
              introduction: introduction,
            }}
        />
        <Batteryless data={{ batteryless }} />
        <Connectivity data={{ connectivity }} />
        <Integration data={{ integration }} />

        <Project data={section_powered_by} />
        <HomeContact data={newsletterSectionData} newsletterRef={newsletterRef} customClass="none-radius" />
      </div>
    </ShelfLabelStyles>
  );
}

export default ShelfLabelPage;
