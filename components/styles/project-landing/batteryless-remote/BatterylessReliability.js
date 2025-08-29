import styled from "styled-components";

export const BatterylessReliabilityStyles = styled.div`
  .turnkey-landing-reliability {
    padding: 8.4rem 0 6.1rem;
  }
  .turnkey-landing-reliability .heading--block {
    margin-bottom: 7.1rem;
  }
  .turnkey-landing-reliability .section-title,
  .turnkey-landing-reliability .section-desc {
    margin-bottom: 6.3rem;
    min-height: 33.7rem;
  }
  .turnkey-landing-reliability .item {
    margin-bottom: 2rem;
  }
  .turnkey-landing-reliability .item .icon {
    width: 21.6rem;
    height: 21.6rem;
    margin: 0 auto 6.7rem;
  }
  .turnkey-landing-reliability .item .info {
    text-align: center;
  }
  .turnkey-landing-reliability .item .info .title {
    margin-bottom: 3rem;
  }
  .turnkey-landing-reliability .item .info .desc {
    margin-bottom: 0;
  }
  .turnkey-landing-reliability .banner {
    padding-top: 57.3144876325%;
    position: relative;
    overflow: hidden;
    border-radius: 50px;
    margin-top: 13rem;
  }
  .turnkey-landing-reliability .banner img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media (max-width: 739.98px) {
    .turnkey-landing-reliability {
      padding: 47px 0 36.5px;
    }
    .turnkey-landing-reliability .heading--block {
      margin-bottom: 62px;
    }
    .turnkey-landing-reliability .section-title,
    .turnkey-landing-reliability .section-desc {
      min-height: auto;
      margin-bottom: 30px;
    }
    .turnkey-landing-reliability .section-desc {
      margin-bottom: 60px;
    }
    .turnkey-landing-reliability .item {
      margin-bottom: 55px;
    }
    .turnkey-landing-reliability .item .icon {
      width: 119px;
      height: 119px;
      margin-bottom: 52px;
    }
    .turnkey-landing-reliability .item .info .title {
      margin-bottom: 22px;
    }
    .turnkey-landing-reliability .banner {
      margin-top: 0;
      border-radius: 20px;
    }
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
