import styled from "styled-components";

export const BatterylessEnergyStyles = styled.div`
  .turnkey-landing-energy {
    padding: 8.2rem 0 8rem;
  }
  .turnkey-landing-energy .heading--block {
    margin-bottom: 7.1rem;
  }
  .turnkey-landing-energy .block-desc {
    margin-bottom: 8.1rem;
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
  .turnkey-landing-energy .video-block {
    margin-bottom: 10.6rem;
    height: 80.9rem;
    overflow: hidden;
    border-radius: 5rem;
    background-color: #f38167;
  }
  .turnkey-landing-energy .video-block video {
    border-radius: 5rem;
    -o-object-fit: cover;
    object-fit: cover;
    height: 100%;
    width: 100%;
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
    .turnkey-landing-energy .video-block {
      margin-bottom: 40px;
    }
  }
  @media (max-width: 1023.98px) {
    .turnkey-landing-energy {
      padding: 48px 0 47px;
    }
  }
  @media (max-width: 739.98px) {
    .turnkey-landing-energy .video-block {
      border-radius: 20px;
      height: 335px;
    }
    .turnkey-landing-energy .video-block video {
      border-radius: 20px;
    }
  }
`;
