import { useEffect, useState } from "react";
import Cookies from "universal-cookie";
import Head from "next/head";

import { PolicyStyles } from "./index";
import PageAnimations from "../helper/animation/page-animations";
import PageHead from "../common/Head";
const cookies = new Cookies();
function PrivacySettingsPage({ privacySettingsData }) {
  useEffect(() => {
    setTimeout(() => {
      new PageAnimations();
    });
  }, []);
  const { seo, privacy_setting_description, block_1, block_2 } = privacySettingsData;

  const [acceptCookie, setAcceptCookie] = useState(false);
  const [acceptThreeParty, setAcceptThreeParty] = useState(false);

  useEffect(() => {
    // const three_party_accept = localStorage.getItem('three_party_accept');
    // const cookie_accept = localStorage.getItem('cookie_accept');

    const three_party_accept = cookies.get("three_party_accept");
    const cookie_accept = cookies.get("cookie_accept");
    if (cookie_accept === "true") {
      setAcceptCookie(true);
    }

    if (three_party_accept === "true") {
      setAcceptThreeParty(true);
    }
  }, []);

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
                    <span className="heading--block__text">Privacy Settings</span>
                  </h4>
                </div>
                <div
                  className="col-lg-6 col-md-7 col-sm-8 col-12 offset-lg-1 offset-md-0 offset-sm-2 blogDetail__content__right js-animation--fade"
                  data-screen-offset=".15"
                  data-offset=".15"
                >
                  <form action="">
                    <div className="dynamic-content">
                      <div dangerouslySetInnerHTML={{ __html: privacy_setting_description }} />
                      <h2>Strictly Necessary Cookies</h2>
                      <div dangerouslySetInnerHTML={{ __html: block_1 }} />
                      <div className="row">
                        <div className="col-auto me-4">
                          <div className="form-radio">
                            <label className="form-radio-label">
                              <input
                                type="radio"
                                onChange={(e) => {
                                  const {
                                    target: { checked },
                                  } = e;
                                  if (checked) {
                                    // localStorage.setItem("cookie_accept","true");
                                    cookies.set("cookie_accept", "true");
                                    setAcceptCookie(true);
                                  }
                                }}
                                className="form-check-input"
                                name="cookies"
                                id="preferences-enable"
                                value="preferences"
                                checked={acceptCookie}
                              />
                              <span className="check-label--text">Enable</span>
                            </label>
                          </div>
                        </div>
                        <div className="col-auto">
                          <div className="form-radio">
                            <label className="form-radio-label">
                              <input
                                type="radio"
                                onChange={(e) => {
                                  const {
                                    target: { checked },
                                  } = e;
                                  if (checked) {
                                    // localStorage.setItem("cookie_accept","false");
                                    cookies.remove("cookie_accept");
                                    setAcceptCookie(false);
                                  }
                                }}
                                className="form-check-input"
                                name="cookies"
                                id="preferences-disable"
                                value="disabled"
                                checked={!acceptCookie}
                              />
                              <span className="check-label--text">Disable</span>
                            </label>
                          </div>
                        </div>
                      </div>
                      <br />
                      <br />
                      <h2>3rd Party Cookies</h2>
                      <div dangerouslySetInnerHTML={{ __html: block_2 }} />
                      <div className="row">
                        <div className="col-auto me-4">
                          <div className="form-radio">
                            <label className="form-radio-label">
                              <input
                                type="radio"
                                onChange={(e) => {
                                  const {
                                    target: { checked },
                                  } = e;
                                  if (checked) {
                                    // localStorage.setItem("three_party_accept","true");
                                    cookies.set("three_party_accept", "true");
                                    setAcceptThreeParty(true);
                                  }
                                }}
                                className="form-check-input"
                                name="three_party"
                                id="three-party-enable"
                                value="enable"
                                checked={acceptThreeParty}
                              />
                              <span className="check-label--text">Enable</span>
                            </label>
                          </div>
                        </div>
                        <div className="col-auto">
                          <div className="form-radio">
                            <label className="form-radio-label">
                              <input
                                type="radio"
                                onChange={(e) => {
                                  const {
                                    target: { checked },
                                  } = e;
                                  if (checked) {
                                    // localStorage.setItem("three_party_accept","false");
                                    cookies.remove("three_party_accept");
                                    setAcceptThreeParty(false);
                                  }
                                }}
                                className="form-check-input"
                                name="three_party"
                                id="three-party-disable"
                                value="disable"
                                checked={!acceptThreeParty}
                              />
                              <span className="check-label--text">Disable</span>
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PolicyStyles>
  );
}

export default PrivacySettingsPage;
