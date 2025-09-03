import styled from "styled-components";

export const HeroImageStyles = styled.div`
  .slick-track {
    display: flex !important;
  }
  .slick-slide {
    height: inherit !important;
    & > div {
        height: 100%; 
    }
    .slide-item {
        height: 100%;
        .hero__item {
            height: 100%;
        }
    }
  }
  .heroSlide .slick-dots {
    z-index: 5;
    bottom: 4rem;
    left: 0;
    width: 100%;
  }
  .heroSlide .slick-dots ul {
    margin-bottom: 0;
    text-align: left;
  }
  .heroSlide .slick-dots li {
    width: auto;
    height: auto;
    margin: 0;
  }
  .heroSlide .slick-dots li + li {
    margin-left: 10px;
  }

  
  .heroSlide {
       /* Safari-specific optimizations */
       -webkit-backface-visibility: hidden;
       -webkit-transform: translateZ(0);
       transform: translateZ(0);
       will-change: opacity, visibility;
       
       /* Ensure immediate visibility in Safari */
       &.js-animation--fade--none {
         opacity: 1 !important;
         visibility: visible !important;
         -webkit-animation-fill-mode: forwards;
         animation-fill-mode: forwards;
       }
       
       &.dot-black {
          .slick-dots li span {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 3.4rem;
            height: 3.4rem;
            border: 2px solid var(--black);
            color: var(--black);
            border-radius: 50%;
            font-weight: 400;
            font-size: 2rem;
            line-height: 2.4rem;
            transition: background-color 0.4s ease, color 0.4s ease;
          }
          .slick-dots li span:hover,
          .slick-dots li.slick-active span {
            color: #fff;
            background-color: var(--black);
          }
       }
       &.dot-white {
          .slick-dots li span {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 3.4rem;
            height: 3.4rem;
            border: 2px solid #fff;
            color: #fff;
            border-radius: 50%;
            font-weight: 400;
            font-size: 2rem;
            line-height: 2.4rem;
            transition: background-color 0.4s ease, color 0.4s ease;
          }
          .slick-dots li span:hover,
          .slick-dots li.slick-active span {
            background-color: #fff;
            color: var(--black);
          }
       }
  }
  
  position: relative;
  z-index: 10;
  .backdropBlur--hover {
    position: relative;
  }
  .backdropBlur--hover .backdropBlur__inner {
    position: relative;
  }
  .backdropBlur--hover:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    transition: opacity 0.3s cubic-bezier(0.33, 1, 0.68, 1);
  }
  @supports (backdrop-filter: blur(30px)) {
    .backdropBlur--hover:before {
      backdrop-filter: blur(10px);
    }
  }
  @supports not (backdrop-filter: blur(30px)) {
    .backdropBlur--hover:before {
      background-color: rgba(90, 92, 91, 0.5);
    }
  }
  @supports (backdrop-filter: blur(30px)) {
    .backdropBlur:not(.backdropBlur--hover) {
      backdrop-filter: blur(10px);
    }
  }
  @supports not (backdrop-filter: blur(30px)) {
    .backdropBlur:not(.backdropBlur--hover) {
      background-color: rgba(90, 92, 91, 0.5);
    }
  }

  .overMenu {
    max-width: 52rem;
    width: 100%;
    padding: 5.2rem 4rem 4rem 4rem;
    overflow: hidden;
    @media (max-width: 1399px) {
      padding: 4.55rem 3.5rem 3.5rem 3.5rem;
      max-width: 455px;
    }
  }

  .heroImage {
    position: relative;
    z-index: 1;
    height: 100%;
  }
  .content-black {
    color: #222021;
  }
  .heroImage__container__content {
    padding-bottom: 23.5rem;
    /* Add top padding to create breathing room under the header */
    @media (min-width: 1200px) {
      padding-top: 12rem;
    }
    @media (min-width: 740px) and (max-width: 1199.98px) {
      padding-top: 8rem;
    }
    @media (min-width: 740px) and (max-width: 1199.98px) {
      padding-bottom: 8rem;
    }
    @media (max-width: 739px) {
      padding-bottom: 172px;
      padding-top: 133px;
    }
  }
  @media (min-width: 1024px) {
    .heroImage__container .container {
      height: 79.625rem;
    }
  }
  @media (min-width: 1400px) {
    .heroImage__container .container {
      height: 91rem;
    }
  }
  @media (min-width: 740px) and (max-width: 1023px) {
    .heroImage__container .container {
      height: 550px;
    }
  }
  @media (max-width: 739px) {
    .heroImage__container .container {
      height: auto;
      min-height: 750px;
    }
  }
  .heroImage__poster {
    width: 100%;
    overflow: hidden;
    background: #f5f5f5;
    border-radius: 0 0 var(--border-radius) var(--border-radius);
    @media (max-width: 739px) {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: -1;
    }
  }
  .heroImage__poster__inner video {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
  .heroImage__poster__inner picture {
    object-fit: cover;
    height: 100%;
  }

  @media (min-width: 1024px) {
    .heroImage__poster__inner {
      height: 79.625rem;
    }
  }
  @media (min-width: 1400px) {
    .heroImage__poster__inner {
      height: 91rem;
    }
  }
  @media (min-width: 740px) and (max-width: 1023px) {
    .heroImage__poster__inner {
      height: 550px;
    }
  }
  @media (max-width: 739px) {
    .heroImage__poster__inner {
      height: 100%;
    }
  }
  .heroImage__container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    @media (max-width: 739px) {
      position: relative;
    }
  }
  .heroImage__container .container {
    position: relative;
  }
  .heroImage__container__right {
    margin-bottom: 13.4rem;
    @media (min-width: 1024px) and (max-width: 1199.98px) {
      margin-bottom: 6rem;
    }
  }
  .heroImage__container__heading {
    margin-bottom: 5.8rem;
    /* max-width: 55.4rem;
    @media (min-width: 1600px) {
      max-width: 67.2rem;
    } */
  }
  @media (max-width: 1023px) {
    .heroImage__container__heading {
      margin-bottom: 8.4rem;
    }
  }
  .heroImage__container__desc {
    color: #fff;
    margin-bottom: 5.4rem;
    max-width: 51.4rem;
    @media (min-width: 1600px) {
      max-width: 62.6rem;
    }
  }
  .heroImage__container__desc .icon {
    flex-shrink: 0;
    width: 8.6rem;
    height: 8.6rem;
    display: flex;
    justify-content: center;
    margin-right: 2.9rem;
    margin-top: 0.4rem;
    @media (max-width: 1399px) {
      width: 76.25px;
      height: 76.25px;
    }
    @media (max-width: 739px) {
      width: 70px;
      height: 70px;
      margin-bottom: 21px;
    }
  }
  .heroImage__container__desc .icon img {
    display: block;
    max-width: 100%;
    max-height: 100%;
  }
  @media (max-width: 1023px) {
    .heroImage__container__desc {
      margin-bottom: 32px;
    }
    .heroImage__container__desc .icon {
      width: 72px;
      height: 72px;
      margin-top: 0;
      margin-bottom: 21px;
    }
  }
`;
export const HomeDropOverMenu = styled.div`
  .home__dropOverMenu .overMenu {
    max-width: 100%;
    padding: 40px 0;
  }

  .home__dropOverMenu {
    position: relative;
  }
  .home__dropOverMenu:after {
    content: "";
    position: absolute;
    height: 6rem;
    bottom: -5.9rem;
    background: #f5f5f5;
    display: block;
    width: 100%;
    z-index: 3;
    border-radius: 0 0 var(--border-radius) var(--border-radius);
    transition: opacity 0.3s cubic-bezier(0.33, 1, 0.68, 1);
    will-change: opacity;
  }
`;
