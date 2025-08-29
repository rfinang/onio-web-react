import styled from "styled-components";
export const InvestorDataStyles = styled.div`
  .invertors__data {
    position: relative;
  }
  .invertors__data:after {
    content: "";
    position: absolute;
    height: 6rem;
    bottom: -5.9rem;
    background: #222021;
    display: block;
    width: 100%;
    z-index: 3;
    border-radius: 0 0 var(--border-radius) var(--border-radius);
    transition: opacity 0.3s cubic-bezier(0.33, 1, 0.68, 1);
    will-change: opacity;
  }
  .invertors__data .btn--bg:hover {
    background-color: #aeadad;
    border-color: #aeadad;
    color: #222021;
  }

  .fundingTimeline {
    height: 21.6rem;
    padding: 1rem;
    font-weight: 500 !important;
  }
  .fundingTimeline--solid {
    background: #ff6231;
    color: #222021;
  }
  .fundingTimeline--border {
    border: 2px solid #ff6231;
    color: #ff6231;
  }
  .fundingTimeline__inner {
    position: relative;
    height: 100%;
    width: 100%;
  }
  .fundingTimeline__label {
    display: block;
    line-height: 1;
  }
  .fundingTimeline__title {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    margin-bottom: 0;
  }
`;
