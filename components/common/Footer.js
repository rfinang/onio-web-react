import Link from "next/link";
import FooterStyles from "../styles/Footer";
export default function Footer({ dataFooter: footer, dataGlobal }) {
  const social = dataGlobal.social_links;

  if (!footer) return null;

  const { menu_1: firstMenu, menu_2: secondMenu, bottom_description, menu_policy } = footer;
  return (
    <FooterStyles>
      <div className="footer">
        <div className="container">
          <div className="footer__top row">
            <div className="footer__top__logo col-md-2 col-sm-3 col-12 js-animation--fade">
              <a href="/" className="d-inline-block font-0">
                <img src="/logo-footer.svg" className="svg" alt="logo-footer" />
              </a>
            </div>
            <div className="footer__top__hyperlinks col-sm-2 col-6 offset-md-2 offset-sm-1">
              {firstMenu && (
                <ul className="hyperlinks ul-reset">
                  {firstMenu.items.map((item, index) => (
                    <li
                      key={item.id}
                      className="hyperlink__item js-animation--fade"
                      data-offset={index * 0.05 + 0.2}
                    >
                      {item.url !== "#contact-form" ? (
                        <Link href={item.url} legacyBehavior>
                          <a className="hyperlink__item__link nav--link">{item.label}</a>
                        </Link>
                      ) : (
                        <a
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#contactModal"
                          className="hyperlink__item__link nav--link"
                        >
                          {item.label}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className="footer__top__hyperlinks col-md-3 col-sm-3 col-6 offset-md-3 offset-sm-2">
              {secondMenu && (
                <ul className="hyperlinks ul-reset">
                  {secondMenu.items.map((item, index) => (
                    <li
                      key={item.id}
                      className="hyperlink__item js-animation--fade"
                      data-offset={index * 0.05 + 0.3}
                    >
                      {item.url !== "#contact-form" ? (
                        <Link href={item.url} legacyBehavior>
                          <a className="hyperlink__item__link nav--link">{item.label}</a>
                        </Link>
                      ) : (
                        <a
                          href={item.url}
                          data-bs-toggle="modal"
                          data-bs-target="#contactModal"
                          className="hyperlink__item__link nav--link"
                        >
                          {item.label}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
          <div className="footer__bottom row align-items-end">
            <div className="col-xxl-3 col-md-4 col-sm-6 col-12 footer__bottom__desc">
              {bottom_description && (
                <p className="footer__description mb-0 text-white js-animation--lines">
                  {bottom_description}
                </p>
              )}
            </div>
            <div
              className="col-md-3 col-sm-4 ms-auto footer__bottom__socials js-animation--fade"
              data-offset=".3"
            >
              {social?.length > 0 && (
                <ul className="socials ul-reset">
                  {social.map((item) => (
                    <li key={item.id} className="social__item">
                      <a
                        className="social__item__link social__item__link--fb"
                        href={item.url}
                        target="_blank"
                      >
                        <img src={item.icon.url} className="svg" alt={item.title} />
                      </a>
                    </li>
                  ))}
                </ul>
              )}
              {menu_policy?.items?.length > 0 && (
                <ul className="terms ul-reset mt-sm-2">
                  {menu_policy.items.map((item) => (
                    <li key={item.id} className="term__item">
                      <Link href={item.url} legacyBehavior>
                        <a className="term__item__link">{item.label}</a>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </FooterStyles>
  );
}
