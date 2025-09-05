import styled from "styled-components";
export const NewsLandingContentStyles = styled.div`
  .newsLanding__content {
    position: relative;
    padding-top: 13rem;
  }
  .newsLanding__content:after {
    content: "";
    position: absolute;
    height: 6rem;
    bottom: -5.9rem;
    background: var(--onio-color-primary);
    display: block;
    width: 100%;
    z-index: 3;
    border-radius: 0 0 var(--border-radius) var(--border-radius);
    transition: opacity 0.3s cubic-bezier(0.33, 1, 0.68, 1);
    will-change: opacity;
  }
  @media (min-width: 1024px) {
    .newsLanding__content {
      padding-bottom: 11rem;
    }
  }
  @media (min-width: 740px) and (max-width: 1023.98px) {
    .newsLanding__content {
      padding-bottom: 60px;
    }
  }
  @media (max-width: 739.98px) {
    .newsLanding__content {
      padding-bottom: 30px;
    }
  }

  .mediaCentre {
    margin-bottom: 4.5rem;
    display: block;
  }
  .mediaCentre script {
    height: 0;
  }
  .mediaCentre__thumbnail {
    margin-bottom: 1.6rem;
  }
  @media (min-width: 740px) {
    .mediaCentre__thumbnail {
      height: 30rem;
    }
  }
  @media (min-width: 1920px) {
    .mediaCentre__thumbnail {
      height: 34rem;
    }
  }
  @media (max-width: 739.98px) {
    .mediaCentre__thumbnail {
      height: 22rem;
    }
  }
  .mediaCentre__thumbnail img {
    border-radius: var(--border-radius);
  }
  .mediaCentre__info__left {
    font-size: 2rem;
    color: var(--onio-color-white);
  }
  .mediaCentre__info__right {
    padding-bottom: 0.3em;
  }
  .mediaCentre a:hover .iconLink {
    background: var(--onio-color-accent);
    border-color: var(--onio-color-accent) !important;
  }
  .mediaCentre a:hover .iconLink svg path {
    stroke: var(--onio-color-primary);
  }
`;
