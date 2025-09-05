import styled from "styled-components";

export const SearchPageStyles = styled.div`
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
  .search-page .main-section .heading--block {
    margin-bottom: 7.7rem;
  }
  @media (max-width: 739.98px) {
    .search-page .main-section .heading--block {
      margin-bottom: 44px;
    }
  }
  .search-page .main-section .article-card {
    border-radius: 5rem;
    overflow: hidden;
    position: relative;
    background-color: var(--onio-color-white);
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  .search-page .main-section .article-card .img {
    position: relative;
    overflow: hidden;
    padding-top: 45.9340659341%;
  }
  .search-page .main-section .article-card .img img {
    position: absolute;
    top: 0;
    left: 0;
  }
  .search-page .main-section .article-card .info {
    padding: 2.3rem 2.5rem 3.2rem;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }
  .search-page .main-section .article-card .info-title {
    margin-bottom: 1.2rem;
  }
  .search-page .main-section .article-card .info-icon {
    flex-shrink: 0;
    margin-top: auto;
    display: block;
    width: 4.6rem;
  }
  .search-page .main-section .article-card .info-icon circle {
    fill: var(--onio-color-white);
  }
  .search-page .main-section .article-card .info-icon circle,
  .search-page .main-section .article-card .info-icon path {
    transition: fill 0.4s ease, stroke 0.4s ease;
  }
  .search-page .main-section .article-card .link {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  .search-page .main-section .article-card:hover .info-icon circle {
    fill: var(--onio-color-primary);
  }
  .search-page .main-section .article-card:hover .info-icon path {
    stroke: var(--onio-color-white);
  }
  @media (max-width: 739.98px) {
    .search-page .main-section .article-card {
      border-radius: 2rem;
    }
    .search-page .main-section .article-card .info {
      padding: 30px 18px 28px;
    }
    .search-page .main-section .article-card .info-title {
      margin-bottom: 15px;
    }
    .search-page .main-section .article-card .info-icon {
      width: 30px;
    }
  }
  .search-page .main-section .card-text {
    max-width: 69.6rem;
    margin-bottom: 4.1rem;
  }
  .search-page .main-section .card-text__category {
    color: var(--onio-color-muted);
    display: flex;
    flex-wrap: wrap;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
    list-style: none;
    padding-left: 0;
    margin-bottom: 1rem;
  }
  .search-page .main-section .card-text__category li {
    margin-bottom: 1.2rem;
  }
  .search-page .main-section .card-text__category li:not(:last-child):after {
    content: "/";
    display: inline-block;
  }
  .search-page .main-section .card-text__category li a {
    color: inherit;
    transition: color 0.4s ease;
  }
  .search-page .main-section .card-text__category li a:hover {
    color: #5a5c5b;
  }
  .search-page .main-section .card-text__title {
    margin-bottom: 2.1rem;
  }
  .search-page .main-section .card-text__title a {
    display: block;
    color: inherit;
  }
  .search-page .main-section .card-text__title a:hover {
    text-decoration: none;
  }
  .search-page .main-section .card-text__desc {
    margin-bottom: 1.9rem;
    font-size: 1.6478rem;
    line-height: 121%;
  }
  .search-page .main-section .card-text__link {
    font-size: 1.6478rem;
    line-height: 121%;
    text-decoration-line: underline;
    color: var(--onio-color-primary);
    transition: letter-spacing 0.4s ease;
    display: inline-block;
  }
  .search-page .main-section .card-text__link:hover {
    letter-spacing: 1px;
  }
  @media (max-width: 739.98px) {
    .search-page .main-section .card-text {
      margin-bottom: 23px;
    }
    .search-page .main-section .card-text__category {
      margin-bottom: 0;
    }
    .search-page .main-section .card-text__category li {
      margin-bottom: 12px;
    }
    .search-page .main-section .card-text__title {
      margin-bottom: 8px;
    }
    .search-page .main-section .card-text__desc {
      margin-bottom: 13px;
    }
  }
  .search-page .main-section .block-content {
    padding-bottom: 1.2rem;
  }
  .search-page .main-section .block-content + .block-content {
    padding-top: 4.6rem;
    border-top: 2px solid var(--onio-color-muted);
  }
  .search-page .main-section .block-content .block-top {
    -webkit-box-align: end;
    -ms-flex-align: end;
    align-items: flex-end;
    margin-bottom: 2.8rem;
  }
  .search-page .main-section .block-content .block-top .block-title {
    margin-bottom: 0;
    margin-right: 0.9rem;
  }
  .search-page .main-section .block-content .block-top .block-viewmore {
    flex-shrink: 0;
    display: inline-block;
    font-size: 2rem;
    color: var(--onio-color-muted);
    text-decoration: underline;
    transition: color 0.4s ease;
  }
  .search-page .main-section .block-content .block-top a.block-viewmore:hover {
    color: #5a5c5b;
  }
  .search-page .main-section .block-content .block-top span.block-viewmore {
    text-decoration: none;
  }
  .search-page .main-section .block-content .block-main .block-col {
    margin-bottom: 3rem;
  }
  @media (max-width: 739.98px) {
    .search-page .main-section .block-content {
      padding-bottom: 22px;
    }
    .search-page .main-section .block-content + .block-content {
      padding-top: 33px;
    }
    .search-page .main-section .block-content .block-top {
      margin-bottom: 17px;
    }
    .search-page .main-section .block-content .block-main .block-col {
      margin-bottom: 25px;
    }
  }
  .search-page .main-section .resource {
    max-width: 100%;
    margin-bottom: 0;
  }
  @media (max-width: 1023.98px) {
    .search-page .main-section .sidebar {
      border-top: 2px solid var(--onio-color-muted);
      padding-top: 33px;
    }
  }
  .search-page__loadmore {
    margin-top: 4.9rem;
  }
  @media (max-width: 739.98px) {
    .search-page__loadmore {
      margin-top: 25px;
    }
  }

  .resource {
    text-decoration: none !important;
    display: block;
    max-width: 21.6rem;
    padding: 1.2rem 1.5rem 2.1rem 1.5rem;
    transition: all 0.4s cubic-bezier(0.33, 1, 0.68, 1);
    margin-bottom: 2.4rem;
    width: 100%;
  }
  .resource--red {
    color: var(--onio-color-accent);
  }
  @media (min-width: 1200px) {
    .resource--red {
      border: 2px solid var(--onio-color-accent);
    }
  }
  @media (max-width: 1199.98px) {
    .resource--red {
      border: 1.5px solid var(--onio-color-accent);
    }
  }
  @media (any-hover: hover) {
    .resource--red:hover {
      background: var(--onio-color-accent);
      color: var(--onio-color-primary);
    }
    .resource--red:hover .iconLink {
      background: var(--onio-color-primary);
      border-color: var(--onio-color-primary) !important;
    }
    .resource--red:hover .iconLink svg path {
      stroke: var(--onio-color-accent);
    }
  }
  .resource--black {
    border: 2px solid var(--onio-color-primary);
  }
  .resource--black:hover {
    background-color: var(--onio-color-primary);
    color: var(--onio-color-white);
  }
  .resource--black:hover .iconLink {
    background-color: var(--onio-color-white);
  }
  .resource__heading {
    margin-bottom: 3rem;
    min-height: 11.2rem;
  }
  .resource__icon {
    position: relative;
    left: 0.25em;
  }
`;
