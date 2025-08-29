import styled from "styled-components";

export const VideoInteractiveStyles = styled.div`
  background: #d2fe24;
  position: relative;
  z-index: 1;
  &.videoInteractive--home {
    padding-bottom: 5.2rem;
    margin-top: -6rem;
    @media (max-width: 1023px) {
      margin-top: 0;
    }
  }
  &:after {
    content: "";
    position: absolute;
    height: 6rem;
    bottom: -5.9rem;
    background: #d2fe24;
    display: block;
    width: 100%;
    z-index: 3;
    border-radius: 0 0 var(--border-radius) var(--border-radius);
    transition: opacity 0.3s cubic-bezier(0.33, 1, 0.68, 1);
    will-change: opacity;
  }
  @media (min-width: 1024px) {
    padding: 13.2rem 0 10.2rem;
  }
  @media (max-width: 1199px) {
    &.videoInteractive--home {
      padding-bottom: 8rem;
    }
  }
  @media (max-width: 1023px) {
    padding: 13rem 0 5px 0;
    &.videoInteractive--home {
      padding-bottom: 4rem;
    }
  }
  @media (max-width: 576px) {
    &.videoInteractive--home {
      padding-bottom: 0;
    }
  }
  .videoInteractive__container {
    position: relative;
  }
  .videoInteractive__container:before {
    content: "";
    width: 1px;
    margin-left: -1px;
    float: left;
    height: 0;
    padding-top: 48.1223922114%;
  }
  .videoInteractive__container:after {
    content: "";
    display: block;
    clear: both;
  }
  .videoInteractive__inner {
    position: relative;
  }
  .videoInteractive__element {
    width: 100%;
  }
  @media (min-width: 740px) {
    .videoInteractive__element {
      position: absolute;
      top: calc(50% + 2.5rem);
      transform: translateY(-50%);
    }
  }
  @media (min-width: 992px) {
    .videoInteractive__element {
      top: calc(50% + 4.3rem);
    }
  }
  @media (max-width: 739px) {
    .videoInteractive__element {
      position: relative;
    }
  }
  @media (max-width: 575.98px) {
    .videoInteractive__element {
      transform: translateY(-25%);
    }
  }
  .videoInteractive__element .col-sm-6 {
    text-align: center;
  }
  .videoInteractive__element .col-sm-6 a {
    max-width: 952px;
    width: 100%;
  }
  .videoInteractive__button {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    will-change: transform;
  }

  // smart hub
  &.videoInteractive--smarthub {
    padding-bottom: 0;
    .videoInteractive__heading {
      @media (min-width: 1024px) {
        line-height: 81%;
        & > span:first-child.d-block {
          margin-bottom: 22rem;
        }
      }
      @media (max-width: 1023px) {
        & > span:first-child.d-block {
          margin-bottom: 12rem;
        }
        line-height: 1;
      }
      @media (max-width: 739px) {
        & > span:first-child.d-block {
          margin-bottom: 0;
        }
      }
    }
    .pageLink + .pageLink {
      margin-top: 4px;
    }
    .videoInteractive__element {
      @media (min-width: 992px) {
        top: calc(50% + 1.2rem);
      }
    }
  }
  .videoInteractive__switch {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-top: 5.8rem;
    margin-bottom: 1.7rem;

    @media (max-width: 450px) {
      justify-content: center;
      margin-top: -25%;
    }
    ul {
      padding-left: 0;
      list-style: none;
      margin-bottom: 0;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      background: #222021;
      color: #fff;
      border-radius: 1.8rem;
      padding: 0.2rem;
      li {
        & + li {
          margin-left: 0.5rem;
        }
        a {
          text-align: center;
          overflow: hidden;
          color: #fff;
          display: block;
          padding: 0.2rem 1.4rem;
          border-radius: 1.8rem;
          transition: color 0.4s ease, background-color 0.4s ease;
          position: relative;
          z-index: 0;
          &:after {
            content: "";
            z-index: -1;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            transition: transform 0.4s ease;
            background-color: #d2fe24;
            height: 100%;
            border-radius: 1.8rem;
            transform: scaleX(0);
          }
          &.active {
            color: #222021;
            &:after {
              transform: scaleX(1);
            }
          }
          &:hover {
            text-decoration: none;
          }
          @media (any-hover: hover) {
            &:not(.active):hover {
              color: #d2fe24;
            }
          }
        }
      }
    }
  }
  .videoInteractive__element__image {
    position: relative;
  }
  .videoInteractive__element__image__item:before {
    content: "";
    width: 1px;
    margin-left: -1px;
    float: left;
    height: 0;
    padding-top: 100%;
  }
  .videoInteractive__element__image__item:after {
    content: "";
    display: block;
    clear: both;
  }
  .videoInteractive__element__image__item {
    height: 42rem;
    max-width: 72.3rem;
    margin: 0 auto;
    display: flex;
    align-items: center;
    opacity: 0;
    visibility: hidden;
    transition: all 0.4s ease;
    picture {
      height: 100%;
      width: 100%;
    }
    @media (max-width: 739px) {
      &:before {   
        padding-top: 0;
      }
      height: auto;
      padding-top: 58%;
      position: relative;
      img {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
      }
    }
    img {
      display: block;
      height: 100%;
      width: 100%;
    }
    &.active {
      opacity: 1;
      visibility: visible;
    }
    & + .videoInteractive__element__image__item {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }
  }
`;
