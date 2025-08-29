import Link from "next/link";
import ImageComp from "../../common/Image";
import { BatterylessStyles } from "../../styles/product/Batteryless";
import Energy from "./Energy";
import KeyFeature from "./KeyFeature";
import { useAppContext } from "../../../context/AppContext";
function Batteryless({ getStart, sectionEnergy, sectionKeyFeature }) {
  if (!getStart) return null;
  const { label, description, links, image, mobile_image } = getStart;
  const { dispatch } = useAppContext();
  const onClickGetStartedItem = (reasoneToContact) => () => {
    return dispatch({
      type: "change_contact",
      value: reasoneToContact,
    });
  };
  return (
    <BatterylessStyles>
      <div className="ppBatteryless bg-dark">
        <div className="ppBatteryless__container container">
          {getStart && (
            <>
              <div className="row ppBatteryless__top mb-md-3 mb-5 pb-md-0 pb-2">
                <div className="col-md-6 col-12 mb-md-2 mb-4 text-white ppBatteryless__top__left desc--large">
                  <p className="js-animation--lines is-animation-loading" data-screen-offset=".8">
                    {description}
                  </p>
                </div>
                <div className="col-lg-4 col-md-5 col-12 offset-lg-2 offset-md-1 ppBatteryless__top__right pt-1">
                  <h4
                    className="heading--block heading--block--white mb-4 d-inline-block js-animation--fade is-animation-loading"
                    data-screen-offset="1"
                    data-offset=".15"
                  >
                    <span className="heading--block__text">{label}</span>
                  </h4>
                  {links && (
                    <ul className="overMenu__accordian ul-reset">
                      {links.map((item, index) => {
                        const { id, url, label } = item;
                        if (url === "#contact-form-talk") {
                          return (
                            <li
                              key={id}
                              className="accordian__item js-animation--fade"
                              data-offset=".1"
                              data-screen-offset={1 + (index + 1) / 10}
                            >
                              <a
                                href={url}
                                data-bs-toggle="modal"
                                data-bs-target="#contactModal"
                                onClick={onClickGetStartedItem(url)}
                                className="accordian__item__link accordian__item__link--white"
                              >
                                <div className="row g-0">
                                  <div className="col">
                                    <h6 className="h6 accordian__item__link__text mb-0">{label}</h6>
                                  </div>
                                  <div className="col-auto accordian__item__link__icon">
                                    <span className="iconLink iconLink--arrow iconLink--arrow--oval iconLink--arrow--large iconLink--arrow--white">
                                      <svg
                                        width="16"
                                        height="28"
                                        viewBox="0 0 16 28"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="svg"
                                      >
                                        <path
                                          d="M1.57715 1.61572L13.9615 14.0001L1.57715 26.3844"
                                          stroke="white"
                                          strokeWidth="2"
                                        ></path>
                                      </svg>
                                    </span>
                                  </div>
                                </div>
                              </a>
                            </li>
                          );
                        }
                        return (
                          <li
                            key={id}
                            className="accordian__item js-animation--fade"
                            data-offset=".1"
                            data-screen-offset={1 + (index + 1) / 10}
                          >
                            <Link href={url} legacyBehavior>
                              <a className="accordian__item__link accordian__item__link--white">
                                <div className="row g-0">
                                  <div className="col">
                                    <h6 className="h6 accordian__item__link__text mb-0">{label}</h6>
                                  </div>
                                  <div className="col-auto accordian__item__link__icon">
                                    <span className="iconLink iconLink--arrow iconLink--arrow--oval iconLink--arrow--large iconLink--arrow--white">
                                      <svg
                                        width="16"
                                        height="28"
                                        viewBox="0 0 16 28"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="svg"
                                      >
                                        <path
                                          d="M1.57715 1.61572L13.9615 14.0001L1.57715 26.3844"
                                          stroke="white"
                                          strokeWidth="2"
                                        ></path>
                                      </svg>
                                    </span>
                                  </div>
                                </div>
                              </a>
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </div>
              </div>
              {image && (
                <>
                  <figure className="image__object-fit d-sm-block d-none spacing--bottom--md pb-2 image--radius  js-animation--fade--none">
                    <ImageComp image={image} />
                  </figure>

                  <figure className="image__object-fit d-sm-none d-block spacing--bottom--md image--radius  js-animation--fade--none">
                    <ImageComp image={mobile_image ? mobile_image : image} />
                  </figure>
                </>
              )}
            </>
          )}

          <Energy sectionEnergy={sectionEnergy} />

          <KeyFeature sectionKeyFeature={sectionKeyFeature} />
        </div>
      </div>
    </BatterylessStyles>
  );
}

export default Batteryless;
