import styled from "styled-components";

export const AboutSayHelloStyles = styled.div`
  .aboutSayHello {
    background-color: var(--onio-color-background);
    position: relative;
    padding-top: 13rem;
  }
  .aboutSayHello:after {
    content: "";
    position: absolute;
    height: 6rem;
    bottom: -5.9rem;
    background: var(--onio-color-background);
    display: block;
    width: 100%;
    z-index: 3;
    border-radius: 0 0 var(--border-radius) var(--border-radius);
    transition: opacity 0.3s cubic-bezier(0.33, 1, 0.68, 1);
    will-change: opacity;
  }
  h5 {
    font-weight: 400;
    font-size: 3.5rem;
    line-height: 114%;
    @media (max-width: 767px) {
      font-size: 2.4rem;
      line-height: 1.21;
    }
  }
`;
