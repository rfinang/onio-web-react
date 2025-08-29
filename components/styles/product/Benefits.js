import styled from "styled-components";

export const BenefitsStyles = styled.div`
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
