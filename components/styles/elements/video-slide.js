import styled from "styled-components";

export const VideoSlide = styled.div`
  .videoSlide {
    position: relative;
    padding-bottom: 6.2rem;
  }
  .videoSlide .slick-dots {
    bottom: -6.2rem;
    right: 0;
    text-align: right;
  }
  .videoSlide .slick-dots li {
    width: auto;
    height: auto;
    margin: 0;
    margin-left: 10px;
  }
  .videoSlide .slick-dots li span {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 3.4rem;
    height: 3.4rem;
    border: 2px solid var(--onio-color-primary);
    border-radius: 50%;
    font-weight: 400;
    font-size: 2rem;
    line-height: 2.4rem;
    transition: background-color 0.4s ease, color 0.4s ease;
  }
  .videoSlide .slick-dots li span:hover,
  .videoSlide .slick-dots li.slick-active span {
    background-color: var(--onio-color-primary);
    color: #fff;
  }
  @media (max-width: 739px) {
    .videoSlide .slick-dots {
      bottom: auto;
      top: 469px;
      left: auto;
      width: auto;
      padding-top: 22px;
    }
    .videoSlide .slick-dots li {
      margin-left: 0;
      display: block;
    }
    .videoSlide .slick-dots li + li {
      margin-top: 7px;
    }
    .videoSlide .slick-dots li span {
      width: 20px;
      height: 20px;
      font-size: 12px;
      line-height: 14px;
    }
  }

  @media (min-width: 1024px) {
    .fadeSlide__item {
      height: 60rem;
      width: 100%;
    }
  }
  @media (min-width: 1400px) {
    .fadeSlide__item {
      height: 86.2rem;
      width: 100%;
    }
  }
  @media (min-width: 740px) and (max-width: 1023px) {
    .fadeSlide__item {
      height: calc(100vh - 25rem);
    }
  }
  @media (min-width: 740px) {
    .fadeSlide__item {
      border-radius: 5rem;
      position: relative;
      z-index: 2;
      overflow: hidden;
    }
  }
  .fadeSlide__item__player {
    width: 100%;
    height: 100%;
    background-color: #5a5c5b;
  }
  @media (max-width: 739px) {
    .fadeSlide__item__player {
      position: relative;
      height: 469px;
      z-index: 2;
      border-radius: 2rem;
      overflow: hidden;
    }
  }

  .fadeSlide {
    z-index: 1;
  }
  .fadeSlide__images {
    position: relative;
  }
  .fadeSlide__item {
    position: relative;
    pointer-events: none;
  }
  .fadeSlide__item.active {
    pointer-events: auto;
  }
  .fadeSlide__item:not(:first-child) {
    top: 0;
    left: 0;
    position: absolute;
    width: 100%;
  }
  .fadeSlide__item:not(:first-child) .fadeSlide__item__player {
    opacity: 0;
  }
  .fadeSlide__item__player {
    font-size: 0;
    overflow: hidden;
  }
  .fadeSlide__item__player video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: relative;
    z-index: 0;
  }
  @media (min-width: 740px) {
    .fadeSlide__item__content {
      position: absolute;
      bottom: 7rem;
      left: 5rem;
      max-width: 31.5rem;
      color: white;
      z-index: 5;
    }
  }
  @media (max-width: 739px) {
    .fadeSlide__item__content {
      margin-top: 2.5rem;
      color: #222021;
      max-width: 21.2rem;
    }
    .fadeSlide__item__content img {
      width: 27px;
      height: 27px;
    }
  }

  .bigImageRow {
    position: relative;
  }
  .bigImageRow__image:before {
    content: "";
    width: 1px;
    margin-left: -1px;
    float: left;
    height: 0;
    padding-top: 57.2139303483%;
  }
  .bigImageRow__image:after {
    content: "";
    display: block;
    clear: both;
  }
  .bigImageRow__desc {
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
    width: 100%;
  }
  .bigImageRow__desc__title {
    display: flex;
    align-items: center;
    margin-top: 0.18em;
  }
  @media (min-width: 1024px) {
    .bigImageRow__desc__title {
      margin-bottom: 4.5rem;
    }
  }
  @media (min-width: 740px) and (max-width: 1023px) {
    .bigImageRow__desc__title {
      margin-bottom: 3rem;
    }
  }
  @media (max-width: 739px) {
    .bigImageRow__desc__title {
      margin-bottom: 20px;
      font-size: 17px;
    }
    .bigImageRow__desc__content {
      font-size: 13px;
    }
  }
`;
