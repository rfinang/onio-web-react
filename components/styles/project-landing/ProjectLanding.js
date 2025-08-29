import styled from "styled-components";

export const ProjectLandingStyles = styled.div`
  .projectLading__content {
    padding-top: 8rem;
  }
  @media (min-width: 1024px) {
    .projectLading__content {
      padding-bottom: 12rem;
    }
  }
  @media (min-width: 740px) and (max-width: 1023.98px) {
    .projectLading__content {
      padding-bottom: 60px;
    }
  }
  @media (max-width: 739.98px) {
    .projectLading__content {
      padding-bottom: 40px;
    }
  }

  .page--projectLanding .turnkeyProjects:after {
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
`;
