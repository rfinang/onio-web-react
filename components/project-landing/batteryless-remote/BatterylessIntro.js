import { BatterylessIntroStyles } from "../../styles/project-landing/batteryless-remote/BatterylessIntro";
import { useAppContext } from "../../../context/AppContext";
import link from "next/link";
import Head from "next/head";
import {isMobile} from "react-device-detect";
import Link from "next/link";

function BatterylessIntro({ title, label, description, links, link_or_video }) {
  const { dispatch } = useAppContext();
  const onClickGetStartedItem = (reasonToContact) => () => {
    return dispatch({
      type: "change_contact",
      value: reasonToContact,
    });
  };

  const onClickVideoItem = (videoUrl) => () => {
    return dispatch({
      type: "change_video",
      value: videoUrl,
    });
  };

  return (
    <BatterylessIntroStyles>
      <div className="turnkey-landing-intro">
        <div className="container">
          <div className="row">
            <div className="col-12 order-2 order-md-2">
              <div className="top">
                <h3
                  className="h3 section-title js-animation--fade is-animation-loading"
                  data-screen-offset=".2"
                >
                  {description}
                </h3>
                <div
                  className="product-canvas js-animation--fade is-animation-loading"
                  data-screen-offset=".3"
                >
                  <div className="img">
                    <Head>
                      <link rel="preload" href="/turnkey-sprite.png" as="image"/>
                    </Head>
                    <img className="js-sprite-img" src="/turnkey-sprite.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 order-first order-md-2">
              <h4
                className="heading--block heading--block--black d-inline-block block-title js-animation--fade is-animation-loading"
                data-screen-offset=".35"
              >
                <span className="heading--block__text"> {label} </span>
              </h4>
            </div>
            <div className="col-md-6 order-1 order-md-3">
              <h1
                className="info-title js-animation--fade is-animation-loading"
                data-screen-offset=".4"
              >
                {title}
              </h1>
            </div>
            <div className="col-md-4 offset-md-2 order-last align-self-md-end">
              {link_or_video && (
                <div className="js-animation--fade is-animation-loading">
                  <ul className="info-list h6">
                    {/*{links.map((item) => {*/}
                    {/*  const { id, url, label } = item;*/}
                    {/*  return (*/}
                    {/*      <li key={id}>*/}
                    {/*        <a*/}
                    {/*            href={url}*/}
                    {/*            data-bs-toggle="modal"*/}
                    {/*            data-bs-target="#contactModal"*/}
                    {/*            title={label}*/}
                    {/*            onClick={onClickGetStartedItem(url)}*/}
                    {/*        >*/}
                    {/*          {label}*/}
                    {/*          <svg*/}
                    {/*              width="46"*/}
                    {/*              height="46"*/}
                    {/*              viewBox="0 0 46 46"*/}
                    {/*              fill="none"*/}
                    {/*              xmlns="http://www.w3.org/2000/svg"*/}
                    {/*          >*/}
                    {/*            <circle cx="23" cy="23" r="22" stroke="#222021" strokeWidth="2" />*/}
                    {/*            <path*/}
                    {/*                d="M18.5771 10.6155L30.9615 22.9999L18.5771 35.3843"*/}
                    {/*                stroke="#222021"*/}
                    {/*                strokeWidth="2"*/}
                    {/*            />*/}
                    {/*          </svg>*/}
                    {/*        </a>*/}
                    {/*      </li>*/}
                    {/*  );*/}
                    {/*})}*/}
                    {link_or_video.map((item) => {
                      if (item.__component === "sections.video") {
                        const { id, label, video, mobile_video } = item;
                        if (!video) return;

                        let video_url = (isMobile && mobile_video?.url) ? mobile_video.url : video.url;
                        return (
                            <li key={id}>
                              <a
                                  href="#"
                                  data-src-mobile={mobile_video?.url ?? video.url}
                                  data-src={video.url}
                                  onClick={onClickVideoItem(video_url)}
                                  data-bs-toggle="modal"
                                  data-bs-target="#videoModal"
                              >
                                {label}
                                <svg
                                    width="46"
                                    height="46"
                                    viewBox="0 0 46 46"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                  <circle cx="23" cy="23" r="22" stroke="#222021" strokeWidth="2" />
                                  <path
                                      d="M18.5771 10.6155L30.9615 22.9999L18.5771 35.3843"
                                      stroke="#222021"
                                      strokeWidth="2"
                                  />
                                </svg>
                              </a>
                            </li>
                        );

                      } else if (item.__component === "links.link") {

                        const { id, url, label, open_new_tab } = item;
                        let isContact = url.startsWith('#contact-form');
                        return (
                            <li key={id}>
                              <Link href={url}>
                                <a
                                    data-bs-toggle={isContact ? "modal" : undefined}
                                    data-bs-target={isContact ? "#contactModal" : undefined}
                                    onClick={isContact ? onClickGetStartedItem(url) : undefined}
                                    title={label}
                                    target={open_new_tab ? "_blank" : "_self"}>
                                  {label}
                                  <svg
                                      width="46"
                                      height="46"
                                      viewBox="0 0 46 46"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <circle cx="23" cy="23" r="22" stroke="#222021" strokeWidth="2" />
                                    <path
                                        d="M18.5771 10.6155L30.9615 22.9999L18.5771 35.3843"
                                        stroke="#222021"
                                        strokeWidth="2"
                                    />
                                  </svg>
                                </a>
                              </Link>
                            </li>
                        );
                      }
                    })}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </BatterylessIntroStyles>
  );
}

export default BatterylessIntro;
