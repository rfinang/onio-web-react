import { useEffect } from "react";

import Head from "next/head";
import ProjectLandingContent from "./ProjectLandingContent";
import PageHero from "../common/PageHero";
import HomeProject from "../home/HomeProject";
import RelatedPages from "../about/RelatedPages";
import { ProjectLandingStyles } from "../styles/project-landing/ProjectLanding";
import PageAnimations from "../helper/animation/page-animations";
import PageHead from "../common/Head";
function ProjectLandingPage({ projectLandingData, homeProjectData }) {
  useEffect(() => {
    setTimeout(() => {
      new PageAnimations();
    });
  }, []);
  const { project_banner, what_is, section_related, seo } = projectLandingData;
  return (
    <ProjectLandingStyles>
      <PageHead seo={seo} />
      <div className="page--projectLanding">
        <PageHero investorBanner={project_banner} />
        <ProjectLandingContent data={what_is} />
        <HomeProject homeProject={homeProjectData} hideTop={true} />
        <RelatedPages whatNext={section_related} />
      </div>
    </ProjectLandingStyles>
  );
}

export default ProjectLandingPage;
