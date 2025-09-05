import styled from "styled-components";
export const InvestorPartnerStyles = styled.div`
  .invertors__partner {
    position: relative;
  }
  .invertors__partner:after {
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

  .partner__logo {
    background: var(--onio-color-white);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: var(--border-radius);
    overflow: hidden;
  }
  .partner__logo:before {
    content: "";
    width: 1px;
    margin-left: -1px;
    float: left;
    height: 0;
    padding-top: 100%;
  }
  .partner__logo:after {
    content: "";
    display: block;
    clear: both;
  }
  @media (min-width: 740px) {
    .partner__logo {
      margin-bottom: 2.4rem;
    }
  }
  @media (max-width: 739.98px) {
    .partner__logo {
      margin-bottom: 2rem;
    }
  }
  .partner__logo img {
    max-width: 70%;
  }
`;
