import {useEffect, useRef} from "react";

import HomeContact from "../home/HomeContact";
import PageHero from "../common/PageHero";
import InvestorUpdates from "./InvestorUpdates";
import InvestorData from "./InvestorData";
import InvestorPartner from "./InvestorPartner";
import RelatedPages from "../about/RelatedPages";
import PageAnimations from "../helper/animation/page-animations";
import PageHead from "../common/Head";
import NewsPost from "../about/News";

function InvestorPage(props) {
  const { newsPostData, investorsData, newsletterSectionData } = props;

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
  const { investor_banner, section_related, partner, funding_timeline, investor_content, seo } =
    investorsData;
  return (
    <div className="page page--invertors invertors">
      <PageHead seo={seo} />
      <PageHero investorBanner={investor_banner} />
      <InvestorUpdates investorContent={investor_content} />
      <InvestorData fundingTimeline={funding_timeline} />
        <NewsPost
        data={newsPostData}
        headingBlock="Press Coverage"
        pageLinkText="View all Latest News"
        pageLinkURL="/news"
        hasSpacing={true}
        />
      <InvestorPartner partner={partner} />
      <HomeContact data={newsletterSectionData} newsletterRef={newsletterRef} />
      <RelatedPages whatNext={section_related} />
    </div>
  );
}

export default InvestorPage;
