import { BatterylessIntroStyles } from "../../styles/project-landing/smart-hub/BatterylessIntro";
import { useAppContext } from "../../../context/AppContext";
import Head from "next/head";
import Link from "next/link";
import link from "next/link";

function BatterylessIntro({ data }) {
  const { dispatch } = useAppContext();
  const onClickGetStartedItem = (reasoneToContact) => () => {
    return dispatch({
      type: "change_contact",
      value: reasoneToContact,
    });
  };

  const { description, label, title, links } = data;
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
                    {/*<img className="js-sprite-img" src="/smart-hub-sprite.png" alt="" />*/}
                    <Head>
                      <link rel="preload" href="/smart-hub-sprite-placeholder.png" as="image"/>
                      <link rel="preload" href="/smart-hub-sprite.png" as="image"/>
                    </Head>
                    <picture className={`js-image--lazy`} data-srcset={`
                      <source srcSet="/smart-hub-sprite.png"/>
                    
                    `}>
                      <img className="js-sprite-img" src="/smart-hub-sprite-placeholder.png" alt="" />
                    </picture>
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
              {links && (
                <div className="js-animation--fade is-animation-loading">
                  <ul className="info-list h6">
                    {links.map((item) => {
                      const { id, url, label, open_new_tab } = item;
                      return (
                        <li key={id}>
                          <Link href={url}>
                            <a title={label} target={open_new_tab ? "_blank" : "_self"}>
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
