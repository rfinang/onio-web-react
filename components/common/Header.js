import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import router from "next/router";
import Nav from "./Nav";
import { Button } from "../ui";
import HeaderStyles from "../styles/Header";
import NavMobile from "./NavMobile";
export default function Header({ dataGlobal, dataHeader: header, dataFooter }) {
  const [btnMenuStatus, setBtnMenuStatus] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  router.events.on("routeChangeStart", () => {
    setBtnMenuStatus(false);
  });
  function toggleButtonMenu() {
    setBtnMenuStatus(!btnMenuStatus);
  }

  const prevScrollY = useRef(0);

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      const scrollTop = Math.abs(window.scrollY);
      const lastScrollY = prevScrollY.current;
      if (lastScrollY + 70 < scrollTop) {
        document.getElementsByTagName("header")[0].classList.add("hide");
      } else if (lastScrollY - 70 > scrollTop || scrollTop === 0) {
        document.getElementsByTagName("header")[0].classList.remove("hide");
      }
      // remember current page location to use in the next move
      // setLastScrollY(scrollTop);
      prevScrollY.current = scrollTop;
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);
      // cleanup function
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, []);

  if (!header) return null;
  const social = dataGlobal.social_links;
  const menuPolicy = dataFooter.menu_policy;
  const { logo, menus } = header;
  return (
    <HeaderStyles>
      <div className="container">
        <div className="row align-items-center">
          <div className="header__logo col-auto col-md-2">
            <Link href="/" legacyBehavior>
              <a className="d-block">
                <img src={logo.url} alt="" />
              </a>
            </Link>
          </div>
          <Nav menus={menus} />
          <button
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#searchModal"
            className="btn btn-search"
          >
            <img src="/icons/search.svg" alt="ico" />
          </button>
          <div className="header__action col-auto">
            <Button
              id="btnOpenContact"
              variant="primary"
              size="lg"
              className="js-link--btn"
              data-bs-toggle="modal"
              data-bs-target="#contactModal"
            >
              Contact Us
            </Button>
          </div>
          <div className="header__mobile col-auto">
            <button
              type="button"
              className={`header__mobile__link ${btnMenuStatus ? "active" : ""}`}
              onClick={toggleButtonMenu}
            >
              <span className="header__mobile__icon">
                <span className="header__mobile__line js-header__mobile__line"></span>
                <span className="header__mobile__line js-header__mobile__line"></span>
                <span className="header__mobile__line js-header__mobile__line"></span>
              </span>
            </button>
          </div>
        </div>
      </div>
      <NavMobile menus={menus} social={social} menuPolicy={menuPolicy} isOpen={btnMenuStatus} />
    </HeaderStyles>
  );
}
