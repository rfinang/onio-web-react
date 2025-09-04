import styled from "styled-components";

export const HomeContactStyles = styled.div`
  .contactBlock {
    background: var(--onio-color-secondary);
    padding-top: 14rem;
    position: relative;
  }
  .contactBlock.none-radius {
    content: none;
    padding-bottom: 6rem;
  }
  .contactBlock.none-radius:after {
    content: none;
  }
  @media (min-width: 768px) {
    .contactBlock {
      padding-bottom: 3rem;
    }
  }
  @media (min-width: 576px) and (max-width: 767.98px) {
    .contactBlock {
      padding-bottom: 5rem;
    }
  }
  @media (max-width: 575.98px) {
    .contactBlock {
      padding-bottom: 30px;
    }
  }
  .contactBlock:after {
    content: "";
    position: absolute;
    height: 6rem;
    bottom: -5.9rem;
    background: var(--onio-color-secondary);
    display: block;
    width: 100%;
    z-index: 3;
    border-radius: 0 0 var(--border-radius) var(--border-radius);
    transition: opacity 0.3s cubic-bezier(0.33, 1, 0.68, 1);
    will-change: opacity;
  }
  .contactBlock.contactBlock--invertors {
    background: var(--onio-color-muted);
  }
  .contactBlock.contactBlock--invertors:after {
    content: "";
    position: absolute;
    height: 6rem;
    bottom: -5.9rem;
    background: var(--onio-color-muted);
    display: block;
    width: 100%;
    z-index: 3;
    border-radius: 0 0 var(--border-radius) var(--border-radius);
    transition: opacity 0.3s cubic-bezier(0.33, 1, 0.68, 1);
    will-change: opacity;
  }
  
  .row--success {
    display: none !important;
  }

  .heading--block--success {
    display: none !important;
  }
  
  .newsletterForm.is-success .row--form {
    display: none !important;
  }
  .newsletterForm.is-success .row--success {
    display: flex !important;
  }
  .newsletterForm.is-success .heading--block--title {
    display: none !important;
  }
  .newsletterForm.is-success .heading--block--success {
    display: inline-block !important;
  }
  input:-webkit-autofill,
  input:-webkit-autofill:hover, 
  input:-webkit-autofill:focus {
    -webkit-box-shadow: 0 0 0px 1000px var(--onio-color-secondary) inset !important;
    font-size: 18px !important;
  }
`;
