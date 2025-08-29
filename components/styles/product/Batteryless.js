import styled from "styled-components";

export const BatterylessStyles = styled.div`
  @media (min-width: 1200px) {
    .accordian__item:first-child .accordian__item__link {
      border-top: 2px solid;
    }
  }
  @media (max-width: 1199.98px) {
    .accordian__item:first-child .accordian__item__link {
      border-top: 1.5px solid;
    }
  }
  .accordian__item__link {
    display: block;
  }
  @media (min-width: 1200px) {
    .accordian__item__link {
      border-bottom: 2px solid;
    }
  }
  @media (max-width: 1199.98px) {
    .accordian__item__link {
      border-bottom: 1.5px solid;
    }
  }
  .accordian__item__link__text {
    padding-right: 3rem;
  }
  @media (min-width: 1200px) {
    .accordian__item__link__text {
      margin-top: 0.2em;
    }
  }
  @media (max-width: 1199.98px) {
    .accordian__item__link__text {
      margin-top: 0.08em;
    }
  }
  @media (max-width: 739.98px) {
    .accordian__item__link__text {
      margin-top: 0 !important;
    }
  }
  .accordian__item__link__desc {
    position: relative;
  }
  @media (min-width: 1200px) {
    .accordian__item__link__desc {
      top: 0.35em;
    }
  }
  @media (min-width: 740px) and (max-width: 1023.98px) {
    .accordian__item__link__desc {
      top: 0.23em;
    }
  }
  @media (max-width: 739.98px) {
    .accordian__item__link__desc {
      top: 0;
      margin-top: 10px;
    }
  }
  .accordian__item__link--white {
    color: #ffffff;
    border-color: #ffffff;
  }
  @media (any-hover: hover) {
    .accordian__item__link--white:active,
    .accordian__item__link--white:focus,
    .accordian__item__link--white:hover {
      color: #ffffff;
      border-color: #ffffff;
    }
    .accordian__item__link--white:active .iconLink--arrow--large,
    .accordian__item__link--white:focus .iconLink--arrow--large,
    .accordian__item__link--white:hover .iconLink--arrow--large {
      background-color: #ffffff;
    }
    .accordian__item__link--white:active .iconLink--arrow--large svg path,
    .accordian__item__link--white:focus .iconLink--arrow--large svg path,
    .accordian__item__link--white:hover .iconLink--arrow--large svg path {
      stroke: #222021;
    }
  }
  .accordian__item__link--black {
    color: #222021;
    border-color: #222021;
  }
  @media (any-hover: hover) {
    .accordian__item__link--black:active,
    .accordian__item__link--black:focus,
    .accordian__item__link--black:hover {
      color: #222021;
      border-color: #222021;
    }
    .accordian__item__link--black:active .iconLink--arrow--large,
    .accordian__item__link--black:focus .iconLink--arrow--large,
    .accordian__item__link--black:hover .iconLink--arrow--large {
      background-color: #222021;
    }
    .accordian__item__link--black:active .iconLink--arrow--large svg path,
    .accordian__item__link--black:focus .iconLink--arrow--large svg path,
    .accordian__item__link--black:hover .iconLink--arrow--large svg path {
      stroke: #ffffff;
    }
  }
  .accordian__item__link .row {
    padding: 1.6rem 0;
  }
  @media (any-hover: hover) {
    .accordian__item__link:hover {
      text-decoration: none;
    }
  }
  .accordian__item--large .row {
    padding: 2.1rem 0;
  }
  .accordian__item--hasIcon .row {
    padding: 1.9rem 0;
  }

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

  .postIcon {
    padding-right: 5%;
  }
  @media (min-width: 1024px) {
    .postIcon {
      margin-bottom: 12rem;
    }
  }
  @media (max-width: 1023.98px) {
    .postIcon {
      margin-bottom: 70px;
    }
  }
  .postIcon__icon img {
    height: auto;
  }
  @media (min-width: 1024px) {
    .postIcon__icon img {
      width: 4.9rem;
    }
  }
  @media (max-width: 1023.98px) {
    .postIcon__icon img {
      width: 32px;
    }
  }
`;
