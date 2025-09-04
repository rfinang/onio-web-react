import styled from "styled-components";
export const BlogSlideStyles = styled.div`
  .blogSlide__item {
    position: relative;
  }
  .blogSlide__container {
    position: absolute;
    top: 0;
    padding-top: 10rem;
    left: 0;
    width: 100%;
    z-index: 3;
  }
  .blogSlide .slick-dots {
    z-index: 5;
    bottom: 4rem;
    left: 0;
    width: 100%;
  }
  .blogSlide .slick-dots ul {
    margin-bottom: 0;
    text-align: left;
  }
  .blogSlide .slick-dots li {
    width: auto;
    height: auto;
    margin: 0;
  }
  .blogSlide .slick-dots li + li {
    margin-left: 10px;
  }
  .blogSlide .slick-dots li span {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 3.4rem;
    height: 3.4rem;
    border: 2px solid #fff;
    color: #fff;
    border-radius: 50%;
    font-weight: 400;
    font-size: 2rem;
    line-height: 2.4rem;
    transition: background-color 0.4s ease, color 0.4s ease;
  }
  .blogSlide .slick-dots li span:hover,
  .blogSlide .slick-dots li.slick-active span {
    background-color: #fff;
    color: var(--onio-color-primary);
  }
  @media (max-width: 575px) {
    .blogSlide .slick-dots li span {
      width: 20px;
      height: 20px;
      font-size: 12px;
      line-height: 14px;
    }
  }
  .blogSlide__item__inner {
    position: relative;
    img {
      position: absolute;
      top: 0;
      left: 0;
      max-width: none;
    }
  }
  @media (min-width: 1400px) {
    .blogSlide__item__inner {
      height: 55.36vw;
    }
  }
  @media (min-width: 1024px) and (max-width: 1399.98px) {
    .blogSlide__item__inner {
      height: 57.276119403vw;
    }
  }
  @media (min-width: 740px) and (max-width: 1023.98px) {
    .blogSlide__item__inner {
      height: 71.6145833333vw;
    }
  }
  @media (max-width: 739.98px) {
    .blogSlide__item__inner {
      height: 58.2512315271vh;
    }
  }
  .blogSlide__articles__wrap {
    position: relative;
  }
  @supports (backdrop-filter: blur(30px)) {
    .blogSlide__article {
      backdrop-filter: blur(10px);
    }
  }
  @supports not (backdrop-filter: blur(30px)) {
    .blogSlide__article {
      background-color: rgba(90, 92, 91, 0.5);
    }
  }
  @media (min-width: 1200px) {
    .blogSlide__article {
      padding: 4.8rem 3.8rem;
    }
  }
  @media (min-width: 740px) and (max-width: 1199.98px) {
    .blogSlide__article {
      padding: 3rem;
    }
  }
  @media (max-width: 739.98px) {
    .blogSlide__article {
      padding: 15px;
    }
  }
  .blogSlide__article.active {
    pointer-events: auto !important;
  }
  .blogSlide__article:not(:first-child) {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    clip-path: inset(0 0 100% 0);
    pointer-events: none;
  }
  @media (min-width: 1200px) {
    .blogSlide__article__meta {
      margin-bottom: 9rem;
    }
  }
  @media (min-width: 740px) and (max-width: 1199.98px) {
    .blogSlide__article__meta {
      margin-bottom: 6rem;
    }
  }
  @media (max-width: 739.98px) {
    .blogSlide__article__meta {
      margin-bottom: 30px;
    }
  }
  @media (min-width: 1200px) {
    .blogSlide__article__info__tags {
      margin-bottom: 4rem;
    }
  }
  @media (min-width: 740px) and (max-width: 1199.98px) {
    .blogSlide__article__info__tags {
      margin-bottom: 2rem;
    }
  }
  @media (max-width: 739.98px) {
    .blogSlide__article__info__tags {
      margin-bottom: 25px !important;
    }
  }
  @media (min-width: 1200px) {
    .blogSlide__article__info__heading {
      min-height: 20rem;
      margin-bottom: 4rem;
    }
  }
  @media (min-width: 740px) and (max-width: 1199.98px) {
    .blogSlide__article__info__heading {
      min-height: 16rem;
      margin-bottom: 2rem;
    }
  }
  @media (max-width: 739.98px) {
    .blogSlide__article__info__heading {
      margin-bottom: 20px;
      min-height: 80px;
      font-size: 24px;
    }
  }
  @media (any-hover: hover) {
    .blogSlide__article__inner:hover {
      text-decoration: none;
    }
    .blogSlide__article__inner:hover .iconLink--arrow--large svg path {
      stroke: #222021;
    }
    .blogSlide__article__inner:hover .iconLink--arrow--large {
      background-color: #ffffff;
    }
  }

  .article {
    overflow: hidden;
    background-color: #ffffff;
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
    color: #aeadad;
    transition: color 0.3s cubic-bezier(0.33, 1, 0.68, 1);
  }
  @media (any-hover: hover) {
    .article__info__tags .tag__item__link:hover {
      text-decoration: none;
      color: #222021;
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
      background-color: #222021;
    }
    .article__link:hover .iconLink--arrow--large svg path {
      stroke: #ffffff;
    }
  }
`;
