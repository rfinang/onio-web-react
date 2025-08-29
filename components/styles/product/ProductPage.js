import styled from "styled-components";

export const ProductPageStyles = styled.div`
  .ppBatteryless {
    position: relative;
    padding-top: 8rem;
  }
  .ppBatteryless:before {
    background: #222021;
    z-index: 0;
    content: "";
    display: block;
    top: -6rem;
    height: 10rem;
    width: 100%;
    position: absolute;
    left: 0;
  }
  .ppBatteryless:after {
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

  .ppBenefits {
    position: relative;
    padding-top: 13rem;
  }
  @media (min-width: 740px) {
    .ppBenefits {
      padding-bottom: 10rem;
    }
  }
  @media (max-width: 739.98px) {
    .ppBenefits {
      padding-bottom: 8rem;
    }
  }
  .ppBenefits:after {
    content: "";
    position: absolute;
    height: 6rem;
    bottom: -5.9rem;
    background: #d2fe24;
    display: block;
    width: 100%;
    z-index: 3;
    border-radius: 0 0 var(--border-radius) var(--border-radius);
    transition: opacity 0.3s cubic-bezier(0.33, 1, 0.68, 1);
    will-change: opacity;
  }

  .ppEnvironmentalBenefits {
    position: relative;
    padding-top: 14.5rem;
  }
  .ppEnvironmentalBenefits__tabs {
    position: relative;
  }
  .ppEnvironmentalBenefits__tab-list {
    margin-bottom: 5.4rem;
    font-weight: 500;
    font-size: 2.7rem;
    line-height: 3.2rem;
  }
  .ppEnvironmentalBenefits__tab-list span {
    display: inline-block;
  }
  .ppEnvironmentalBenefits__tab-list a {
    color: inherit;
    display: inline-block;
  }
  .ppEnvironmentalBenefits__tab-list a.active {
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
  }
  .ppEnvironmentalBenefits__tab-content {
    position: relative;
  }
  .ppEnvironmentalBenefits__tab-item {
    opacity: 0;
    transition: opacity 1s ease;
  }
  .ppEnvironmentalBenefits__tab-item.show {
    opacity: 1;
  }
  .ppEnvironmentalBenefits__tab-item:nth-child(2) {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
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
    .ppEnvironmentalBenefits__tab-list {
      margin-bottom: 39px;
      font-size: 22px;
      line-height: 28px;
    }
    .ppEnvironmentalBenefits__tab-list span {
      font-size: 0;
    }
    .ppEnvironmentalBenefits__tab-list span:after {
      content: "/";
      display: inline-block;
      font-size: 22px;
      line-height: 28px;
    }
    .ppEnvironmentalBenefits__desc {
      padding-top: 0;
    }
    .ppEnvironmentalBenefits__tabs-img {
      height: 320px;
    }
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

  .ppDevPlatform {
    position: relative;
    padding-top: 13rem;
  }
  @media (min-width: 740px) {
    .ppDevPlatform {
      padding-bottom: 7rem;
    }
  }
  @media (max-width: 739.98px) {
    .ppDevPlatform {
      padding-bottom: 4rem;
    }
  }
  .ppDevPlatform:after {
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
  .ppDevPlatform .postIcon {
    margin-bottom: 5rem;
  }

  .turnkeyProjects {
    padding-top: 15rem !important;
  }
  .energy__col {
    margin-top: -1.2em;
  }
`;
