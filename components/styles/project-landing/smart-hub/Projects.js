

import styled from "styled-components";

export const SmartHubProjectStyles = styled.div`
  .turnkeyProjects {
    padding-top: 15rem;
    position: relative;
    background-color: var(--onio-color-background);
  }
  .turnkeyProjects:not(.turnkeyProjects--none) {
    padding-bottom: 11rem;
  }
  .turnkeyProjects--none {
    padding-bottom: 10rem;
  }
  .turnkeyProjects--productLandingpage:after {
    content: "";
    position: absolute;
    height: 6rem;
    bottom: -5.9rem;
    background: var(--onio-color-background);
    display: block;
    width: 100%;
    z-index: 3;
    border-radius: 0 0 var(--border-radius) var(--border-radius);
    transition: opacity 0.3s cubic-bezier(0.33, 1, 0.68, 1);
    will-change: opacity;
  }

  .bigThumbnailLink__thumbnail {
    overflow: hidden;
    position: relative;
  }
  @media (min-width: 1024px) {
    .bigThumbnailLink__thumbnail {
      border-radius: var(--border-radius);
    }
  }
  @media (max-width: 1023.98px) {
    .bigThumbnailLink__thumbnail {
      border-radius: 20px;
    }
  }
  @media (min-width: 1400px) {
    .bigThumbnailLink__thumbnail:before {
      content: "";
      width: 1px;
      margin-left: -1px;
      float: left;
      height: 0;
      padding-top: 49.1872791519%;
    }
    .bigThumbnailLink__thumbnail:after {
      content: "";
      display: block;
      clear: both;
    }
  }
  @media (min-width: 740px) and (max-width: 1399.98px) {
    .bigThumbnailLink__thumbnail:before {
      content: "";
      width: 1px;
      margin-left: -1px;
      float: left;
      height: 0;
      padding-top: 60%;
    }
    .bigThumbnailLink__thumbnail:after {
      content: "";
      display: block;
      clear: both;
    }
  }
  @media (max-width: 739.98px) {
    .bigThumbnailLink__thumbnail:before {
      content: "";
      width: 1px;
      margin-left: -1px;
      float: left;
      height: 0;
      padding-top: 100%;
    }
    .bigThumbnailLink__thumbnail:after {
      content: "";
      display: block;
      clear: both;
    }
  }
  .bigThumbnailLink__thumbnail img {
    position: absolute;
    top: 0;
    left: 0;
    max-width: none;
  }
  .bigThumbnailLink__info {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: flex-end;
  }
  @media (min-width: 1024px) {
    .bigThumbnailLink__info {
      padding: 4.5rem 3.8rem;
    }
  }
  @media (max-width: 1023.98px) {
    .bigThumbnailLink__info {
      padding: 22px 18px;
    }
  }
  .bigThumbnailLink__info__inner {
    max-width: 47.9rem;
    width: 100%;
  }
  @media (min-width: 740px) {
    .bigThumbnailLink__info__inner {
      padding: 2rem;
    }
  }
  @media (max-width: 739.98px) {
    .bigThumbnailLink__info__inner {
      padding: 10px;
    }
  }
  .bigThumbnailLink__info__heading {
    margin-bottom: 3rem;
  }
  @media (min-width: 740px) {
    .bigThumbnailLink__info__heading {
      min-height: 14rem;
    }
  }
  @media (max-width: 739.98px) {
    .bigThumbnailLink__info__heading {
      min-height: 60px;
    }
  }
  .bigThumbnailLink__link {
    color: var(--onio-color-white);
    display: block;
    position: relative;
  }
  @media (any-hover: hover) {
    .bigThumbnailLink__link:hover {
      text-decoration: none;
      color: var(--onio-color-white);
    }
    .bigThumbnailLink__link:hover .iconLink--arrow--large {
      background-color: var(--onio-color-white);
    }
    .bigThumbnailLink__link:hover .iconLink--arrow--large svg path {
      stroke: var(--onio-color-primary);
    }
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

  .project {
    margin-bottom: 2.4rem;
  }
  .project__thumbnail {
    position: relative;
    overflow: hidden;
  }
  .project__thumbnail img {
    position: absolute;
    top: 0;
    left: 0;
    max-width: none;
  }
  @media (min-width: 1024px) {
    .project__thumbnail {
      border-radius: var(--border-radius);
    }
  }
  @media (max-width: 1023.98px) {
    .project__thumbnail {
      border-radius: 20px;
    }
  }
  @media (min-width: 1400px) {
    .project__thumbnail:before {
      content: "";
      width: 1px;
      margin-left: -1px;
      float: left;
      height: 0;
      padding-top: 86.9406392694%;
    }
    .project__thumbnail:after {
      content: "";
      display: block;
      clear: both;
    }
  }
  @media (min-width: 740px) and (max-width: 1399.98px) {
    .project__thumbnail:before {
      content: "";
      width: 1px;
      margin-left: -1px;
      float: left;
      height: 0;
      padding-top: 100%;
    }
    .project__thumbnail:after {
      content: "";
      display: block;
      clear: both;
    }
  }
  @media (max-width: 739.98px) {
    .project__thumbnail:before {
      content: "";
      width: 1px;
      margin-left: -1px;
      float: left;
      height: 0;
      padding-top: 100%;
    }
    .project__thumbnail:after {
      content: "";
      display: block;
      clear: both;
    }
  }
  .project__info {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: flex-end;
  }
  @media (min-width: 1024px) {
    .project__info {
      padding: 4.5rem 3.8rem;
    }
  }
  @media (max-width: 1023.98px) {
    .project__info {
      padding: 22px 18px;
    }
  }
  .project__info__inner {
    max-width: 47.9rem;
    width: 100%;
  }
  @media (min-width: 740px) {
    .project__info__inner {
      padding: 2rem;
    }
  }
  @media (max-width: 739.98px) {
    .project__info__inner {
      padding: 10px;
    }
  }
  .project__info__heading {
    margin-bottom: 3rem;
  }
  @media (min-width: 740px) {
    .project__info__heading {
      min-height: 14rem;
    }
  }
  @media (max-width: 739.98px) {
    .project__info__heading {
      min-height: 60px;
    }
  }
  .project__link {
    color: var(--onio-color-white);
    display: block;
    position: relative;
  }
  @media (any-hover: hover) {
    .project__link:hover {
      text-decoration: none;
      color: var(--onio-color-white);
    }
    .project__link:hover .iconLink--arrow--large {
      background-color: var(--onio-color-white);
    }
    .project__link:hover .iconLink--arrow--large svg path {
      stroke: var(--onio-color-primary);
    }
  }
`;
