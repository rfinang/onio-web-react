import styled from "styled-components";

export const HomeQuickStyles = styled.div`
  .parallaxBg {
    overflow: hidden;
    position: relative;
    padding-top: 13.5rem;
    padding-bottom: 6rem;
  }
  .parallaxBg__image {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .parallaxBg__content {
    position: relative;
    z-index: 1;
  }
  .parallaxBg__content .container:before {
    content: "";
    width: 1px;
    margin-left: -1px;
    float: left;
    height: 0;
    padding-top: 35.32684%;
  }
  .parallaxBg__content .container:after {
    content: "";
    display: block;
    clear: both;
  }
  .parallaxBg--productPage {
    padding-top: 11.5rem;
    padding-bottom: 8rem;
  }
  .parallaxBg--productPage .parallaxBg__content .container:before {
    content: "";
    width: 1px;
    margin-left: -1px;
    float: left;
    height: 0;
    padding-top: 21.488178025%;
  }
  .parallaxBg--productPage .parallaxBg__content .container:after {
    content: "";
    display: block;
    clear: both;
  }
  .parallaxBg--productPage .parallaxBg__image {
    border-radius: 0 0 var(--border-radius) var(--border-radius);
    overflow: hidden;
  }

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

  .iconLink {
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.4s cubic-bezier(0.33, 1, 0.68, 1);
  }
  @media (min-width: 992px) {
    .iconLink {
      border: 2px solid;
    }
  }
  @media (max-width: 991.98px) {
    .iconLink {
      border: 1.5px solid;
    }
  }
  .iconLink svg path {
    transition: stroke 0.4s cubic-bezier(0.33, 1, 0.68, 1);
  }
  @media (min-width: 992px) {
    .iconLink--download--small {
      width: 3rem;
      height: 3.8rem;
    }
  }
  @media (min-width: 576px) and (max-width: 991.98px) {
    .iconLink--download--small {
      width: 2rem;
      height: 2.5384615385rem;
    }
  }
  @media (max-width: 575.98px) {
    .iconLink--download--small {
      width: 22px;
      height: 28px;
    }
  }
  .iconLink--download--small svg {
    position: relative;
    top: 0.05em;
  }
  @media (min-width: 576px) and (max-width: 767.98px) {
    .iconLink--download--small svg {
      width: 1.3076923077rem;
      height: auto;
    }
  }
  @media (max-width: 575.98px) {
    .iconLink--download--small svg {
      width: 15px;
    }
  }
  .iconLink--download--red {
    border-color: #ff6231 !important;
  }
  .iconLink--download--red svg path {
    stroke: #ff6231;
  }
  .iconLink--download--silver {
    border-color: #aeadad !important;
  }
  .iconLink--download--silver svg path {
    stroke: #aeadad;
  }
  @media (min-width: 992px) {
    .iconLink--arrow--small {
      height: 3.5rem;
      width: 3.5rem;
    }
  }
  @media (min-width: 576px) and (max-width: 991.98px) {
    .iconLink--arrow--small {
      width: 2.5384615385rem;
      height: 2.5384615385rem;
    }
  }
  @media (max-width: 575.98px) {
    .iconLink--arrow--small {
      width: 26px;
      height: 26px;
    }
  }
  .iconLink--arrow--small svg {
    position: relative;
    left: -0.15em;
  }
  @media (min-width: 576px) and (max-width: 767.98px) {
    .iconLink--arrow--small svg {
      width: 1.3846153846rem;
      height: auto;
    }
  }
  @media (max-width: 575.98px) {
    .iconLink--arrow--small svg {
      width: 15px;
    }
  }
  @media (min-width: 992px) {
    .iconLink--arrow--large {
      height: 4.6rem;
      width: 4.6rem;
    }
  }
  @media (max-width: 991.98px) {
    .iconLink--arrow--large {
      height: 3rem;
      width: 3rem;
    }
  }
  .iconLink--arrow--large svg {
    position: relative;
    left: 0.1em;
  }
  @media (min-width: 576px) and (max-width: 991.98px) {
    .iconLink--arrow--large svg {
      width: 1.1rem;
      height: auto;
    }
  }
  @media (max-width: 575.98px) {
    .iconLink--arrow--large svg {
      width: 10px;
    }
  }
  .iconLink--arrow--oval {
    border-radius: 50%;
  }
  .iconLink--arrow--silver {
    border-color: #aeadad !important;
  }
  .iconLink--arrow--silver svg path {
    stroke: #aeadad;
  }
  .iconLink--arrow--white {
    border-color: #ffffff !important;
  }
  .iconLink--arrow--white svg path {
    stroke: #ffffff;
  }
  .iconLink--arrow--black {
    border-color: #222021 !important;
  }
  .iconLink--arrow--black svg path {
    stroke: #222021;
  }
  .iconLink--arrow--red {
    border-color: #ff6231 !important;
  }
  .iconLink--arrow--red svg path {
    stroke: #ff6231;
  }

  .relateLink {
    margin-bottom: 2rem;
  }
  .relateLink__link {
    height: 100%;
    padding: 1.6rem 2.2rem 2.6rem 2.2rem;
  }
  @media (any-hover: hover) {
    .relateLink__link:hover {
      text-decoration: none;
    }
    .relateLink__link:hover .iconLink--arrow--large {
      background-color: #ffffff;
    }
    .relateLink__link:hover .iconLink--arrow--large svg path {
      stroke: #222021;
    }
    .relateLink__link:hover:before {
      opacity: 0;
    }
  }
  .relateLink__heading {
    margin-bottom: 3rem;
  }
  @media (min-width: 576px) {
    .relateLink__heading {
      min-height: 20.7rem;
    }
  }
  @media (min-width: 992px) {
    .relateLink__heading {
      min-height: 21.8rem;
    }
  }
  @media (max-width: 575.98px) {
    .relateLink__heading {
      min-height: 50px;
    }
  }
`;
