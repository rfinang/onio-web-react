import Link from "next/link";
import { AccordianStyles } from "../styles/elements/accordian";
import { HeroImageStyles, HomeDropOverMenu } from "../styles/home/HeroImage";
import ImageComp from "../common/Image";
import { Button, Typography } from "../ui";
import Slider from "react-slick";
import { useState, useEffect } from "react";


function HeroBanner({ banners, bannerLinks }) {
  // Fix: Check if banners exists and has content
  if (!banners || !Array.isArray(banners) || banners.length === 0 || !bannerLinks)
    return (<></>);

  let initDotColor = banners[0]?.text_color ?? 'white';
  const [dotColor, setDotColor] = useState(initDotColor);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Ensure banner is marked as loaded for Safari
    const timer = setTimeout(() => setIsLoaded(true), 10);
    return () => clearTimeout(timer);
  }, []);

  const settings = {
        // Hide dots when only 1 slide
        dots: banners.length > 1,
        arrows: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        // Disable autoplay when only 1 slide
        autoplay: banners.length > 1,
        autoplaySpeed: 4000,
        customPaging: (i) => <span>{i + 1}</span>,
        appendDots: (dots) => (
            <div>
                <div className="container">
                    <ul className="ul-reset"> {dots} </ul>
                </div>
            </div>
        ),
        beforeChange: function (current, next) {
            if (banners[next]?.text_color) {
                setDotColor(banners[next].text_color);
            }
        }
    };

  return (
    <>
      <HeroImageStyles>
          <div
              className={`heroSlide dot-${dotColor} js-animation--fade--none ${isLoaded ? 'hero-loaded' : ''}`}
              style={{ 
                opacity: 1, 
                visibility: 'visible',
                transform: 'translateZ(0)', // Force hardware acceleration in Safari
                WebkitTransform: 'translateZ(0)'
              }}
          >
            <Slider {...settings}>
          {banners.map((item) => {
            const { id, title, mobile_title, description, hide_desc_mobile, link_to, icon, image, mobile_image, text_color, show_links } = item;
            let banner_mobile_title = mobile_title ?? title;
            return (
                <div key={id} className="slide-item">
                  <div className="hero__item">
                    <div className="heroImage">
                  <div className="heroImage__poster">
                    <div className="heroImage__poster__inner image__object-fit js-animation--image is-animation-loading">
                      {image && (
                          <ImageComp image={image} preload={true} customClass={mobile_image ? 'd-sm-block d-none' : ''} />
                      )}
                      {mobile_image && (
                          <ImageComp image={mobile_image} preload={true}  customClass={'d-sm-none d-block'}/>
                      )}
                    </div>
                  </div>
                  <div className="heroImage__container">
                    <div className="container">
                      <div className="container__inner">
                        <div className="row h-100 align-items-end">
                          <div className={`col-lg-${show_links ? '6' : '8'} col-md-${show_links ? '6' : '8'} col-sm-8 heroImage__container__content`}>
                            <h1
                                className={`h2 d-sm-block d-none heroImage__container__heading text-${text_color} js-animation--chars is-animation-loading`}
                                data-screen-offset=".4"
                                dangerouslySetInnerHTML={{ __html: title.replaceAll("\n", "<br/>") }}
                            >
                            </h1>
                              <h1
                                  className={`h2 d-sm-none d-block heroImage__container__heading text-${text_color} js-animation--chars is-animation-loading`}
                                  data-screen-offset=".4"
                                  dangerouslySetInnerHTML={{ __html: banner_mobile_title.replaceAll("\n", "<br/>") }}
                              >
                              </h1>
                            <div className="d-sm-flex align-items-start heroImage__container__desc">
                              {icon && (
                                  <span
                                      className="icon js-animation--fade is-animation-loading"
                                      data-screen-offset=".4"
                                  >
                          <img src={icon.url} alt="" />
                        </span>
                              )}
                              <p
                                  className={`h6 mb-0 js-animation--chars is-animation-loading text-${text_color}
                                  ${hide_desc_mobile ? 'd-none d-sm-none d-md-none d-lg-block' : ''}
                                  `}
                                  data-screen-offset=".4"
                                  dangerouslySetInnerHTML={{ __html: description.replaceAll("\n", "<br/>") }}
                              >
                              </p>
                            </div>

                            <div
                                className="d-inline-block mb-0 js-animation--fade is-animation-loading"
                                data-screen-offset="1.2"
                            >
                              <Link href={link_to.url}>
                                <Button 
                                  variant={text_color === 'white' ? 'white' : 'primary'}
                                  size="lg"
                                  className="js-link--btn"
                                >
                                  {link_to.label}
                                </Button>
                              </Link>
                            </div>
                          </div>
                          {bannerLinks && show_links && (
                              <div
                                  className="col-lg-5 col-md-6 col-12 heroImage__container__right d-md-flex justify-content-end pr-0 d-none offset-lg-1 js-animation--fade is-animation-loading"
                                  data-screen-offset="1.6"
                              >
                                <div className="overMenu backdropBlur">
                                  <div className="overMenu__inner">
                                    <div className="overMenuBlur__heading">
                                      <Typography 
                                        variant="section-badge"
                                        className={text_color === 'white' ? 'white' : ''}
                                      >
                                        {bannerLinks.label}
                                      </Typography>
                                    </div>
                                    {bannerLinks.links.length > 0 && (
                                        <AccordianStyles className="ul-reset">
                                          {bannerLinks.links.map((item) => (
                                              <li key={item.id} className="accordian__item">
                                                <Link href={item.url} legacyBehavior>
                                                  <a className={`accordian__item__link accordian__item__link--${text_color}`}>
                                                    <div className="row g-0">
                                                      <div className="col">
                                                        <Typography 
                                                          variant="h6"
                                                          className="accordian__item__link__text mb-0"
                                                        >
                                                          {item.label}
                                                        </Typography>
                                                      </div>
                                                      <div className="col-auto accordian__item__link__icon">
                                          <Button variant="icon" hasIcon="arrow" color={text_color === 'white' ? 'white' : 'black'} size="large" shape="oval" />
                                                      </div>
                                                    </div>
                                                  </a>
                                                </Link>
                                              </li>
                                          ))}
                                        </AccordianStyles>
                                    )}
                                  </div>
                                </div>
                              </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                  </div>
                </div>
            );
          })}

        </Slider>
          </div>
      </HeroImageStyles>
      {bannerLinks && (
        <HomeDropOverMenu className="d-md-none d-block">
          <div className="home__dropOverMenu">
            <div className="container js-animation--fade is-animation-loading">
              <div className="overMenu backdropBlur">
                <div className="overMenu__inner">
                  <div className="overMenuBlur__heading mt-3 mb-3">
                    <Typography 
                      variant="section-badge"
                    >
                      {bannerLinks.label}
                    </Typography>
                  </div>
                  {bannerLinks.links.length > 0 && (
                    <AccordianStyles className="ul-reset">
                      {bannerLinks.links.map((item) => (
                        <li key={item.id} className="accordian__item">
                          <Link href={item.url} legacyBehavior>
                            <a className="accordian__item__link accordian__item__link--black">
                              <div className="row g-0">
                                <div className="col">
                                  <Typography 
                                    variant="h6"
                                    className="accordian__item__link__text mb-0"
                                  >
                                    {item.label}
                                  </Typography>
                                </div>
                                <div className="col-auto accordian__item__link__icon">
                                  <Button variant="icon" hasIcon="arrow" color="black" size="large" shape="oval" />
                                </div>
                              </div>
                            </a>
                          </Link>
                        </li>
                      ))}
                    </AccordianStyles>
                  )}
                </div>
              </div>
            </div>
          </div>
        </HomeDropOverMenu>
      )}
    </>
  );
}

export default HeroBanner;
