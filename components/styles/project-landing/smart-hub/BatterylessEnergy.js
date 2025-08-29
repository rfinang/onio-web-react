import styled from "styled-components";

export const BatterylessEnergyStyles = styled.div`
  .turnkey-landing-energy {
    padding: 8.2rem 0 8rem;
    .resource {
      margin-top: -6.5rem;
      margin-bottom: 0;
      @media (max-width: 1023px) {
        margin-top: 0;
      }
    }
  }
  .turnkey-landing-energy .heading--block {
    margin-bottom: 7.1rem;
  }
  .turnkey-landing-energy .block-desc {
    margin-bottom: 0;
  }
  .turnkey-landing-energy .info .icon {
    margin-bottom: 6.9rem;
    height: 21.5rem;
    width: 21.5rem;
  }
  .turnkey-landing-energy .info .icon > div {
    max-height: 100%;
  }
  .turnkey-landing-energy .info .icon img,
  .turnkey-landing-energy .info .icon svg {
    display: block;
    max-width: 100%;
    max-height: 100%;
  }
  .turnkey-landing-energy .info .title {
    margin-bottom: 2rem;
  }
  .turnkey-landing-energy .info .desc {
    font-size: 2.4rem;
    line-height: 1.21;
    color: #000000;
  }
  .turnkey-landing-energy .info .desc p {
    margin-bottom: 0;
  }
  .turnkey-landing-energy .info .desc p + p {
    margin-top: 24px;
  }
  @media (max-width: 1023.98px) {
    .turnkey-landing-energy .heading--block {
      margin-bottom: 65px;
    }
    .turnkey-landing-energy .block-desc {
      margin-bottom: 57px;
    }
    .turnkey-landing-energy .info {
      width: 311px;
      max-width: 100%;
      margin-top: 37px;
    }
    .turnkey-landing-energy .info .icon {
      width: 118px;
      height: 118px;
    }
    .turnkey-landing-energy .info .icon img,
    .turnkey-landing-energy .info .icon svg {
      display: block;
      max-width: 100%;
      height: auto;
    }
  }
  @media (max-width: 1023.98px) {
    .turnkey-landing-energy {
      padding: 48px 0 47px;
    }
  }
`;
