import styled from "styled-components";

export const HomeNewsStyles = styled.div`
  .lastArticles {
    position: relative;
  }
  .lastArticles:after {
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
  @media (min-width: 576px) {
    .lastArticles {
      padding-top: 8rem;
    }
  }
  @media (max-width: 575.98px) {
    .lastArticles {
      padding-top: 20px;
    }
  }

  .article {
    overflow: hidden;
    background-color: #ffffff;
    margin-bottom: 2.4rem;
  }
  @media (min-width: 768px) {
    .article {
      height: 100%;
      height: calc(100% - 2.4rem);
    }
  }
  @media (min-width: 768px) {
    .article {
      border-radius: var(--border-radius);
    }
  }
  @media (max-width: 767.98px) {
    .article {
      border-radius: 20px;
    }
  }
  .article__thumbnail {
    position: relative;
  }
  @media (min-width: 768px) {
    .article__thumbnail {
      height: 39rem;
      width: calc(50% - 16px);
    }
  }
  @media (max-width: 767.98px) {
    .article__thumbnail {
      width: 100%;
    }
  }
  @media (min-width: 992px) {
    .article__thumbnail:before {
      content: "";
      width: 1px;
      margin-left: -1px;
      float: left;
      height: 0;
      padding-top: 99.0366088632%;
    }
    .article__thumbnail:after {
      content: "";
      display: block;
      clear: both;
    }
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
    .article__thumbnail:before {
      content: "";
      width: 1px;
      margin-left: -1px;
      float: left;
      height: 0;
      padding-top: 113.2530120482%;
    }
    .article__thumbnail:after {
      content: "";
      display: block;
      clear: both;
    }
  }
  @media (max-width: 767.98px) {
    .article__thumbnail {
      height: auto;
      padding-top: 55.223880597%;
    }
    .article__thumbnail img {
      position: absolute;
      top: 0;
      left: 0;
    }
  }
  .article__info {
    margin-left: auto;
  }
  @media (min-width: 768px) {
    .article__info {
      width: calc(50% - 12px);
      padding: 3.2rem 3.2rem 3.2rem 0;
    }
  }
  @media (max-width: 767.98px) {
    .article__info {
      width: 100%;
      padding: 18px 18px 20px 18px;
    }
  }
  @media (min-width: 576px) {
    .article__info__meta {
      margin-bottom: 4.8rem;
    }
  }
  @media (max-width: 575.98px) {
    .article__info__meta {
      margin-bottom: 30px;
    }
  }
  .article__info__tags {
    display: flex;
    align-items: center;
  }
  @media (min-width: 768px) {
    .article__info__tags {
      margin-bottom: 2rem;
    }
  }
  @media (max-width: 767.98px) {
    .article__info__tags {
      margin-bottom: 10px;
    }
  }
  .article__info__tags .tag__item--slack {
    margin-left: 0.9rem;
    margin-right: 0.9rem;
    position: relative;
    top: 0.06em;
  }
  .article__info__tags .tag__item__link {
    color: #aeadad;
    transition: color 0.3s cubic-bezier(0.33, 1, 0.68, 1);
  }
  @media (any-hover: hover) {
    .article__info__tags .tag__item__link:hover {
      text-decoration: none;
      color: #222021;
    }
  }
  .article__info__heading {
    margin-bottom: 3rem;
  }
  @media (min-width: 768px) {
    .article__info__heading {
      max-width: 30rem;
      min-height: 12.7rem;
    }
  }
  @media (min-width: 992px) {
    .article--lite .article__info__meta {
      margin-bottom: 8.4rem;
    }
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
    .article--lite .article__info__meta {
      margin-bottom: 5rem;
    }
  }
  @media (max-width: 767.98px) {
    .article--lite .article__info__meta {
      margin-bottom: 20px;
    }
  }
  .article__link {
    display: block;
  }
  @media (min-width: 768px) {
    .article__link {
      height: 100%;
      display: flex;
    }
  }
  @media (any-hover: hover) {
    .article__link:hover {
      text-decoration: none;
    }
    .article__link:hover .iconLink--arrow--large {
      background-color: #222021;
    }
    .article__link:hover .iconLink--arrow--large svg path {
      stroke: #ffffff;
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

`;
