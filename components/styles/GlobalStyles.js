import { createGlobalStyle } from "styled-components";
import { Heading } from "./common/Heading";
import { Spacing } from "./common/Spacing";
import { PageLink } from "./common/Pagelink";
import { FormStyles } from "./common/Form";
import { IconLink } from "./common/IconLink";
import { AnimationStyles } from "./common/AnimationStyles";
const GlobalStyles = createGlobalStyle`

/*  @font-face {
    font-family: 'Inter';
    src: url('/InterItalic500.woff2') format('woff2'),
    font-weight: 500;
    font-style: italic;
    font-display: swap;
}
  @font-face {
    font-family: 'Inter';
    src: url('/Inter500.woff2') format('woff2'),
    font-weight: 500;
    font-style: normal;
    font-display: swap;
} */

  :root {
    --bs-body-font-weight: 500;
  }
  @media (min-width: 768px) {
    :root {
      --border-radius: 5rem;
      --input-height: 5rem;
      --border-radius-btn: 1rem;
    }
  }
  @media (max-width: 767px) {
    :root {
      --border-radius: 20px;
      --input-height: 40px;
      --border-radius-btn: 6px;
    }
  }
  html {
    /* Tokens are defined in styles/figma-variables.css (single source of truth) */
    --bs-gutter-x: 1.2rem;
    font-size: 62.5%;
    font-weight: 500;
    font-smooth: antialiased;
    -webkit-font-smoothing: antialiased;
  }

  body {
    font-family: "Inter", -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, sans-serif;
    font-size: 1.6rem;
    background: #f5f5f5;
    color: #222021;
  }
  
  /* Override Bootstrap's blue colors - must be very specific but not styled-components */
  body a:not([class*="__link"]):not([class*="Link__"]), 
  .main a:not([class*="__link"]):not([class*="Link__"]), 
  .videoInteractive a:not([class*="__link"]):not([class*="Link__"]),
  ul a:not([class*="__link"]):not([class*="Link__"]),
  div a:not([class*="__link"]):not([class*="Link__"]) {
    color: var(--onio-color-primary) !important;
  }
  body a:not([class*="__link"]):not([class*="Link__"]):hover, 
  .main a:not([class*="__link"]):not([class*="Link__"]):hover, 
  .videoInteractive a:not([class*="__link"]):not([class*="Link__"]):hover,
  ul a:not([class*="__link"]):not([class*="Link__"]):hover,
  div a:not([class*="__link"]):not([class*="Link__"]):hover {
    color: var(--onio-color-primary) !important;
    opacity: 0.8;
  }
  
  /* Override Bootstrap's text color classes */
  .text-primary {
    color: var(--onio-color-primary) !important;
  }
  .text-secondary {
    color: var(--onio-color-secondary) !important;
  }
  .text-accent {
    color: var(--onio-color-accent) !important;
  }
  .text-muted {
    color: var(--onio-color-muted) !important;
  }
  body:not(.site__template-mobile) .is-animation-loading {
    opacity: 0;
  }
  #nprogress .bar {
    z-index: 9999;
    height: 5px;
    background: #AEADAD;
  }
  #nprogress .peg {
    /* box-shadow: 0 0 10px #404040, 0 0 5px #404040; */
    box-shadow: none;
  }
  #nprogress .spinner-icon {
    border-top-color: var(--orange);
    border-left-color: var(--orange);
  }
  .main {
    padding-top: 11.3rem;

    @media (max-width: 1399px) {

      padding-top: 9.891rem;
    }
    @media (max-width: 1023px) {
      padding-top: 12.9rem;
    }
    @media (min-width: 1200px) {
      font-size: 2rem;
    }
    @media (max-width: 739px) {
      font-size: 1.8rem;

    }
    h1, h2, h3, h4, h5, h6 {
      margin-top: 0;
    }
    .dynamic-content {
      a {
        text-decoration: underline;
      }
      h1, h2, h3, h4, h5, h6 {
        margin-top: 0;
        font-weight: bold;
        line-height: 1.3;
        margin-bottom: 3rem;
      }
      h1 {
        font-size: 4rem;
      }
      h2 {
        font-size: 3.2rem;
      }
      h3 {
        font-size: 2.8rem;
      }
      h4 {
        font-size: 2.4rem;
      }
      h5 {
        font-size: 2rem;
      }
      h6 {
        font-size: 1.6rem;
      }
    }
  }
  .cssLoading__parent {
    position: relative;
  }
  
  .lds-ring {
    display: inline-block;
    position: absolute;
    width: 80px;
    height: 80px;
    top: calc(50% - 40px);
    left: calc(50% - 40px);
    visibility: hidden;
    opacity: 0;
    pointer-events: none;
    transition: all 0.6s cubic-bezier(0.33, 1, 0.68, 1);
  }
  .modal-backdrop {
    display: none;
  }
  @media (max-width: 739.98px) {
    .lds-ring {
      transform: scale(0.5);
    }
  }
  .lds-ring.show {
    visibility: visible;
    opacity: 1;
    pointer-events: auto;
    z-index: 9;
  }

  .lds-ring div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 64px;
    height: 64px;
    margin: 8px;
    border: 8px solid #fff;
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: #fff transparent transparent transparent;
  }

  .lds-ring div:nth-child(1) {
    animation-delay: -0.45s;
  }

  .lds-ring div:nth-child(2) {
    animation-delay: -0.3s;
  }

  .lds-ring div:nth-child(3) {
    animation-delay: -0.15s;
  }

  @keyframes lds-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  .reverse {
    transform: rotate(180deg);
  }
  .opacity-0 {
    opacity: 0;
  }
  .bg-red {
    background-color: #ff6231;
  }
  .bg-dark {
    background-color: #222021!important;
  }
  .bg-yellow {
    background-color: #d2fe24!important;
  }
  .text-red {
    color: #ff6231!important;
  }
  .text-white {
    color: #fff!important;
  }
  ${Heading}
  ${Spacing}
  ${PageLink}
  ${FormStyles}
  ${IconLink}
  ${AnimationStyles}

  .resource {
    text-decoration: none !important;
    display: block;
    max-width: 21.6rem;
    padding: 1.2rem 1.5rem 2.1rem 1.5rem;
    transition: all 0.4s cubic-bezier(0.33, 1, 0.68, 1);
    margin-bottom: 2.4rem;
    width: 100%;
  }
  .resource--red {
    color: #ff6231;
  }
  @media (min-width: 1200px) {
    .resource--red {
      border: 2px solid #ff6231;
    }
  }
  @media (max-width: 1199.98px) {
    .resource--red {
      border: 1.5px solid #ff6231;
    }
  }
  @media (any-hover: hover) {
    .resource--red:hover {
      background: #ff6231;
      color: #222021;
    }
    .resource--red:hover .iconLink {
      background: #222021;
      border-color: #222021 !important;
    }
    .resource--red:hover .iconLink svg path {
      stroke: #ff6231;
    }
  }
  .resource--black {
    border: 2px solid #222021;
  }
  .resource--black:hover {
    background-color: #222021;
    color: #fff;
  }
  .resource--black:hover .iconLink {
    background-color: #fff;
  }
  .resource__heading {
    margin-bottom: 3rem;
    min-height: 11.2rem;
  }
  .resource__icon {
    position: relative;
    left: 0.25em;
  }



  .loading {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    background-color: rgba(255, 255, 255, .6);
    img {
      display: block;
      max-width: 70px;
    }
  }
  .container__inner {
    position: relative;
    height: 100%;
  }
  
  p {
    margin-bottom: 1.25em;
  }
  
  .metaLabel {
    line-height: 1.1428571429;
  }
  @media (min-width: 1200px) {
    .metaLabel {
      font-size: 1.4rem;
    }
  }
  @media (max-width: 1199.98px) {
    .metaLabel {
      font-size: 12px;
    }
  }
  
  
  .t-nav {
    font-size: 1.8rem;
    line-height: 128%;
    @media (max-width: 1399px) {
      font-size: 1.575rem;
    }
  }
  .t-ingress {
    font-size: 3.5rem;
    line-height: 114%;
    @media (max-width: 767px) {
      font-size: 2.4rem;
      line-height: 1.25;
    }
  }
  .t-body {
    font-weight: 500;
    font-size: 2rem;
    line-height: 130%;
    @media (max-width: 767px) {
      font-size: 1.37rem;
      line-height: 1.3;
    }
  }
  .t-large {
    font-size: 2.4rem;
    line-height: 121%;
    @media (max-width: 767px) {
      font-size: 1.64rem;
      line-height: 1.21;
    }
  }
  .t-small {
    font-weight: 500;
    font-size: 1.4rem;
    line-height: 114%;
  }
  a {
    display: inline-block;
    text-decoration: none;
    color: var(--black);
    &:hover {
      color: var(--black);
      text-decoration: underline;
    }
  }
  .ul-reset {
    list-style: none;
    padding-left: 0;
  }
  /* Legacy .btn styles - DEPRECATED
   * All buttons now use Tailwind Button component 
   * Keeping minimal styles only for demo pages and edge cases
   */
  .btn {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 2.3rem;
    min-height: 4.4rem;
    font-size: 2rem;
    font-weight: 500;
    line-height: 2.3rem;
    transition: all 0.4s ease;
    text-decoration: none;
    background-color: transparent;
    border-radius: 1rem;
    border: none;
    
    /* Remove conflicting hover states - handled by Tailwind */
    &:focus,
    &:active,
    &:hover {
      text-decoration: none;
      box-shadow: none;
      outline: none;
    }
  }
  /* Removed conflicting bg-white hover styles - handled by Tailwind Button component */
  .scrollable {
    padding-right: 0.5rem;
    overflow-y: auto;
    scroll-behavior: smooth;
    height: 100%;
    &::-webkit-scrollbar {
      width: 3px;
    } 
    &::-webkit-scrollbar-thumb {
      background: #5a5c5b;
    }
    &::-webkit-scrollbar-track {
      background: #f5f5f5;
    }
  }
  .js-link--btn {
    overflow: hidden;
    position: relative;

    .js-link__text {
      display: block;
      overflow: hidden;
      position: relative;

      &__element {
        display: block;
        will-change: transform;

        &.is-clone {
          position: absolute;
          top: 0;
        }
      }
    }
  }
  img {
    display: inline-block;
    max-width: 100%;
  }
  .image__object-fit {
    overflow: hidden;

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
  .image--radius {
    border-radius: var(--border-radius);
    overflow: hidden;
  }
  @media (min-width: 1920px) {
    html {
      font-size: 0.52083333333vw;
    }
  }
  @media (max-width: 768px) {
    .t-small {
      font-size: 1.2rem;
    }
    .t-ingress {
      font-size: 2.4rem;
      line-height: 125%;
    }
    .btn {
      font-size: 1.5rem;
      line-height: 1.8rem;
    }
  }
`;
export default GlobalStyles;
