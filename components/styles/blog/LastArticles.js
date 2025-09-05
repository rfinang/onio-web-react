import styled from "styled-components";
export const LastArticleStyles = styled.div`
  .lastArticles {
    position: relative;
  }
  .lastArticles:after {
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
  @media (min-width: 740px) {
    .lastArticles {
      padding-top: 8rem;
    }
  }
  @media (max-width: 739.98px) {
    .lastArticles {
      padding-top: 20px;
    }
  }

  .article {
    overflow: hidden;
    background-color: var(--onio-color-white);
    margin-bottom: 2.4rem;
  }
  @media (min-width: 1024px) {
    .article {
      height: 100%;
      height: calc(100% - 2.4rem);
    }
  }
  @media (min-width: 1024px) {
    .article {
      border-radius: var(--border-radius);
    }
  }
  @media (max-width: 1023.98px) {
    .article {
      border-radius: 20px;
    }
  }
  .article__thumbnail {
    position: relative;
  }
  @media (min-width: 1024px) {
    .article__thumbnail {
      height: 39rem;
      width: calc(50% - 16px);
    }
  }
  @media (max-width: 1023.98px) {
    .article__thumbnail {
      width: 100%;
    }
  }
  @media (min-width: 1200px) {
    .article__thumbnail:before {
      content: "";
      width: 1px;
      margin-left: -1px;
      float: left;
      height: 0;
      padding-top: 99.0366088632%;
    }
    .article__thumbnail:after {
      content: "";
      display: block;
      clear: both;
    }
  }
  @media (min-width: 1024px) and (max-width: 1199.98px) {
    .article__thumbnail:before {
      content: "";
      width: 1px;
      margin-left: -1px;
      float: left;
      height: 0;
      padding-top: 113.2530120482%;
    }
    .article__thumbnail:after {
      content: "";
      display: block;
      clear: both;
    }
  }
  @media (max-width: 1023.98px) {
    .article__thumbnail {
      height: auto;
      padding-top: 55.223880597%;
    }
    .article__thumbnail img {
      position: absolute;
      top: 0;
      left: 0;
    }
  }
  .article__info {
    margin-left: auto;
  }
  @media (min-width: 1024px) {
    .article__info {
      width: calc(50% - 12px);
      padding: 3.2rem 3.2rem 3.2rem 0;
    }
  }
  @media (max-width: 1023.98px) {
    .article__info {
      width: 100%;
      padding: 18px 18px 20px 18px;
    }
  }
  @media (min-width: 740px) {
    .article__info__meta {
      margin-bottom: 4.8rem;
    }
  }
  @media (max-width: 739.98px) {
    .article__info__meta {
      margin-bottom: 30px;
    }
  }
  .article__info__tags {
    display: flex;
    align-items: center;
  }
  @media (min-width: 1024px) {
    .article__info__tags {
      margin-bottom: 2rem;
    }
  }
  @media (max-width: 1023.98px) {
    .article__info__tags {
      margin-bottom: 10px;
    }
  }
  .article__info__tags .tag__item--slack {
    margin-left: 0.9rem;
    margin-right: 0.9rem;
    position: relative;
    top: 0.06em;
  }
  .article__info__tags .tag__item__link {
    color: var(--onio-color-muted);
    transition: color 0.3s cubic-bezier(0.33, 1, 0.68, 1);
  }
  @media (any-hover: hover) {
    .article__info__tags .tag__item__link:hover {
      text-decoration: none;
      color: var(--onio-color-primary);
    }
  }
  .article__info__heading {
    margin-bottom: 3rem;
  }
  @media (min-width: 1024px) {
    .article__info__heading {
      max-width: 30rem;
      min-height: 12.7rem;
    }
  }
  @media (min-width: 1200px) {
    .article--lite .article__info__meta {
      margin-bottom: 8.4rem;
    }
  }
  @media (min-width: 1024px) and (max-width: 1199.98px) {
    .article--lite .article__info__meta {
      margin-bottom: 5rem;
    }
  }
  @media (max-width: 1023.98px) {
    .article--lite .article__info__meta {
      margin-bottom: 20px;
    }
  }
  .article__link {
    display: block;
  }
  @media (min-width: 1024px) {
    .article__link {
      height: 100%;
      display: flex;
    }
  }
  @media (any-hover: hover) {
    .article__link:hover {
      text-decoration: none;
    }
    .article__link:hover .iconLink--arrow--large {
      background-color: var(--onio-color-primary);
    }
    .article__link:hover .iconLink--arrow--large svg path {
      stroke: var(--onio-color-white);
    }
  }
`;
