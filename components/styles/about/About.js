import styled from "styled-components";

export const AboutStyles = styled.div`
  @media (min-width: 1024px) {
    .page--about .videoInteractive {
      padding-bottom: 2rem;
      padding-top: 14.5rem;
    }
  }
  @media (max-width: 1023.98px) {
    .page--about .videoInteractive {
      padding-top: 10rem;
    }
  }
  .page--about .teams {
    position: relative;
    padding-top: 13rem;
  }
  @media (min-width: 740px) {
    .page--about .teams {
      padding-bottom: 3rem;
    }
  }
  .page--about .teams:after {
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
  .page--about .lastArticles {
    padding-top: 13rem;
  }

  .careers {
    position: relative;
    padding-top: 13rem;
  }
  .careers:after {
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
  @media (min-width: 740px) {
    .careers {
      padding-bottom: 12.5rem;
    }
  }
  @media (max-width: 739.98px) {
    .careers {
      padding-bottom: 8rem;
    }
  }
  .careers p {
    margin-bottom: 3rem;
  }
`;
