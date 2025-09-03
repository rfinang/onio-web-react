import Link from "next/link";
import { Typography, Button } from "../ui";
import { VideoInteractiveStyles } from "../styles/home/VideoInterative";

import ImageComp from "../common/Image";
import { useEffect } from "react";
function HomeSmartHub({ data, customClass = "" }) {
  if (!data) return null;
  const { description, links, image_tabs, title } = data;
  useEffect(() => {
    const items = document.querySelectorAll(".videoInteractive__switch a");
    const images = document.querySelectorAll(".videoInteractive__element__image__item");
    items.forEach((item) => {
      item.addEventListener("click", (e) => {
        e.preventDefault();
        if (item.classList.contains("active")) {
          return;
        }
        items.forEach((el) => {
          el.classList.remove("active");
        });
        item.classList.add("active");
        const target = item.getAttribute("href");
        images.forEach((el) => {
          el.classList.remove("active");
          if (el.getAttribute("id") === target) {
            el.classList.add("active");
          }
        });
      });
    });
  }, []);
  return (
    <VideoInteractiveStyles
      className={`videoInteractive videoInteractive--smarthub ${customClass ? customClass : ""}`}
    >
      <div className="videoInteractive__container container">
        <div className="row spacing--bottom--sm">
          <div className="col-lg-6 col-md-7 col-12 mb-md-0 mb-4 pb-md-0 pb-2">
            {/* {description && (
              <ul className="ul-reset h5 d-sm-block d-none text-primary">
                <li></li>
              </ul>
            )} */}
            <Typography 
              variant="h5" 
              className="mb-0 text-primary js-animation--lines"
            >
              {description}
            </Typography>
          </div>
          <div className="col-md-auto col-12 ms-md-auto">
            {links && (
              <div className="d-md-flex align-items-end flex-column">
                {links.map((item) => (
                  <Button
                    key={item.id}
                    as={Link}
                    href={item.url}
                    variant="link"
                    color="black"
                    hasArrow
                    className="js-animation--fade"
                    target={item.open_new_tab ? "_blank" : "_self"}
                  >
                    {item.label}
                  </Button>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="videoInteractive__inner">
          <Typography 
            variant="hero" 
            as="h2"
            className="videoInteractive__heading mb-0 text-center text-primary"
          >
            <span className="d-block js-animation--chars--2d">{title[0]?.text_line}</span>

            <span className="d-block js-animation--chars--2d">{title[1]?.text_line}</span>
          </Typography>
          {image_tabs && (
            <div className="videoInteractive__element">
              <div className="row justify-content-center">
                <div className="col-sm-6 col-lg-7 js-animation--fade">
                  <div className="videoInteractive__element__image">
                    {image_tabs.map((item, index) => (
                      <div
                        key={item.id}
                        className={`videoInteractive__element__image__item ${
                          index === 1 ? "active" : ""
                        }`}
                        id={`#image_${index + 1}`}
                      >
                        <ImageComp image={item.image} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        {image_tabs && (
          <div className="videoInteractive__switch">
            <ul>
              {image_tabs.map((item, index) => (
                <li key={item.id}>
                  <a
                    href={`#image_${index + 1}`}
                    title={item.title}
                    className={`videoInteractive__switch__link ${index === 1 ? "active" : ""}`}
                  >
                    {item.title}
                  </a>
                </li>
              ))}
              {/* <li>
                <a
                  href="#image_2"
                  title="Look Inside"
                  className="videoInteractive__switch__link active"
                >
                  Look Inside
                </a>
              </li> */}
            </ul>
          </div>
        )}
      </div>
    </VideoInteractiveStyles>
  );
}

export default HomeSmartHub;
