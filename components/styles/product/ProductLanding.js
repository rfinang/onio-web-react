import styled from "styled-components";

export const ProductLandingStyles = styled.div`
  .sizeMatters {
    position: relative;
  }
  .sizeMatters:before {
    background: var(--onio-color-accent);
    z-index: 0;
    content: "";
    display: block;
    top: -6rem;
    height: 10rem;
    width: 100%;
    position: absolute;
    left: 0;
  }
  .sizeMatters:after {
    content: "";
    position: absolute;
    height: 6rem;
    bottom: -5.9rem;
    background: var(--onio-color-accent);
    display: block;
    width: 100%;
    z-index: 3;
    border-radius: 0 0 var(--border-radius) var(--border-radius);
    transition: opacity 0.3s cubic-bezier(0.33, 1, 0.68, 1);
    will-change: opacity;
  }
  @media (min-width: 740px) {
    .sizeMatters {
      padding-top: 13rem;
      padding-bottom: 6rem;
    }
  }
  @media (max-width: 739.98px) {
    .sizeMatters {
      padding-bottom: 40px;
      padding-top: 100px;
    }
  }

  .powered {
    position: relative;
  }
  .powered:after {
    content: "";
    position: absolute;
    height: 6rem;
    bottom: -5.9rem;
    background: var(--onio-color-primary);
    display: block;
    width: 100%;
    z-index: 1;
    border-radius: 0 0 var(--border-radius) var(--border-radius);
    transition: opacity 0.3s cubic-bezier(0.33, 1, 0.68, 1);
    will-change: opacity;
  }
  @media (min-width: 740px) {
    .powered {
      padding-bottom: 6rem;
      padding-top: 18rem;
    }
  }
  @media (max-width: 739.98px) {
    .powered {
      padding-bottom: 30px;
      padding-top: 120px;
    }
  }

  .turnkeyProjects--productLandingpage {
    padding-top: 13rem;
  }

  .benefitsBatteryless--product {
    z-index: 1;
  }
`;
