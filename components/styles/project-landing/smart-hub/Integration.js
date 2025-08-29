import styled from "styled-components";

export const IntegrationStyles = styled.div`
  padding: 12.6rem 0 5.9rem;
  background-color: transparent;
  position: relative;
  &:after {
    content: "";
    position: absolute;
    height: 6rem;
    bottom: -5.9rem;
    background: #d4ffcd;
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
  .smart-hub-integration {
    .section-desc,
    .section-title {
      margin-bottom: 9.7rem;
      word-break: break-word;
      @media (max-width: 739px) {
        margin-bottom: 30px;
      }
    }
    .banner-list {
      .banner {
        // height: 33.6rem;
        margin-bottom: 2rem;
        background-color: #ffffff;
        border-radius: 5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 2.4rem;
        img {
          display: block;
          max-width: 70%;
        }
      }
      .banner:before {
        content: "";
        width: 1px;
        margin-left: -1px;
        float: left;
        height: 0;
        padding-top: 100%;
      }
      .banner:after {
        content: "";
        display: block;
        clear: both;
      }
    }
  }
`;
