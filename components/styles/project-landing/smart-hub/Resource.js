import styled from "styled-components";

export const ResourceStyles = styled.div`
  padding: 11.9rem 0 3.7rem;
  background-color: var(--onio-color-primary);
  position: relative;
  color: var(--onio-color-white);
  &:after {
    content: "";
    position: absolute;
    height: 6rem;
    bottom: -5.9rem;
    background: var(--onio-color-primary);
    display: block;
    width: 100%;
    z-index: 3;
    border-radius: 0 0 var(--border-radius) var(--border-radius);
    -webkit-transition: opacity 0.3s cubic-bezier(0.33, 1, 0.68, 1);
    transition: opacity 0.3s cubic-bezier(0.33, 1, 0.68, 1);
    will-change: opacity;
  }
  .heading--block {
    margin-bottom: 9rem;
    @media (max-width: 739px) {
      margin-bottom: 4rem;
    }
  }
  .smart-hub-resource {
    .section-title {
      max-width: 57.4rem;
      margin-bottom: 6.8rem;
      color: var(--onio-color-white);
    }
    .section-desc {
      color: var(--onio-color-white);
      max-width: 69.2rem;
      margin-bottom: 10.5rem;
    }
    .section-desc,
    .section-title {
      @media (max-width: 739px) {
        margin-bottom: 30px;
      }
    }
    .info-list {
      list-style: none;
      padding-left: 0;
      margin-bottom: 0;
    }
    .info-list li {
      border-top: 2px solid var(--onio-color-white);
    }
    .info-list li:last-child {
      border-bottom: 2px solid var(--onio-color-white);
    }
    .info-list li a {
      display: flex;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      -webkit-box-pack: justify;
      -ms-flex-pack: justify;
      justify-content: space-between;
      color: var(--onio-color-white);
      padding: 16px 0;
    }
    .info-list li a svg circle {
      fill: transparent;
    }
    .info-list li a svg path,
    .info-list li a svg circle {
      transition: fill 0.4s ease, stroke 0.4s ease;
    }
    .info-list li a:hover {
      text-decoration: none;
    }
    .info-list li a:hover svg circle {
      fill: var(--onio-color-white);
    }
    .info-list li a:hover svg path {
      stroke: #000;
    }
  }

  @media (max-width: 739.98px) {
    padding: 110px 0 50px;
    .smart-hub-resource {
      .info-list {
        width: 100%;
      }
      .info-list li a {
        font-size: 2.2rem;
      }
      .info-list li a svg {
        display: block;
        width: 30px;
        height: auto;
      }
    }
  }
`;
