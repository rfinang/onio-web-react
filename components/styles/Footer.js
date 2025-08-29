import styled from "styled-components";

const FooterStyles = styled.footer`
  .footer {
    background: #222021;
  }
  @media (min-width: 740px) {
    .footer {
      padding: 8rem 0 9rem 0;
    }
  }
  @media (max-width: 739.98px) {
    .footer {
      padding: 8rem 0 3.5rem;
    }
  }
  .footer__description {
    font-weight: 500;
    font-size: 2rem;
    line-height: 2.6rem;
  }
  @media (min-width: 740px) {
    .footer__top {
      margin-bottom: 13.5rem;
    }
  }
  @media (max-width: 739.98px) {
    .footer__top {
      margin-bottom: 100px;
    }
  }
  @media (max-width: 739.98px) {
    .footer__top__logo {
      margin-bottom: 8.5rem;
    }
  }
  .footer__top__logo img {
    display: block;
  }
  @media (min-width: 740px) and (max-width: 1023.98px) {
    .footer__top__logo img {
      width: 100px;
      height: 27px;
    }
  }
  @media (max-width: 739.98px) {
    .footer__top__logo img {
      width: 95px;
      height: 26px;
    }
  }
  @media (max-width: 739.98px) {
    .footer__bottom__desc {
      margin-bottom: 6rem;
    }
  }
  .footer__bottom__desc p {
    max-width: 375px;
  }
  .footer .terms {
    margin-top: 1rem;
  }

  .hyperlink__item {
    margin-bottom: 0.6rem;
  }
  .hyperlink__item__link {
    color: #ffffff;
    font-size: 1.8rem;
    line-height: 2.3rem;
  }
  @media (any-hover: hover) {
    .hyperlink__item__link:hover {
      text-decoration: underline;
      color: #ffffff;
    }
  }
  @media (max-width: 739.98px) {
    .hyperlink__item__link {
      font-style: normal;
      font-weight: 500;
      font-size: 15px;
      line-height: 23px;
    }
  }

  .socials {
    margin-bottom: 1.6rem;
  }

  .socials,
  .terms {
    display: flex;
    align-items: center;
  }

  .social__item {
    margin-right: 1rem;
  }
  .social__item__link {
    display: block;
  }
  @media (any-hover: hover) {
    .social__item__link:hover svg path {
      fill: #ffffff;
    }
    .social__item__link img {
      transition: filter 0.4s ease;
    }
    .social__item__link:hover {
      img {
        filter: brightness(300%);
      }
    }
  }
  .social__item svg path {
    fill: #aeadad;
    transition: fill 0.4s cubic-bezier(0.33, 1, 0.68, 1);
  }
  .social__item:last-child {
    margin-right: 0;
  }

  .term__item {
    margin-right: 22px;
  }
  @media (max-width: 739.98px) {
    .term__item {
      margin-right: 17px;
    }
  }
  .term__item:last-child {
    margin-right: 0;
  }
  .term__item__link {
    line-height: 1.7857142857;
    color: #aeadad;
    transition: color 0.3s cubic-bezier(0.33, 1, 0.68, 1);
  }
  @media (min-width: 740px) {
    .term__item__link {
      font-size: 1.4rem;
    }
  }
  @media (max-width: 739.98px) {
    .term__item__link {
      font-size: 12px;
    }
  }
  @media (any-hover: hover) {
    .term__item__link:hover {
      color: #ffffff;
    }
  }
`;

export default FooterStyles;
