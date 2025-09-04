import styled from "styled-components";

export const SizeMatterStyles = styled.div`
  .sizeMatters__container {
    overflow: hidden;
  }
  .sizeMatters__inner {
    position: relative;
  }
  @media (min-width: 1200px) {
    .sizeMatters__inner {
      margin-bottom: 26rem;
    }
  }
  @media (min-width: 740px) and (max-width: 1199.98px) {
    .sizeMatters__inner {
      margin-bottom: 16rem;
    }
  }
  @media (max-width: 739.98px) {
    .sizeMatters__inner {
      margin-bottom: 12rem;
    }
  }
  .sizeMatters__heading {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    transition: transform 0.4s;
  }
  .sizeMatters__heading .heading--supper {
    line-height: 92%;
  }
  .sizeMatters__image {
    display: grid;
    grid-template-rows: repeat(8, 1fr);
    position: relative;
    z-index: 2;
  }
  @media (min-width: 740px) {
    .sizeMatters__image {
      grid-template-columns: repeat(12, 1fr);
    }
  }
  @media (max-width: 739.98px) {
    .sizeMatters__image {
      grid-template-columns: repeat(8, 1fr);
    }
  }
  .sizeMatters__image__thumbnail {
    position: relative;
  }
  @media (min-width: 740px) {
    .sizeMatters__image__thumbnail {
      grid-row: 3 / span 4;
      grid-column: 5 / span 4;
    }
  }
  @media (max-width: 739.98px) {
    .sizeMatters__image__thumbnail {
      grid-row: 3 / span 4;
      grid-column: 3 / span 4;
    }
  }
  .sizeMatters__image__thumbnail .image__object-fit {
    position: relative;
    z-index: 2;
  }
  .sizeMatters__image__thumbnail__shadow {
    position: absolute;
    left: 0;
    bottom: -35%;
    width: 100%;
    height: 100%;

    background-repeat: no-repeat;
    background-size: 100%;
    pointer-events: none;
  }
  .sizeMatters__image__size {
    color: var(--onio-color-accent);
    font-weight: 500;
    border-radius: var(--border-radius);
    display: block;
    background: var(--onio-color-primary);
  }
  @media (min-width: 1024px) {
    .sizeMatters__image__size {
      font-size: 2rem;
    }
  }
  @media (max-width: 1023.98px) {
    .sizeMatters__image__size {
      font-size: 1.6rem;
    }
  }
  .sizeMatters__image__size--h {
    text-align: center;
  }
  @media (min-width: 1024px) {
    .sizeMatters__image__size--h {
      width: 3.6rem;
      margin-left: -1.8rem;
    }
  }
  @media (max-width: 1023.98px) {
    .sizeMatters__image__size--h {
      width: 2.8rem;
      margin-left: -1.4rem;
    }
  }
  @media (min-width: 740px) {
    .sizeMatters__image__size--h {
      grid-row: 3 / span 4;
      grid-column: 10 / span 1;
    }
  }
  @media (max-width: 739.98px) {
    .sizeMatters__image__size--h {
      grid-row: 2 / span 6;
      grid-column: 11 / span 1;
      display: none;
    }
  }
  .sizeMatters__image__size--h .text {
    transform: rotate(-90deg);
    top: calc(50% - 1rem);
    position: relative;
    display: block;
  }
  .sizeMatters__image__size--w {
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media (min-width: 740px) {
    .sizeMatters__image__size--w {
      grid-row: 8 / span 1;
      grid-column: 5 / span 4;
    }
  }
  @media (min-width: 1024px) {
    .sizeMatters__image__size--w {
      height: 3.6rem;
      margin-top: -1.8rem;
    }
  }
  @media (max-width: 1023.98px) {
    .sizeMatters__image__size--w {
      height: 2.8rem;
      margin-top: -1.4rem;
    }
  }
  @media (max-width: 739.98px) {
    .sizeMatters__image__size--w {
      grid-row: 7 / span 1;
      grid-column: 3 / span 4;
      position: absolute;
      margin-top: 0;
      height: 3.2rem !important;
      bottom: -1.6rem;
    }
  }
  .sizeMatters__gird {
    width: 100%;
    height: 100%;
    pointer-events: none;
    user-select: none;
    position: absolute;
    top: 0;
    left: 0;
  }
  .sizeMatters__gird__lines {
    list-style: none;
    padding-left: 0;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    display: grid;
    height: 100%;
  }
  @media (min-width: 740px) {
    .sizeMatters__gird__lines--v {
      grid-template-columns: repeat(12, 1fr);
    }
  }
  @media (max-width: 739.98px) {
    .sizeMatters__gird__lines--v {
      grid-template-columns: repeat(8, 1fr);
    }
  }
  .sizeMatters__gird__lines--v li {
    width: 100%;
    position: relative;
  }
  .sizeMatters__gird__lines--v li .border__line {
    display: block;
    height: 100%;
    border-right: 1px solid var(--onio-color-primary);
    position: absolute;
    right: 0;
  }
  @media (min-width: 740px) {
    .sizeMatters__gird__lines--v li:nth-child(2n) .border__line {
      border-right: 2px solid var(--onio-color-primary);
    }
  }
  @media (max-width: 739.98px) {
    .sizeMatters__gird__lines--v li:nth-child(12),
    .sizeMatters__gird__lines--v li:nth-child(11),
    .sizeMatters__gird__lines--v li:nth-child(10),
    .sizeMatters__gird__lines--v li:nth-child(9),
    .sizeMatters__gird__lines--v li:nth-child(8) {
      display: none;
    }
  }
  .sizeMatters__gird__lines--h {
    grid-template-rows: repeat(8, 1fr);
  }
  .sizeMatters__gird__lines--h li {
    height: 100%;
    position: relative;
  }
  .sizeMatters__gird__lines--h li .border__line {
    display: block;
    width: 100%;
    height: 100%;
    border-bottom: 1px solid var(--onio-color-primary);
    position: absolute;
    bottom: 0;
  }
  .sizeMatters__gird__lines--h li .border__line--top {
    bottom: auto;
    top: 0;
  }
  @media (min-width: 740px) {
    .sizeMatters__gird__lines--h li .border__line--top {
      border-top: 2px solid var(--onio-color-primary);
    }
  }
  @media (max-width: 739.98px) {
    .sizeMatters__gird__lines--h li .border__line--top {
      border-top: 1px solid var(--onio-color-primary);
    }
  }
  @media (min-width: 740px) {
    .sizeMatters__gird__lines--h li:nth-child(2n) .border__line {
      border-bottom: 2px solid var(--onio-color-primary);
    }
  }

  .js-sizeMatters__image__thumbnail__trigger {
    height: 30px;
    width: 100%;
    opacity: 0;
    background: #000000;
    display: block;
    grid-row: 6 / span 1;
    grid-column: 5 / span 4;
  }

  @media (min-width: 1200px) {
    .focusFeature {
      padding-left: 6%;
      padding-right: 6%;
    }
  }
  .focusFeature__thumbnail {
    margin-bottom: 3.2rem;
    text-align: center;
  }
  @media (min-width: 1400px) {
    .focusFeature__thumbnail__inner svg {
      max-width: 21.6rem;
    }
  }
  @media (min-width: 740px) and (max-width: 1399.98px) {
    .focusFeature__thumbnail__inner svg {
      max-width: 21.6rem;
    }
  }
  @media (max-width: 739.98px) {
    .focusFeature__thumbnail__inner svg {
      max-width: 120px;
    }
  }
  @media (min-width: 1024px) {
    .focusFeature__info__heading {
      margin-bottom: 4rem;
    }
  }
  @media (min-width: 740px) and (max-width: 1023.98px) {
    .focusFeature__info__heading {
      margin-bottom: 3rem;
    }
  }
  .focusFeature__info__desc {
    padding-left: 5%;
    padding-right: 5%;
  }
`;
