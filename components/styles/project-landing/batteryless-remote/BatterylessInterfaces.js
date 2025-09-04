import styled from "styled-components";

export const BatterylessInterfacesStyles = styled.div`
  @keyframes zoom-in-zoom-out {
    0% {
      transform: scale(0.8) skew(1deg);
      opacity: 1;
    }
    100% {
      transform: scale(1.3) skew(1deg);
      opacity: 0.01;
    }
  }
  .turnkey-landing-interfaces {
    padding-top: 6.2rem;
  }
  .turnkey-landing-interfaces .heading--block {
    margin-bottom: 9.3rem;
  }
  .turnkey-landing-interfaces .section-title {
    margin-bottom: 2.8rem;
  }
  .turnkey-landing-interfaces .section-desc {
    margin-bottom: 2.8rem;
    min-height: 300px;
  }
  .turnkey-landing-interfaces .banner {
    height: 63.4950248756vw;
    overflow: hidden;
    border-radius: 0 0 50px 50px;
    position: relative;
  }
  .turnkey-landing-interfaces .banner img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .turnkey-landing-interfaces .banner .items .item {
    position: absolute;
    z-index: 2;
  }
  .turnkey-landing-interfaces .banner .items .item:nth-child(1) {
    top: 10.7587064677vw;
    left: 11.2562189055vw;
  }
  .turnkey-landing-interfaces .banner .items .item:nth-child(2) {
    top: 2.9228855721vw;
    left: 49.6268656716vw;
  }
  .turnkey-landing-interfaces .banner .items .item:nth-child(3) {
    top: 38.4328358209vw;
    left: 68.1592039801vw;
  }
  .turnkey-landing-interfaces .banner .items .item .img {
    width: 18.6567164179vw;
    height: 18.6567164179vw;
    overflow: hidden;
    border-radius: 50%;
  }
  .turnkey-landing-interfaces .banner .items .item span,
  .turnkey-landing-interfaces .banner .items .item:before,
  .turnkey-landing-interfaces .banner .items .item:after {
    border-radius: 50%;
    top: 13px;
    left: 13px;
    bottom: 13px;
    right: 13px;
    content: "";
    position: absolute;
    border: 1px solid var(--onio-color-white);
    opacity: 0;
    z-index: -1;
    animation: zoom-in-zoom-out 2s ease infinite;
  }
  .turnkey-landing-interfaces .banner .items .item:before {
    top: 2px;
    left: 2px;
    bottom: 2px;
    right: 2px;
  }
  .turnkey-landing-interfaces .banner .items .item span {
    top: -15px;
    left: -15px;
    bottom: -15px;
    right: -15px;
  }
  @media (max-width: 1023.98px) {
    .turnkey-landing-interfaces .section-title {
      margin-bottom: 30px;
    }
    .turnkey-landing-interfaces .section-desc {
      margin-bottom: 48px;
      min-height: auto;
    }
  }
  @media (max-width: 739.98px) {
    .turnkey-landing-interfaces .heading--block {
      margin-bottom: 62px;
    }
    .turnkey-landing-interfaces .banner {
      margin-left: 20px;
      margin-right: 20px;
      border-radius: 20px;
    }
    .turnkey-landing-interfaces .banner .items .item .img {
      width: 19.7333333333vw;
      height: 19.7333333333vw;
    }
    .turnkey-landing-interfaces .banner .items .item span {
      top: -5px;
      left: -5px;
      bottom: -5px;
      right: -5px;
    }
    .turnkey-landing-interfaces .banner .items .item:nth-child(1) {
      top: 10.7587064677vw;
      left: 8.7686567164vw;
    }
    .turnkey-landing-interfaces .banner .items .item:nth-child(2) {
      top: 2.9228855721vw;
      left: 47.1393034826vw;
    }
    .turnkey-landing-interfaces .banner .items .item:nth-child(3) {
      top: 38.4328358209vw;
      left: 65.671641791vw;
    }
  }
`;
