import styled from "styled-components";

export const TeamsStyles = styled.div`
  .staff {
    margin-bottom: 6rem;
  }
  .staff__thumbnail {
    margin-bottom: 3rem;
    overflow: hidden;
  }
  @media (min-width: 1024px) {
    .staff__thumbnail {
      border-radius: var(--border-radius);
    }
  }
  @media (max-width: 1023.98px) {
    .staff__thumbnail {
      border-radius: 20px;
    }
  }
  @media (min-width: 740px) and (max-width: 1023.98px) {
    .staff__info__heading {
      font-size: 24px;
    }
  }
  @media (max-width: 739.98px) {
    .staff__info__heading {
      font-size: 18px;
    }
  }
  @media (min-width: 740px) and (max-width: 1023.98px) {
    .staff__info__position {
      font-size: 16px;
    }
  }
  @media (max-width: 739.98px) {
    .staff__info__position {
      font-size: 13px;
    }
  }
  @media (any-hover: hover) {
    .staff__link:hover {
      text-decoration: none;
    }
    .staff__link:hover .iconLink--arrow--large {
      background-color: #222021;
      border-color: #222021;
    }
    .staff__link:hover .iconLink--arrow--large svg path {
      stroke: #ffffff;
    }
  }
`;
