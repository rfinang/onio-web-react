import styled from "styled-components";

export const CareersStyles = styled.div`
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

  .careers {
    position: relative;
    padding-top: 13rem;
  }
  .careers:after {
    content: "";
    position: absolute;
    height: 6rem;
    bottom: -5.9rem;
    background: #222021;
    display: block;
    width: 100%;
    z-index: 3;
    border-radius: 0 0 var(--border-radius) var(--border-radius);
    transition: opacity 0.3s cubic-bezier(0.33, 1, 0.68, 1);
    will-change: opacity;
  }
  @media (min-width: 740px) {
    .careers {
      padding-bottom: 12.5rem;
    }
  }
  @media (max-width: 739.98px) {
    .careers {
      padding-bottom: 8rem;
    }
  }
  .careers p {
    margin-bottom: 3rem;
  }
`;
