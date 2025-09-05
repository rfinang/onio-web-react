import styled from "styled-components";
export const ArticleDetailsStyles = styled.div`
  .js-copy-clipboard {
    position: relative;
  }
  .js-copy-clipboard.copied {
    color: #5a5c5b;
    text-decoration: none;
    pointer-events: none;
  }

  @media (min-width: 740px) {
    .blogHeader {
      padding-top: 14.4rem;
    }
  }
  @media (max-width: 739.98px) {
    .blogHeader {
      padding-top: 80px;
    }
  }

  @media (min-width: 740px) {
    .blogDetail {
      padding-bottom: 14.5rem;
    }
  }
  @media (max-width: 739.98px) {
    .blogDetail {
      padding-bottom: 80px;
    }
  }
  .blogDetail__header .pageLink {
    margin-top: -8rem;
  }
  @media (max-width: 739.98px) {
    .blogDetail__meta__text {
      font-size: 14px;
    }
  }
  .blogDetail__meta__right {
    padding-top: 0.8rem;
  }
  .blogDetail__poster .image__object-fit {
    padding-top: 57.7385159011%;
    position: relative;
  }
  .blogDetail__poster .image__object-fit img {
    position: absolute;
    top: 0;
    left: 0;
  }
  .blogDetail__poster {
    figcaption {
      font-weight: 500;
      font-size: 1.4rem;
      line-height: 1.6rem;
      margin-top: 1rem;
      color: var(--onio-color-muted);
      padding-left: 53px;
      @media (max-width: 739.98px) {
        padding-left: 20px;
        font-weight: 500;
        font-size: 12px;
        line-height: 16px;
      }
    }
  }
  .blogDetail__desc a {
    display: inline;
    text-decoration: underline;
  }
  .blogDetail__desc a span {
    display: inline;
    text-decoration: underline;
  }
  @media (min-width: 740px) {
    .blogDetail__content {
      padding-bottom: 28rem;
    }
  }
  @media (max-width: 739.98px) {
    .blogDetail__content {
      padding-bottom: 120px;
    }
  }
  .blogDetail__content__right p a {
    display: inline;
  }
  .blogDetail__content figure {
    margin-top: 9rem;
    margin-bottom: 7rem;
  }
  .blogDetail__content figure img {
    border-radius: var(--border-radius);
    max-width: 100%;
    height: auto;
  }
  .blogDetail__content blockquote {
    line-height: 1.1555555556;
    color: var(--onio-color-muted);
    margin-top: 9.4rem;
    margin-bottom: 9.4rem;
  }
  @media (min-width: 740px) {
    .blogDetail__content blockquote {
      font-size: 4.5rem;
      padding-left: 1.2444444444em;
    }
  }
  @media (max-width: 739.98px) {
    .blogDetail__content blockquote {
      font-size: 35px;
    }
  }
  .blogDetail__content blockquote small {
    font-size: 2rem;
    display: block;
    color: var(--onio-color-primary);
    margin-top: 2.4rem;
  }
  .blogDetail__content ul {
    padding-left: 1em;
    margin-bottom: 2.8rem;
  }
  .blogDetail__content ul.ul--navi {
    list-style: none;
    line-height: 1.25;
    margin-bottom: 7.2rem;
    margin-top: 7.2rem;
    padding-left: 0;
  }
  .blogDetail__content ul.ul--navi li {
    padding: 0;
    display: flex;
    align-items: center;
    margin-bottom: 2.5rem;
  }
  .blogDetail__content ul.ul--navi li:before {
    display: none;
  }
  .blogDetail__content ul.ul--navi .ul__number {
    display: inline-block;
    height: 2.3em;
    width: 2.3em;
    margin-right: 1.25em;
    line-height: 2.1em;
    border-radius: 50%;
    text-align: center;
    flex: 0 0 2.3em;
  }
  @media (min-width: 1200px) {
    .blogDetail__content ul.ul--navi .ul__number {
      border: 2px solid var(--onio-color-primary);
      font-size: 1.2em;
    }
  }
  @media (max-width: 1199.98px) {
    .blogDetail__content ul.ul--navi .ul__number {
      border: 1.5px solid var(--onio-color-primary);
      font-size: 18px;
    }
  }
  .blogDetail__content ul.ul--navi .ul__text {
    display: inline-block;
  }
  .blogDetail__content ul.ul--list {
    list-style: none;
    line-height: 1.25;
    margin-bottom: 7.2rem;
    margin-top: 7.2rem;
    padding-left: 0;
  }
  .blogDetail__content ul.ul--list li {
    display: flex;
    align-items: center;
    margin-bottom: 1.8rem;
    border-radius: var(--border-radius);
  }
  @media (min-width: 1200px) {
    .blogDetail__content ul.ul--list li {
      border: 2px solid var(--onio-color-primary);
      padding: 3rem 4rem;
    }
  }
  @media (max-width: 1199.98px) {
    .blogDetail__content ul.ul--list li {
      border: 1.5px solid var(--onio-color-primary);
      padding: 22px;
    }
  }
  .blogDetail__content ul.ul--list li:before {
    display: none;
  }
  .blogDetail__content ul.ul--list .ul__number {
    margin-right: 0.7142857143em;
  }
  @media (min-width: 740px) {
    .blogDetail__content ul.ul--list .ul__number {
      font-size: 1.75em;
    }
  }
  @media (max-width: 739.98px) {
    .blogDetail__content ul.ul--list .ul__number {
      font-size: 18px;
    }
  }
  .blogDetail__content ul.ul--list .ul__text {
    display: inline-block;
  }
  .blogDetail__content ul li {
    margin-bottom: 0.5em;
  }
  .blogDetail__content__border {
    border-bottom: 2px solid var(--onio-color-primary);
  }
  @media (min-width: 740px) {
    .blogDetail__content__border {
      padding-top: 4.8rem;
    }
  }
  @media (max-width: 739.98px) {
    .blogDetail__content__border {
      padding-top: 10px;
    }
  }
  .blogDetail__content__sharing {
    margin: 0 !important;
    padding: 0 !important;
    position: sticky;
    top: 13.8888888889vh;
  }
  .blogDetail__content__sharing li:before {
    display: none !important;
  }
  .blogDetail__content__sharing li {
    padding-left: 0 !important;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
    margin-bottom: 0 !important;
  }
  .blogDetail__content__sharing li:first-child {
    margin-left: 0 !important;
  }

  .newsDetail__content {
    position: relative;
  }
  .newsDetail__content:after {
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
  @media (min-width: 1024px) {
    .newsDetail__content .blogHeader {
      padding-bottom: 12rem;
    }
  }
  @media (min-width: 740px) and (max-width: 1023.98px) {
    .newsDetail__content .blogHeader {
      padding-bottom: 80px;
    }
  }
  @media (max-width: 739.98px) {
    .newsDetail__content .blogHeader {
      padding-bottom: 60px;
    }
  }

  .blogAuthor__avatar {
    border-radius: 50%;
    padding-top: 100%;
    position: relative;
  }
  .blogAuthor__avatar img {
    position: absolute;
    top: 0;
    left: 0;
  }
  .blogAuthor__info {
    margin-bottom: 4.5rem;
  }
  .blogAuthor__about {
    margin-bottom: 4rem;
  }
`;
