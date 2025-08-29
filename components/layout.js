import { useAppContext } from "../context/AppContext";
import GlobalStyles from "./styles/GlobalStyles";

import Header from "./common/Header";
import Footer from "./common/Footer";
import ContactPopup from "./common/ContactPopup";
import SearchPopup from "./common/SearchPopup";
import VideoPopup from "./common/VideoPopup";
import CookiePopup from "./common/CookiePopup";
import {useEffect} from "react";

export default function Layout({ children, ...rest }) {
  const { dataHeader, dataGlobal, dataFooter } = rest;
  const { state, dispatch } = useAppContext();

  const openContactForm = () => {
      let hash = window.location.hash;

      if (hash.startsWith('#contact-form')){
          dispatch({
              type: "change_contact",
              value: hash,
          });
          const btnContact = document.getElementById("btnOpenContact");
          btnContact.click();
      }

    }

  // useEffect(() => {
  //     document.addEventListener("load", () => {
  //         console.log('aaaaaaaaaae')
  //         openContactForm();
  //     })
  //     // setTimeout(openContactForm, 1000);
  // }, [])

    useEffect(() => {
        // callback function to call when event triggers
        const onPageLoad = () => {
            setTimeout(openContactForm, 1000);

        };

        // Check if the page has already loaded
        if (document.readyState === 'complete') {
            onPageLoad();
        } else {
            window.addEventListener('load', onPageLoad, false);
            // Remove the event listener when component unmounts
            return () => window.removeEventListener('load', onPageLoad);
        }
    }, []);

  return (
    <>
      <GlobalStyles />
      <Header dataHeader={dataHeader} dataGlobal={dataGlobal} dataFooter={dataFooter} />
      <div className="main">{children}</div>
      <Footer dataFooter={dataFooter} dataGlobal={dataGlobal} />
      <ContactPopup contactReason={state?.contactReason} dataGlobal={dataGlobal} />
      <VideoPopup videoURL={state?.urlVideo} />
      <SearchPopup />
      <CookiePopup />
    </>
  );
}
