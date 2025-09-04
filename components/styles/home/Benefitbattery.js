import styled from "styled-components";

export const BenefitBatteryStyles = styled.div`
  .benefitsBatteryless {
    background: var(--onio-color-muted);
    position: relative;
    border-radius: 0 0 var(--border-radius) var(--border-radius);
  }
  .benefitsBatteryless:before {
    background: var(--onio-color-muted);
    z-index: 0;
    content: "";
    display: block;
    top: -6rem;
    height: 10rem;
    width: 100%;
    position: absolute;
    left: 0;
  }
  @media (min-width: 1024px) {
    .benefitsBatteryless .focusFeatureList {
      padding-top: 18rem;
      padding-bottom: 16.5rem;
    }
  }
  @media (min-width: 740px) and (max-width: 1023.98px) {
    .benefitsBatteryless .focusFeatureList {
      padding-top: 10rem;
      padding-bottom: 10rem;
    }
  }
  @media (max-width: 739.98px) {
    .benefitsBatteryless .focusFeatureList {
      padding-top: 10rem;
      padding-bottom: 10rem;
    }
  }
  .benefitsBatteryless__desc {
    padding-top: 0.8em;
  }
  .benefitsBatteryless--topRadius .benefitsBatteryless__content {
    position: relative;
    background-color: var(--onio-color-background);
    padding-top: 8rem;
    padding-bottom: 8rem;
  }
  .benefitsBatteryless--topRadius .benefitsBatteryless__content:before {
    background: var(--onio-color-background);
    z-index: 0;
    content: "";
    display: block;
    top: -6rem;
    height: 10rem;
    width: 100%;
    position: absolute;
    left: 0;
  }
  .benefitsBatteryless--topRadius .benefitsBatteryless__content:after {
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
  .benefitsBatteryless--topRadius .benefitsBatteryless__bottom {
    padding-top: 11.4rem;
    padding-bottom: 12.5rem;
  }

  .benefitsBatteryless--home {
    padding-top: 11rem !important;
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
