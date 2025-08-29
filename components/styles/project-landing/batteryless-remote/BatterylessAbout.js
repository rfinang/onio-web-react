import styled from "styled-components";

export const BatterylessAboutStyles = styled.div`
  .turnkey-landing-about {
    padding: 4.4rem 0 8rem;
  }
  .turnkey-landing-about .heading--block {
    margin-bottom: 5.5rem;
  }
  .turnkey-landing-about .info-link {
    color: #000000;
    font-weight: 500;
    font-size: 2rem;
    line-height: 2.4rem;
  }
  .turnkey-landing-about .info-link svg {
    display: block;
    margin-left: 1.3rem;
    transition: transform 0.4s ease;
  }
  .turnkey-landing-about .info-link:hover svg {
    transform: translateX(0.5rem);
  }
  .turnkey-landing-about .info-desc {
    margin-bottom: 8.2rem;
  }
  .turnkey-landing-about .info-foot {
    font-weight: 500;
    font-size: 4.5rem;
    line-height: 1.16;
    margin-bottom: 0;
    max-width: 101.1rem;
  }
  @media (max-width: 739.98px) {
    .turnkey-landing-about {
      padding: 3.3846153846rem 0 4.8rem;
    }
    .turnkey-landing-about .heading--block {
      margin-bottom: 5.3rem;
    }
    .turnkey-landing-about .info-desc {
      margin-bottom: 7.2rem;
    }
    .turnkey-landing-about .info-foot {
      font-size: 3.9rem;
      line-height: 1.17;
    }
  }
`;
