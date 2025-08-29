import styled from "styled-components";

export const IntroductionStyles = styled.div`
  .shelf-label-introduction {
    padding: 3.1rem 0 8rem;
  }
  .shelf-label-introduction .heading--block {
    margin-bottom: 5.5rem;
  }
  .shelf-label-introduction .info-link {
    color: #000000;
    font-weight: 500;
    font-size: 2rem;
    line-height: 2.4rem;
  }
  .shelf-label-introduction .info-link svg {
    display: block;
    margin-left: 1.3rem;
    transition: transform 0.4s ease;
  }
  .shelf-label-introduction .info-link:hover svg {
    transform: translateX(0.5rem);
  }
  .shelf-label-introduction .info-desc {
    margin-bottom: 8.2rem;
    max-width: 70rem;
  }
  .shelf-label-introduction .info-foot {
    font-weight: 500;
    font-size: 4.5rem;
    line-height: 1.16;
    margin-bottom: 0;
    max-width: 93.1rem;
  }

  .shelf-label-introduction .image-block {
    margin-top: 6.3rem;
    position: relative;
    padding-top: 56.894150417%;
    overflow: hidden;
    img {
      position: absolute;
      top: 0;
      left: 0;
    }
  }

  @media (max-width: 1023.98px) {
    .shelf-label-introduction .image-block {
      margin-top: 40px;
    }
  }
  @media (max-width: 739.98px) {
    .shelf-label-introduction {
      padding: 3.3846153846rem 0 4.8rem;
    }
    .shelf-label-introduction .heading--block {
      margin-bottom: 5.3rem;
    }
    .shelf-label-introduction .info-desc {
      margin-bottom: 7.2rem;
    }
    .shelf-label-introduction .info-foot {
      font-size: 3.9rem;
      line-height: 1.17;
    }
  }
`;
