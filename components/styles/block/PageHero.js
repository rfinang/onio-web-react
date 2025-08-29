import styled from "styled-components";
export const PageHeroStyles = styled.div`
  position: relative;
  z-index: 5;
  .pageHero {
    position: relative;
    z-index: 1;
    overflow: hidden;
    background: #f5f5f5;
    border-radius: 0 0 var(--border-radius) var(--border-radius);
  }
  .pageHero__image {
    & > div,
    picture {
      height: 100%;
    }
  }
  .pageHero__image video {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
  @media (min-width: 1400px) {
    .pageHero__image {
      height: 49.92vw;
    }
  }
  @media (min-width: 1024px) and (max-width: 1199.98px) {
    .pageHero__image {
      height: 56.7164179104vw;
    }
  }
  @media (min-width: 1024px) and (max-width: 1199.98px) {
    .pageHero__image {
      height: 550px;
    }
  }
  @media (max-width: 739.98px) {
    .pageHero__image {
      height: calc(100vh - 100px);
    }
  }
  .pageHero__container {
    position: absolute;
    padding-top: 14.4rem;
    top: 0;
    left: 0;
    width: 100%;
  }
  .pageHero--after {
    padding-top: 8rem;
  }
`;
