import styled from "styled-components";

export const ConnectivityStyles = styled.div`
  padding: 12.6rem 0 5.9rem;
  position: relative;
  &:after {
    content: "";
    position: absolute;
    height: 6rem;
    bottom: -5.9rem;
    display: block;
    width: 100%;
    z-index: 3;
    border-radius: 0 0 var(--border-radius) var(--border-radius);
    -webkit-transition: opacity 0.3s cubic-bezier(0.33, 1, 0.68, 1);
    transition: opacity 0.3s cubic-bezier(0.33, 1, 0.68, 1);
    will-change: opacity;
  }
  .heading--block {
    margin-bottom: 6.7rem;
  }
  .shelf-label-connectivity {
    .section-desc,
    .section-title {
      margin-bottom: 5.2rem;
      word-break: break-word;
      @media (max-width: 739px) {
        margin-bottom: 30px;
      }
    }
    .banner {
      @media (max-width: 739px) {
         margin-top: 2.6rem;
      }
      margin-top: 7.6rem;
      border-bottom-right-radius: var(--border-radius);
      border-bottom-left-radius: var(--border-radius);
      overflow: hidden;
    }
  }
  @media (max-width: 739px) {
    padding: 50px 0;
  }
`;
