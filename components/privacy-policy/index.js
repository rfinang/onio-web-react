import { useEffect } from "react";
import Head from "next/head";

import styled from "styled-components";
import PageAnimations from "../helper/animation/page-animations";
import PageHead from "../common/Head";
export const PolicyStyles = styled.div`
  @media (min-width: 740px) {
    .blogHeader {
      padding-top: 14.4rem;
    }
  }
  @media (max-width: 739.98px) {
    .blogHeader {
      padding-top: 80px;
    }
  }

  @media (min-width: 740px) {
    .blogDetail {
      padding-bottom: 14.5rem;
    }
  }
  @media (max-width: 739.98px) {
    .blogDetail {
      padding-bottom: 80px;
    }
  }
`;
function PrivacyPolicyPage({ privacyPolicyData }) {
  useEffect(() => {
    setTimeout(() => {
      new PageAnimations();
    });
  }, []);
  const { seo, privacy_policy, cookies } = privacyPolicyData;
  return (
    <PolicyStyles>
      <PageHead seo={seo} />
      <div className="pageSimple__content">
        <div className="container">
          <div className="blogDetail blogHeader">
            <div className="blogDetail__content pb-0">
              <div className="row spacing--bottom--sm">
                <div className="blogDetail__meta__cat col-md-3 col-8 offset-md-0 offset-sm-2 mb-md-0 mb-4 pb-md-0 pb-1">
                  <h4 className="heading--block mb-0 d-inline-block js-animation--fade">
                    <span className="heading--block__text">Privacy Policy</span>
                  </h4>
                </div>
                <div
                  className="col-lg-6 col-md-7 col-sm-8 col-12 offset-lg-1 offset-md-0 offset-sm-2 blogDetail__content__right js-animation--fade"
                  data-screen-offset=".15"
                  data-offset=".15"
                >
                  <div
                    className="dynamic-content"
                    dangerouslySetInnerHTML={{ __html: privacy_policy }}
                  />
                </div>
              </div>

              <div className="row">
                <div className="blogDetail__meta__cat col-md-3 col-8 offset-md-0 offset-sm-2 mb-md-0 mb-4 pb-md-0 pb-1">
                  <h4 className="heading--block mb-0 d-inline-block js-animation--fade">
                    <span className="heading--block__text">Cookies</span>
                  </h4>
                </div>
                <div
                  className="col-lg-6 col-md-7 col-sm-8 col-12 offset-lg-1 offset-md-0 offset-sm-2 blogDetail__content__right js-animation--fade"
                  data-offset=".15"
                >
                  <div className="dynamic-content" dangerouslySetInnerHTML={{ __html: cookies }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PolicyStyles>
  );
}

export default PrivacyPolicyPage;
