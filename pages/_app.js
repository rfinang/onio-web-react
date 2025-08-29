import React, {useState, useEffect} from "react";
import Cookies from "universal-cookie";
import router from "next/router";
import nProgress from "nprogress";
import styled from "styled-components";
import {AppWrapper} from "../context/AppContext";
import Script from "next/script";
import Layout from "../components/layout";
import {getFooterApi, getGlobalApi, getHeaderApi} from "../api";
import Config from "../config/index";

import "nprogress/nprogress.css";
import "../styles/tailwind.css";

// Configure NProgress
nProgress.configure({ 
  minimum: 0.3,
  speed: 800,
  showSpinner: false // Hide the spinner to reduce visual noise
});

import layout from "../components/helper/layout";
import PageHead from "../components/common/Head";
import useScrollRestoration from "../hooks/useScrollRestoration";

// import axios from 'axios';
//
// axios.defaults.auth = {
//   username: 'onio-web',
//   password: '0okm9ijn'
// }

const LoadingStyles = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background: #f5f5f5;
`;

function MyApp({Component, pageProps}) {
  const {dataHeader, dataGlobal, dataFooter, dataCookie, currentPath, ...rest} = pageProps;
  const [pageLoading, setPageLoading] = useState(false);
  const [acceptCookie, setAcceptCookie] = useState(false);
  const [acceptThreeParty, setAcceptThreeParty] = useState(false);

  const {gtag_id} = dataGlobal;
  const {three_party_accept, cookie_accept} = dataCookie;


  const htmlString = dataGlobal.ga_head;

  useEffect(() => {
    const div = document.createElement('div');
    div.innerHTML = htmlString;
    const script = div.querySelector('script');
    if (script) {
      const newScript = document.createElement('script');
      newScript.src = script.src;
      newScript.defer = script.defer;
      if (script.dataset.domain) {
        newScript.dataset.domain = script.dataset.domain;
      }
      document.body.appendChild(newScript);
    }
  }, []);

  useScrollRestoration(router);

  useEffect(() => {
    const handleRouteStart = (url) => {
      // Only scroll to top on actual route changes, not page reloads
      if (url !== router.asPath) {
        window.scrollTo(0, 0);
      }
      setPageLoading(true);
      // Safely check for search modal
      const searchModalButton = document.querySelector("#searchModal .modal-header button");
      if (searchModalButton) {
        searchModalButton.click();
      }
      nProgress.start();
    };

    const handleRouteComplete = () => {
      setPageLoading(false);
      nProgress.done();
    };

    const handleRouteError = () => {
      setPageLoading(false);
      nProgress.done();
    };

    router.events.on("routeChangeStart", handleRouteStart);
    router.events.on("routeChangeComplete", handleRouteComplete);
    router.events.on("routeChangeError", handleRouteError);

    // Cleanup event listeners
    return () => {
      router.events.off("routeChangeStart", handleRouteStart);
      router.events.off("routeChangeComplete", handleRouteComplete);
      router.events.off("routeChangeError", handleRouteError);
    };
  }, []);

  useState(() => {
    if (typeof window !== "undefined") {
      const threePartyAccept = localStorage.getItem("three_party_accept");
      const cookieAccept = localStorage.getItem("cookie_accept");
      if (cookieAccept === "true") {
        setAcceptCookie(true);
      }
      if (threePartyAccept) {
        setAcceptThreeParty(true);
      }
    }
  }, []);
  useEffect(() => {
    const onPageLoad = () => {
      new layout();
      setPageLoading(false);
      // Ensure nProgress is completed on page load
      nProgress.done();
    };

    // Check if the page has already loaded
    if (document.readyState === "complete") {
      onPageLoad();
    } else {
      window.addEventListener("load", onPageLoad);
      // Remove the event listener when component unmounts
      return () => window.removeEventListener("load", onPageLoad);
    }
  }, []);

  const stringScript = `window.dataLayer = window.dataLayer || [];
        function gtag(){window.dataLayer.push(arguments)}
        gtag('js', new Date());
        gtag('config', '${gtag_id}');`;

  // console.log(dataGlobal.ga_head);

  return (
    <AppWrapper>
      {three_party_accept == "true" && (
        <Script strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=${gtag_id}`}/>
      )}
      {three_party_accept == "true" && (
        <Script
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: stringScript,
          }}
        ></Script>
      )}

      {three_party_accept !== "true" && (
        <Script
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `        window.dataLayer = window.dataLayer || [];
        function gtag(){window.dataLayer.push(arguments);}
        gtag('consent', 'default', {'ad_storage': 'denied','analytics_storage': 'denied'})`,
          }}
        ></Script>
      )}

      {pageLoading && <div id="loading-overlay-document" style={{
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 1000,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        background: '#f5f5f5'
      }}/>}
      <Layout dataHeader={dataHeader} dataGlobal={dataGlobal} dataFooter={dataFooter}>
        <React.Fragment>
        </React.Fragment>
        <PageHead seo={dataGlobal?.default_seo}>
          <meta name="robots" content={`${dataGlobal?.robot_index},${dataGlobal?.robot_follow}`}/>
          <meta property="og:type" content="website"/>
          <meta property="og:url" content={`${Config.HOST_URL}${currentPath}`}/>
        </PageHead>
        <Component {...rest} />
        <Script strategy="lazyOnload" src="/bootstrap.min.js"/>

      </Layout>
    </AppWrapper>
  );
}

MyApp.getInitialProps = async function ({Component, ctx}) {
  let pageProps = {};
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }
  // let dataHeader, dataGlobal, dataFooter;
  //
  // const cacheGlobal = await ClientRedis.get(KeyCache.global)
  // console.log('cacheGlobal', cacheGlobal)
  // if (cacheGlobal) {
  //   dataGlobal = JSON.parse(cacheGlobal);
  // } else {
  //   const res_global = await getGlobalApi();
  //   dataGlobal = res_global.data;
  //   ClientRedis.set(KeyCache.global,JSON.stringify(dataGlobal))
  // }
  //
  // const cacheHeader = await ClientRedis.get(KeyCache.header)
  // console.log('cacheHeader', cacheHeader)
  // if (cacheHeader) {
  //   dataHeader = JSON.parse(cacheHeader);
  // } else {
  //   const res_header = await getHeaderApi();
  //   dataHeader = res_header.data;
  //   ClientRedis.set(KeyCache.header,JSON.stringify(dataHeader))
  // }
  //
  // const cacheFooter = await ClientRedis.get(KeyCache.footer)
  // console.log('cacheFooter', cacheFooter)
  // if (cacheFooter) {
  //   dataFooter = JSON.parse(cacheFooter);
  // } else {
  //   const res_footer = await getFooterApi();
  //   dataFooter = res_footer.data;
  //   ClientRedis.set(KeyCache.footer,JSON.stringify(dataFooter))
  // }
  const [dataHeader, dataGlobal, dataFooter] = await Promise.all([
    getHeaderApi(),
    getGlobalApi(),
    getFooterApi(),
  ]);

  pageProps.query = ctx.query;
  return {
    pageProps: {
      ...pageProps,
      dataHeader: dataHeader.data.data,
      dataGlobal: dataGlobal.data.data,
      dataFooter: dataFooter.data.data,
      dataCookie: {
        three_party_accept: ctx.req.cookies.three_party_accept,
        cookie_accept: ctx.req.cookies.cookie_accept,
      },
      currentPath: ctx.asPath
    },
  };
};
export default MyApp;
