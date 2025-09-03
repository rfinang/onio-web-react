import styled from "styled-components";

export const BatterylessIntroStyles = styled.div`
  .turnkey-landing-intro {
    padding: 14.1rem 0 4.5rem;
  }
  .turnkey-landing-intro .top {
    position: relative;
    z-index: 5;
  }
  .turnkey-landing-intro .top .section-title {
    margin-bottom: 10rem;
  }
  .turnkey-landing-intro .top .product-canvas {
    width: 49.5rem;
    height: 46.5rem;
    max-width: 88vw;
    max-height: calc(88vw * 465/495);
    margin: 0 auto;
    position: absolute;
    top: 16rem;
    left: 0;
    right: 0;
  }
  .turnkey-landing-intro .top .product-canvas .img {
    height: 100%;
    overflow: hidden;
  }
  .turnkey-landing-intro .top .product-canvas .img img {
    max-width: none;
    display: block;
    height: 100%;
    width: auto;
  }
  
  .turnkey-landing-intro .top .product-canvas .img img.js-sprite-img {
    height: 100% !important;
    width: auto !important;
    max-width: none !important;
    transition: none !important;
    -webkit-transition: none !important;
    -moz-transition: none !important;
    -o-transition: none !important;
    transition-property: none !important;
    transition-duration: 0s !important;
    animation: none !important;
  }
  .turnkey-landing-intro .block-title {
    margin-bottom: 4.7rem;
    background-color: #222021;
    color: #fff;
  }
  .turnkey-landing-intro .info-title {
    margin-bottom: 7.3rem;
    font-weight: 200;
    font-size: 20rem;
    line-height: 100%;
    margin-bottom: 0;
  }
  .turnkey-landing-intro .info-list {
    list-style: none;
    padding-left: 0;
    margin-bottom: 0;
  }
  .turnkey-landing-intro .info-list li {
    border-top: 2px solid #000000;
  }
  .turnkey-landing-intro .info-list li:last-child {
    border-bottom: 2px solid #000000;
  }
  .turnkey-landing-intro .info-list li a {
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    color: #000000;
    padding: 16px 0;
  }
  .turnkey-landing-intro .info-list li a svg circle {
    fill: transparent;
  }
  .turnkey-landing-intro .info-list li a svg path,
  .turnkey-landing-intro .info-list li a svg circle {
    transition: fill 0.4s ease, stroke 0.4s ease;
  }
  .turnkey-landing-intro .info-list li a:hover {
    text-decoration: none;
  }
  .turnkey-landing-intro .info-list li a:hover svg circle {
    fill: #000000;
  }
  .turnkey-landing-intro .info-list li a:hover svg path {
    stroke: #fff;
  }
  .turnkey-landing-intro .videoSlide {
    margin-top: 4.7rem;
  }

  @media (max-width: 1023.98px) {
    .turnkey-landing-intro .info-title {
      font-size: 10rem;
    }
    .turnkey-landing-intro .block-title {
      margin-bottom: 5.3rem;
    }
    .turnkey-landing-intro .top {
      display: flex;
      flex-wrap: wrap;
    }
    .turnkey-landing-intro .top .section-title {
      font-size: 2.4rem;
      margin-bottom: 5.4rem;
    }
    .turnkey-landing-intro .top .product-canvas {
      position: relative;
      top: auto;
      order: -1;
    }
    .turnkey-landing-intro .info-list {
      width: 335px;
      max-width: 100%;
      margin-bottom: 54px;
    }
  }
  @media (max-width: 739.98px) {
    .turnkey-landing-intro {
      padding: 2.9230769231rem 0 4.4rem;
    }
    .turnkey-landing-intro .info-title {
      font-size: 72px;
    }
    .turnkey-landing-intro .top .product-canvas {
      width: 248px;
      height: 233px;
      max-width: 88vw;
      max-height: calc(88vw * 465/495);
    }
    .turnkey-landing-intro .info-list {
      margin-bottom: 54px;
      width: 100%;
    }
    .turnkey-landing-intro .info-list li a {
      font-size: 2.2rem;
    }
    .turnkey-landing-intro .info-list li a svg {
      display: block;
      width: 30px;
      height: auto;
    }
    .turnkey-landing-intro .section-title {
      font-size: 24px;
    }
    .turnkey-landing-intro .videoSlide {
      margin-top: 0;
    }
  }
`;