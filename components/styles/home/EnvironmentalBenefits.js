import styled from "styled-components";

export const EnvironmentalBenefitsStyles = styled.div`
  .ppEnvironmentalBenefits {
    position: relative;
    padding-top: 14.5rem;
    padding-bottom: 4rem;
    overflow: hidden;
  }
  /* .tab-content {
    width: 57.7rem;
    height: 55.3rem;
    max-width: 100%;
    position: relative;
  }
  .tab-content > .tab-pane {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  .ppEnvironmentalBenefits .nav-tabs {
    margin-bottom: 5.4rem;
    font-weight: 500;
    font-size: 2.7rem;
    line-height: 3.2rem;
    border: none;
    background-color: transparent;
  }
  .ppEnvironmentalBenefits .nav-tabs .nav-link {
    padding: 0;
    margin-bottom: 0;
    font-weight: 500;
    font-size: 2.7rem;
    line-height: 3.2rem;
    background-color: transparent;
    border: none;
    color: var(--black);
  }
  .ppEnvironmentalBenefits .nav-tabs .nav-link:hover,
  .ppEnvironmentalBenefits .nav-tabs .nav-link.active {
    text-decoration: underline;
  }
  .ppEnvironmentalBenefits__tabs-img {
    width: 57.7rem;
    height: 55.3rem;
    max-width: 100%;
    display: flex;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
  }
  .ppEnvironmentalBenefits__tabs-img img {
    display: block;
    max-height: 100%;
    max-width: 100%;
  } */
  .ppEnvironmentalBenefits {
    &__tabs {
      position: relative;
    }
    &__tab-list {
      margin-bottom: 5.4rem;
      font-weight: 500;
      font-size: 2.7rem;
      line-height: 3.2rem;

      /* span {
        display: inline-block;
        margin: 0 4px;
      } */
      a {
        color: inherit;
        display: inline-block;
        &.active {
          text-decoration: underline;
        }
      }
    }
    &__tabs-img {
      width: 57.7rem;
      height: 55.3rem;
      max-width: 100%;

      display: flex;

      -webkit-box-align: start;
      -ms-flex-align: start;
      align-items: flex-start;

      -webkit-box-pack: center;
      -ms-flex-pack: center;
      justify-content: center;

      img {
        display: block;
        max-height: 100%;
        max-width: 100%;
      }
    }
    &__tab-content {
      position: relative;
    }
    &__tab-item {
      opacity: 0;
      transition: opacity 1s ease;
      &.show {
        opacity: 1;
      }
      &:nth-child(2) {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
      }
    }
  }
  .ppEnvironmentalBenefits__desc {
    padding-top: 8.6rem;
  }
  @media (min-width: 740px) {
    .ppEnvironmentalBenefits {
      padding-bottom: 10rem;
    }
  }
  @media (max-width: 739.98px) {
    .ppEnvironmentalBenefits__desc {
      padding-top: 0;
    }
    /* .tab-content,
    .ppEnvironmentalBenefits__tabs-img {
      height: 320px;
    } */
  }
  @media (max-width: 739.98px) {
    .ppEnvironmentalBenefits {
      padding-bottom: 4rem;
    }
  }
  .ppEnvironmentalBenefits:after {
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
  .ppEnvironmentalBenefits.bg-silver:after {
    content: "";
    position: absolute;
    height: 6rem;
    bottom: -5.9rem;
    background: #aeadad;
    display: block;
    width: 100%;
    z-index: 3;
    border-radius: 0 0 var(--border-radius) var(--border-radius);
    transition: opacity 0.3s cubic-bezier(0.33, 1, 0.68, 1);
    will-change: opacity;
  }
  .ppEnvironmentalBenefits.bg-wild:after {
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
  .ppEnvironmentalBenefits.bg-red:after {
    content: "";
    position: absolute;
    height: 6rem;
    bottom: -5.9rem;
    background: #ff6231;
    display: block;
    width: 100%;
    z-index: 3;
    border-radius: 0 0 var(--border-radius) var(--border-radius);
    transition: opacity 0.3s cubic-bezier(0.33, 1, 0.68, 1);
    will-change: opacity;
  }
  .ppEnvironmentalBenefits.none-radius:after {
    content: none;
  }

  .material {
    display: flex;
    align-items: center;
    margin-bottom: 40px;
  }
  .material__card {
    background-color: #ff6231;
    width: 17.5rem;
    height: 17.5rem;
    max-width: 100%;
    display: flex;
    color: #222021;
    align-items: center;
    justify-content: center;
    position: relative;
    flex: 0 0 auto;
  }
  .material__card__name {
    font-size: 2.7rem;
    line-height: 1.1851851852;
    position: absolute;
    top: 0.6rem;
    width: 100%;
    text-align: center;
  }
  .material__card__code {
    font-weight: 500;
    font-size: 4.8rem;
    line-height: 1.1666666667;
  }
  .material__card__number {
    font-weight: 500;
    font-size: 2rem;
    line-height: 1.3;
    position: absolute;
    bottom: 0.6rem;
    width: 100%;
    text-align: center;
  }
  .material__line {
    width: 27.397260274vw;
    flex: 0 0 auto;
    position: relative;
  }
  .material__line__el {
    border-bottom: 2px solid #ff6231;
    display: block;
    width: 100%;
    position: absolute;
    left: 0;
  }
  .material__number {
    flex: 0 0 auto;
    border: 2px solid #ff6231;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-weight: 500;
    font-size: 2.4rem;
    line-height: 100%;
    width: 9.6rem;
    height: 9.6rem;
  }
  .material--li .material__line {
    width: 10.896637609vw;
  }
  .material--mn .material__line {
    width: 25.7160647572vw;
  }
  .material--ni .material__line {
    width: 13.8854296389vw;
  }

  @media (max-width: 739.98px) {
    .material__card {
      width: 11.2rem;
      height: 11.2rem;
    }
    .material__card__name {
      font-size: 21px;
    }
    .material__card__code {
      font-size: 39px;
    }
    .material__card__number {
      font-size: 17px;
    }
    .material__number {
      width: 7.8rem;
      height: 7.8rem;
    }
  }
`;
