import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import router from "next/router";
import Nav from "./Nav";
import { Button } from "../ui";
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
    <header className="fixed top-0 left-0 right-0 z-[999] bg-white transition-transform duration-[400ms] ease-[cubic-bezier(0.075,0.82,0.165,1)] lg:py-0 max-lg:py-[5.8rem_0_2.7rem] max-lg:h-[129px] [&.hide]:translate-y-[-100%]">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-auto col-md-2 pt-8 pb-8 max-lg:p-[0_1.2rem]">
            <Link href="/" legacyBehavior>
              <a className="d-block">
                <img src={logo.url} alt="" className="max-h-[3.4rem] max-lg:max-w-[9.7rem] max-lg:max-h-[2.6rem]" />
              </a>
            </Link>
          </div>
          <Nav menus={menus} />
          <Button
            type="button"
            variant="ghost"
            size="sm"
            data-bs-toggle="modal"
            data-bs-target="#searchModal"
            className="p-0 border-0 w-[35px] h-[35px] ml-auto mr-[8.75px]"
          >
            <img src="/icons/search.svg" alt="ico" />
          </Button>
          <div className="col-auto max-lg:hidden">
            <Button
              id="btnOpenContact"
              variant="outline"
              size="lg"
              className="js-link--btn"
              data-bs-toggle="modal"
              data-bs-target="#contactModal"
            >
              Contact Us
            </Button>
          </div>
          <div className="col-auto lg:hidden">
            <button
              type="button"
              className={`p-0 border-0 w-[46px] h-[40px] py-[11.5px] px-[10px] bg-transparent ${btnMenuStatus ? "[&_.header__mobile__line:first-child]:translate-x-0 [&_.header__mobile__line:first-child]:translate-y-[7px] [&_.header__mobile__line:first-child]:rotate-45 [&_.header__mobile__line:nth-child(2)]:rotate-[-45deg] [&_.header__mobile__line:nth-child(3)]:opacity-0 [&_.header__mobile__line:nth-child(3)]:translate-y-[-7px]" : ""}`}
              onClick={toggleButtonMenu}
            >
              <span className="block">
                <span className="block border-b-[3px] border-[#222021] mb-[0.30769rem] w-[2.6rem] ml-auto mr-auto transition-all duration-[400ms] ease-linear header__mobile__line js-header__mobile__line"></span>
                <span className="block border-b-[3px] border-[#222021] mb-[0.30769rem] w-[2.6rem] ml-auto mr-auto transition-all duration-[400ms] ease-linear header__mobile__line js-header__mobile__line"></span>
                <span className="block border-b-[3px] border-[#222021] mb-0 w-[2.6rem] ml-auto mr-auto transition-all duration-[400ms] ease-linear header__mobile__line js-header__mobile__line"></span>
              </span>
            </button>
          </div>
        </div>
      </div>
      <NavMobile menus={menus} social={social} menuPolicy={menuPolicy} isOpen={btnMenuStatus} />
    </header>
  );
}
