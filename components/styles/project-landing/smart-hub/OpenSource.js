import styled from "styled-components";

export const BatterylessEnergyStyles = styled.div`
  .turnkey-landing-energy {
    padding: 8.2rem 0 8rem;
    .resource {
      margin-top: -6.5rem;
      margin-bottom: 0;
      @media (max-width: 1023px) {
        margin-top: 0;
      }
    }
  }
  .section-title {
    margin-bottom: 8.5rem
  }
  .turnkey-landing-energy .heading--block {
    margin-bottom: 7.1rem;
  }
  .turnkey-landing-energy .block-desc {
    margin-bottom: 0;
  }
  .image-list {
    margin-top: 17.7rem;
  }
  .image-block {
    background: #efffed;
    border-radius: 5rem;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 24px;
    height: 38.8rem;
    img {
      display: block;
      max-height: 35.7rem;
    }
    &--big {
      height: 80rem;
    }
  }
  @media (max-width: 1023.98px) {
    .turnkey-landing-energy .heading--block {
      margin-bottom: 65px;
    }
    .turnkey-landing-energy .block-desc {
      margin-bottom: 57px;
    }
  }
  @media (max-width: 1023.98px) {
    .turnkey-landing-energy {
      padding: 48px 0 47px;
    }
  }
`;
