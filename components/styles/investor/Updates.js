import styled from "styled-components";
export const InvestorUpdateStyles = styled.div`
  .invertors__updates,
  .invertors__partner {
    position: relative;
  }
  .invertors__updates:after,
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
  .invertors__data {
    position: relative;
  }
  .invertors__data:after {
    content: "";
    position: absolute;
    height: 6rem;
    bottom: -5.9rem;
    background: var(--onio-color-primary);
    display: block;
    width: 100%;
    z-index: 3;
    border-radius: 0 0 var(--border-radius) var(--border-radius);
    transition: opacity 0.3s cubic-bezier(0.33, 1, 0.68, 1);
    will-change: opacity;
  }
  .invertors__data .btn--bg:hover {
    background-color: var(--onio-color-muted);
    border-color: var(--onio-color-muted);
    color: var(--onio-color-primary);
  }
`;
