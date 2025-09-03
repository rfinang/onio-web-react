import Head from "next/head";
import Link from "next/link";
import { isMobile } from "react-device-detect";
import { Typography } from "../ui";
import Container from "../ui/Container";
import { useAppContext } from "../../context/AppContext";

function BatterylessIntro({ 
  data, 
  spriteConfig,
  StylesComponent 
}) {
  const { dispatch } = useAppContext();

  if (!data) return null;

  const { description, label, title, link_or_video, links } = data;
  const { 
    spriteImage, 
    spritePlaceholder = spriteImage,
    preloadImages = [spriteImage]
  } = spriteConfig || {};

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

  const renderLinks = () => {
    // Handle link_or_video array (batteryless-remote style)
    if (link_or_video) {
      return link_or_video.map((item) => {
        if (item.__component === "sections.video") {
          const { id, label, video, mobile_video } = item;
          if (!video) return null;

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
                <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="23" cy="23" r="22" stroke="#222021" strokeWidth="2" />
                  <path d="M18.5771 10.6155L30.9615 22.9999L18.5771 35.3843" stroke="#222021" strokeWidth="2" />
                </svg>
              </a>
            </li>
          );
        } else if (item.__component === "links.link") {
          const { id, url, label, open_new_tab } = item;
          let isContact = url.startsWith('#contact-form');
          return (
            <li key={id}>
              <Link href={url} legacyBehavior>
                <a
                  data-bs-toggle={isContact ? "modal" : undefined}
                  data-bs-target={isContact ? "#contactModal" : undefined}
                  onClick={isContact ? onClickGetStartedItem(url) : undefined}
                  title={label}
                  target={open_new_tab ? "_blank" : "_self"}
                >
                  {label}
                  <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="23" cy="23" r="22" stroke="#222021" strokeWidth="2" />
                    <path d="M18.5771 10.6155L30.9615 22.9999L18.5771 35.3843" stroke="#222021" strokeWidth="2" />
                  </svg>
                </a>
              </Link>
            </li>
          );
        }
        return null;
      });
    }

    // Handle simple links array (smart-hub style)
    if (links) {
      return links.map((item) => {
        const { id, url, label, open_new_tab } = item;
        return (
          <li key={id}>
            <Link href={url} legacyBehavior>
              <a title={label} target={open_new_tab ? "_blank" : "_self"}>
                {label}
                <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="23" cy="23" r="22" stroke="#222021" strokeWidth="2" />
                  <path d="M18.5771 10.6155L30.9615 22.9999L18.5771 35.3843" stroke="#222021" strokeWidth="2" />
                </svg>
              </a>
            </Link>
          </li>
        );
      });
    }

    return null;
  };

  const renderSpriteImage = () => {
    if (!spriteImage) return null;

    // If placeholder is different from main image, use picture element
    if (spritePlaceholder !== spriteImage) {
      return (
        <picture className="js-image--lazy" data-srcset={`<source srcSet="${spriteImage}"/>`}>
          <img className="js-sprite-img" src={spritePlaceholder} alt="" />
        </picture>
      );
    }

    // Simple img tag for identical placeholder/main image
    return <img className="js-sprite-img" src={spriteImage} alt="" />;
  };

  return (
    <StylesComponent>
      <div className="turnkey-landing-intro">
        <Container>
          {/* First section: Description with sprite animation overlapping */}
          <div className="grid">
            <div className="col-span-12">
              <div className="top">
                <Typography 
                  variant="h3" 
                  className="section-title js-animation--fade is-animation-loading" 
                  data-screen-offset=".2"
                >
                  {description}
                </Typography>
                <div className="product-canvas js-animation--fade is-animation-loading" data-screen-offset=".3">
                  <div className="img">
                    <Head>
                      {preloadImages.map((img, index) => (
                        <link key={index} rel="preload" href={img} as="image" />
                      ))}
                    </Head>
                    {renderSpriteImage()}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Black pill label */}
          {label && (
            <div className="grid">
              <div className="col-span-12">
                <h4 className="heading--block heading--block--black d-inline-block block-title js-animation--fade">
                  <span className="heading--block__text">{label}</span>
                </h4>
              </div>
            </div>
          )}
          
          {/* Bottom section: Large title on left, links on right */}
          <div className="grid md:grid-cols-12 items-end">
            <div className="col-span-12 md:col-span-5">
              {title && (
                <h1 className="info-title js-animation--fade is-animation-loading" data-screen-offset=".1">
                  {title}
                </h1>
              )}
            </div>
            <div className="col-span-12 md:col-span-3">
              {/* Empty column for spacing */}
            </div>
            <div className="col-span-12 md:col-span-4 text-end">
              {(link_or_video || links) && (
                <ul className="info-list js-animation--fade is-animation-loading" data-screen-offset=".4">
                  {renderLinks()}
                </ul>
              )}
            </div>
          </div>
        </Container>
      </div>
    </StylesComponent>
  );
}

export default BatterylessIntro;
