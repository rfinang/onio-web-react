import styled from "styled-components";
export const ContactPopupStyles = styled.div`
  .popup--main {
    min-height: 100vh;
    .slick-slide {
      pointer-events: none;
    }
    .slick-slide.slick-active.slick-current {
      pointer-events: auto;
    }
  }
  .popup--main-rollback {
    position: fixed;
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, 0.7);
    top: 0;
    left: 0;
  }
  .popup--main-body {
    position: relative;
    z-index: 2;
    margin-left: auto;
    margin-right: auto;
  }
  @media (min-width: 740px) {
    .popup--main-body {
      padding: 12rem 2.5rem;
    }
  }
  @media (max-width: 739.98px) {
    .popup--main-body {
      padding: 5rem 2rem;
    }
  }
  @media (max-width: 739.98px) {
    .popup--main-body .h2 {
      font-size: 2.6rem !important;
    }
  }
  @media (min-width: 1400px) {
    .popup--main-body {
      max-width: 92.8rem;
    }
  }
  @media (min-width: 1200px) and (max-width: 1399.98px) {
    .popup--main-body {
      max-width: 69rem;
    }
  }
  @media (min-width: 740px) and (max-width: 1199.98px) {
    .popup--main-body {
      max-width: 64.4rem;
    }
  }
  .popup--main-body-content {
    width: 100%;
    position: relative;
  }
  .popup--main-body-content--wrap {
    position: relative;
  }
  .popup--main-body-content.out--content {
    transform: none;
    top: 0;
    left: 0;
  }
  @media (min-width: 1400px) {
    .popup--main-body-actions {
      margin-top: 6.4rem;
    }
  }
  @media (min-width: 1200px) and (max-width: 1399.98px) {
    .popup--main-body-actions {
      margin-top: 4rem;
    }
  }
  @media (min-width: 740px) and (max-width: 1199.98px) {
    .popup--main-body-actions {
      margin-top: 3rem;
    }
  }
  @media (max-width: 739.98px) {
    .popup--main-body-actions {
      margin-top: 2.4rem;
    }
  }
  .popup--main__btn {
    width: 100%;
    font-weight: 500;
    text-align: center;
    box-shadow: none !important;
    outline: none !important;
    line-height: 1;
    border: none;
  }
  @media (min-width: 1400px) {
    .popup--main__btn {
      font-size: 2rem;
      padding: 1.8rem 0;
    }
  }
  @media (min-width: 1200px) and (max-width: 1399.98px) {
    .popup--main__btn {
      font-size: 1.6rem;
      padding: 2rem 0;
    }
  }
  @media (min-width: 740px) and (max-width: 1199.98px) {
    .popup--main__btn {
      font-size: 1.3rem;
      padding: 1.6rem 0;
    }
  }
  @media (max-width: 739.98px) {
    .popup--main__btn {
      font-size: 1.4rem;
      padding: 1.3rem 0;
    }
  }
  .popup--main__btn--text {
    color: #28a745;
    background: none;
    transition: color 0.4s cubic-bezier(0.33, 1, 0.68, 1);
  }
  @media (any-hover: hover) {
    .popup--main__btn--text:hover {
      color: var(--onio-color-primary);
    }
  }
  .popup--main__btn--bg {
    background-color: var(--onio-color-primary);
    color: var(--onio-color-white);
    border-radius: 0.2rem;
    transition: all 0.4s cubic-bezier(0.33, 1, 0.68, 1);
  }
  @media (any-hover: hover) {
    .popup--main__btn--bg:hover {
      background-color: #fd7e14;
    }
  }
  .popup--main--full .popup--main-body {
    width: 100%;
    max-width: 100%;
    padding-right: 0;
    padding-left: 0;
    padding-bottom: 0;
  }
  @media (min-width: 740px) {
    .popup--main--full .popup--main-body > .container {
      padding-bottom: 12rem;
    }
  }
  @media (max-width: 739.98px) {
    .popup--main--full .popup--main-body > .container {
      padding-bottom: 60px;
    }
  }

  .popupClose {
    background: none;
    border: none;
    outline: none;
    box-shadow: none;
    font-size: 1.6rem;
    display: flex;
    align-items: center;
    span {
      display: block;
    }
    img {
      transition: transform 0.4s ease;
    }
    &:hover {
      img {
        transform: scale(1.1);
      }
    }
  }
  .popupClose--white {
    color: white;
    line-height: 1;
  }
  @media (min-width: 740px) {
    .popupClose--white {
      font-size: 20px;
    }
  }
  @media (max-width: 739.98px) {
    .popupClose--white {
      font-size: 15px;
    }
  }
  .popupClose__text {
    display: inline-block;
  }
  @media (min-width: 740px) {
    .popupClose__text {
      margin-right: 2rem;
    }
  }
  @media (max-width: 739.98px) {
    .popupClose__text {
      margin-right: 10px;
    }
  }
  @media (max-width: 739.98px) {
    .popupClose img {
      width: 23px;
      height: 23px;
    }
  }

  .popup--main--download {
    background-color: var(--onio-color-background);
    .slider-item {
      padding-left: calc(0.5 * var(--bs-gutter-x));
      padding-right: calc(0.5 * var(--bs-gutter-x));
    }
  }
  .popup--main--download .popupClose svg path {
    stroke: var(--onio-color-primary) !important;
  }
  .popup--main--download .mediaPopup__thumbnail img {
    border-radius: var(--border-radius);
  }
  .popup--main--download .mediaPopup__info__date,
  .popup--main--download .mediaPopup__info__desc {
    font-size: 2rem;
  }
  .popup--main--download .mediaPopup__info__btn {
    border: transparent;
    background: transparent;
  }

  .modal-dialog {
    max-width: 100%;
    margin: 0;
  }

  .modal-content {
    border: none;
    border-radius: 0;
  }

  .modal-body {
    padding: 0;
  }

  .row--form {
    padding-bottom: 60px;
  }
  @media (min-width: 740px) {
    .row--form {
      padding-bottom: 12rem;
    }
  }
  .row--success {
    display: none !important;
  }

  .heading--block--success {
    display: none !important;
  }

  .popup--main--contactForm {
    background: var(--onio-color-primary);
  }
  .popup--main.is-success .row--form {
    display: none !important;
  }
  .popup--main.is-success .row--success {
    display: flex !important;
  }
  .popup--main.is-success .heading--block--title {
    display: none !important;
  }
  .popup--main.is-success .heading--block--success {
    display: block !important;
  }
`;
