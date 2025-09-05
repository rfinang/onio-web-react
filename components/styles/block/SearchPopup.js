import styled from "styled-components";
export const SearchPopupStyles = styled.div`
  &.modal {
    z-index: 50;
  }
  .modal-dialog {
    max-width: 100%;
    margin: 0;
  }

  .modal-content {
    border: none;
    border-radius: 0;
  }

  .modal-body {
    padding: 0;
  }
  .search-popup {
    padding-top: 10rem;
    background-color: var(--onio-color-background);
    min-height: 100vh;
  }
  @media (max-width: 739.98px) {
    .search-popup {
      padding-top: 112px;
    }
  }
  .search-popup .search-page {
    max-height: 100%;
    overflow-y: auto;
  }
  .search-page {
    padding: 14.4rem 0;
  }
  @media (max-width: 739.98px) {
    .search-page {
      padding: 160px 0 100px;
    }
  }

  .search-page .top-section .search-form {
    position: relative;
  }
  @media (max-width: 739.98px) {
    .search-page .top-section .search-form .form-group {
      margin-bottom: 38px;
    }
  }
  .search-page .top-section .search-form input {
    padding: 1.8rem 0;
    font-size: 5.6rem;
    padding-right: 9rem;
    height: auto;
  }
  @media (max-width: 739.98px) {
    .search-page .top-section .search-form input {
      font-size: 39px;
      padding: 0;
      padding-right: 40px;
      background-size: 30px;
      background-position: right center;
    }
  }
  .search-page .top-section .search-form .btn-submit {
    background-color: transparent;
    border: none;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 3.4rem;
    padding: 0;
    width: 4.6rem;
  }
  .search-page .top-section .search-form .btn-submit svg {
    display: block;
    max-width: 4.6rem;
    margin: 0 auto;
  }
  @media (max-width: 739.98px) {
    .search-page .top-section .search-form .btn-submit {
      right: 0;
      width: 30px;
    }
    .search-page .top-section .search-form .btn-submit svg {
      max-width: 30px;
    }
  }
  .search-page .top-section .total-results {
    margin-bottom: 17.2rem;
  }
  @media (max-width: 739.98px) {
    .search-page .top-section .total-results {
      margin-bottom: 44px;
    }
  }
  .search-page .top-section .search-category {
    list-style: none;
    padding-left: 0;
    margin-bottom: 8.8rem;
    display: flex;
    flex-wrap: wrap;
    font-size: 2rem;
  }
  @media (max-width: 739.98px) {
    .search-page .top-section .search-category {
      margin-bottom: 44px;
      font-size: 16.478px;
    }
  }
  .search-page .top-section .search-category li {
    margin-right: 2.8rem;
    margin-bottom: 0.4rem;
  }
  @media (max-width: 739.98px) {
    .search-page .top-section .search-category li {
      margin-right: 20px;
    }
  }
  .search-page .top-section .search-category li:last-child {
    margin-right: 0;
  }
  .search-page .top-section .search-category li a {
    display: block;
    color: var(--onio-color-muted);
    transition: color 0.4s ease;
  }
  .search-page .top-section .search-category li a:hover {
    text-decoration: none;
  }
  .search-page .top-section .search-category li a:not(.active):hover {
    color: #5a5c5b;
  }
  .search-page .top-section .search-category li a.active {
    color: var(--onio-color-primary);
  }
  .search-page .top-section .heading--block {
    margin-bottom: 6.2rem;
  }
  @media (max-width: 739.98px) {
    .search-page .top-section .heading--block {
      margin-bottom: 23px;
      margin-top: 111px;
    }
  }
  .search-page .top-section .side-list {
    list-style: none;
    padding-left: 0;
    margin-bottom: 4.4rem;
  }
  @media (max-width: 739.98px) {
    .search-page .top-section .side-list {
      margin-bottom: 44px;
    }
  }
  .search-page .top-section .side-list a {
    display: block;
    transition: padding-left 0.4s ease;
  }
  .search-page .top-section .side-list a:hover {
    text-decoration: none;
    padding-left: 1rem;
  }
  .search-page .top-section .side-list li + li {
    margin-top: 1rem;
  }
  @media (max-width: 739.98px) {
    .search-popup {
      .search-page {
        padding: 100px 0;
      }
    }
  }
`;
