import { useEffect, useRef } from "react";
import { useRouter } from 'next/router'

import { AboutStyles } from "../styles/about/About";

import HomeContact from "../home/HomeContact";
import VideoInteractive from "./VideoInteractive";
import Careers from "./Careers";
import SayHello from "./SayHello";
import AboutTeams from "./Teams";
import RelatedPages from "./RelatedPages";
import PageAnimations from "../helper/animation/page-animations";
import PageHead from "../common/Head";
import NewsPost from "./News";
function AboutPage(props) {
  const {
    dataPower: powerZero,
    newsPostData,
    aboutUsData,
    careerModuleData,
    careersData,
    newsletterSectionData,
  } = props;
  const myTeam = useRef(null);
  const newsletterRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      new PageAnimations();
    });

    if (window.location.hash === "#team") {
      myTeam.current.scrollIntoView();
    } else if (window.location.hash === "#newsletter") {
      setTimeout(() => {
        newsletterRef.current.scrollIntoView({block: "start", inline: "nearest", behavior: "instant"});
      }, 200)
    }
  }, []);

  const router = useRouter();

  useEffect(() => {
    const onHashChangeStart = (url) => {
      let hash = url.split('#')[1];
      if (hash === "team") {
        myTeam.current.scrollIntoView();
      }
    };

    router.events.on("hashChangeStart", onHashChangeStart);

    return () => {
      router.events.off("hashChangeStart", onHashChangeStart);
    };
  }, [router.events]);

  const { section_big_picture, section_team, section_related, seo } = aboutUsData;

  return (
    <>
      <PageHead seo={seo} />
      <AboutStyles>
        <div className="page page--about about">
          <VideoInteractive powerZero={powerZero} />
          <SayHello bigPicture={section_big_picture} />
          <div ref={myTeam}>
            <AboutTeams teamData={section_team} />
          </div>
          <Careers careerData={careerModuleData} positions={careersData} />
          {/* <HomeBlog
            blogData={blogData}
            headingBlock="Latest news from ONiO"
            pageLinkText="View all Latest News"
            pageLinkURL="/news"
          /> */}
          <NewsPost
            data={newsPostData}
            headingBlock="Latest news from ONiO"
            pageLinkText="View all Latest News"
            pageLinkURL="/news"
          />
          <HomeContact data={newsletterSectionData} newsletterRef={newsletterRef} />
          <RelatedPages whatNext={section_related} />
        </div>
      </AboutStyles>
    </>
  );
}

export default AboutPage;
