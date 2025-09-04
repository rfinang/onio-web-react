import styled from "styled-components";

export const ProgrammingStyles = styled.div`
  padding: 12.6rem 0 5.9rem;
  background-color: var(--onio-color-background);
  position: relative;
  &:after {
    content: "";
    position: absolute;
    height: 6rem;
    bottom: -5.9rem;
    background: var(--onio-color-background);
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
  .smart-hub-programming {
    .section-desc,
    .section-title {
      margin-bottom: 5.2rem;
      word-break: break-word;
      @media (max-width: 739px) {
        margin-bottom: 30px;
      }
    }
    .banner {
      height: 82.2rem;
      background-size: 20px 20px;
      background-image: linear-gradient(90deg, #eaeaea 1px, transparent 0),
        linear-gradient(180deg, #eaeaea 1px, transparent 0);
      background-repeat: repeat;
      background-position: top;
      border-radius: 5rem;
      background-color: var(--onio-color-white);
      padding: 100px;
      /* display: flex;
      align-items: center;
      justify-content: center; */
      img {
        display: block;
        /* max-height: 100%; */
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
      @media (max-width: 739px) {
        padding: 20px;
        height: 422px;
        border-radius: 20px;
      }
    }
  }
  @media (max-width: 739px) {
    padding: 50px 0;
  }
`;
