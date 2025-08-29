import styled from "styled-components";
export const BlogLandingStyles = styled.div`
  .blpArticles {
    position: relative;
    padding-bottom: 1rem;
  }
  .blpArticles:after {
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
  .blpArticles:after {
    z-index: 4;
  }
  .page--blogLanding .lastArticles:after {
    content: none;
  }

  @media (min-width: 1200px) {
    .page--blogLanding .lastArticles {
      padding-top: 13rem;
    }
  }
  @media (min-width: 740px) and (max-width: 1199.98px) {
    .page--blogLanding .lastArticles {
      padding-top: 10rem;
    }
  }
  @media (max-width: 739.98px) {
    .page--blogLanding .lastArticles {
      padding-top: 80px;
    }
  }
`;
