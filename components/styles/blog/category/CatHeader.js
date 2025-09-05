import styled from "styled-components";
export const CatHeaderStyles = styled.div`
  .catArticles__title__text {
    position: relative;
    display: inline-block;
  }
  .catArticles__title__text:after {
    content: "";
    display: block;
    border-bottom: 0.06em solid var(--onio-color-primary);
    width: 100%;
    bottom: 0.06em;
    position: absolute;
    left: 0;
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

  @media (max-width: 739.98px) {
    .filterBlog .h6,
    .filterBlog a {
      font-size: 18px !important;
    }
  }
  @media (min-width: 740px) {
    .filterBlog__categories {
      display: flex;
      margin-left: 7rem;
    }
  }
  @media (min-width: 740px) {
    .filterBlog__item {
      margin-right: 2.8rem;
    }
  }
  @media (max-width: 739.98px) {
    .filterBlog__item {
      margin-bottom: 10px;
    }
  }
  .filterBlog__item:last-child {
    margin-right: 0;
  }
  .filterBlog__item a {
    display: block;
    color: var(--onio-color-primary);
  }
`;
