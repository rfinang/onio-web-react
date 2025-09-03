import { useEffect, useState } from "react";
import styled from "styled-components";
import Cookies from "universal-cookie";
import { Button, Container } from "../ui";
const CookiePopupStyles = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 3rem 0;
  z-index: 9999;
  background-color: #ffffff;
  transform: translateY(100%);
  visibility: hidden;
  transition: transform 0.4s ease-in-out, visibility 0.4s ease-in-out;
  &.show {
    transform: translateY(0);
    visibility: visible;
  }
  .cookieConsent__content p,
  .cookieConsent__content a {
    font-size: 2rem;
    line-height: 1.3;
    font-weight: 500;
    overflow: inherit !important;
  }
  @media (max-width: 739.98px) {
    .cookieConsent .close--cookie {
      width: 100%;
    }
  }
`;
function CookiePopup() {
  const [cookiePopup, setCookiePopup] = useState(false);

  useEffect(() => {
    const cookies = new Cookies();
    // const three_party_accept = localStorage.getItem('three_party_accept');
    // const cookie_accept = localStorage.getItem('cookie_accept');
    const three_party_accept = cookies.get("three_party_accept");
    const cookie_accept = cookies.get("cookie_accept");
    if (cookie_accept !== "true" || three_party_accept !== "true") {
      setCookiePopup(true);
    }
  }, []);

  return (
    <CookiePopupStyles className={cookiePopup ? `show` : ""}>
      <Container>
        <div className="grid md:grid-cols-12 gap-lg items-center">
          <div className="md:col-span-9 col-span-12 cookieConsent__content mb-sm-0 mb-2">
            <p className="mb-0">
              We are using cookies to give you the best experience on our website.{" "}
              <br className="d-md-inline d-none" />
              You can <a href="/privacy-policy">find out more</a> about which cookies we are using
              or switch them off in <a href="/privacy-settings">settings</a>.
            </p>
          </div>
          <div className="md:col-span-3 col-span-12 md:justify-self-end">
            <Button
              variant="primary"
              size="lg"
              className="close--cookie"
              onClick={() => {
                // localStorage.setItem("cookie_accept", "true")
                // localStorage.setItem("three_party_accept", "true")
                const cookies = new Cookies();
                cookies.set("cookie_accept", "true");
                cookies.set("three_party_accept", "true");
                setCookiePopup(false);
              }}
            >
              I agree
            </Button>
          </div>
        </div>
      </Container>
    </CookiePopupStyles>
  );
}

export default CookiePopup;
