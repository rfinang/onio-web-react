import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {calculateReadTime} from "../../helper";

import { BlogSlideStyles } from "../styles/blog/BlogSlide";
import ImageComp from "../common/Image";
import Link from "next/link";
const settings = {
  dots: true,
  arrows: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: true,
  autoplay: true,
  autoplaySpeed: 4000,
  customPaging: (i) => <span>{i + 1}</span>,
  appendDots: (dots) => (
    <div>
      <div className="container">
        <ul className="ul-reset"> {dots} </ul>
      </div>
    </div>
  ),
};
function BlogSlide({ blogFeatured }) {
  if (!blogFeatured) return null;
  return (
    <BlogSlideStyles>
      <div
        className="blogSlide maskSlide js-blogSlide js-animation--fade--none"
        data-screen-offset="1"
      >
        <Slider {...settings}>
          {blogFeatured.map((item) => {
            const { id, slug, categories, feature_image, read_time, title, publish_date, content } = item;
            let createAt = new Date(publish_date);
            createAt = createAt.toLocaleString("en-us", {
              day: "numeric",
              month: "short",
              year: "numeric",
            });
            return (
              <div key={id} className="slide-item">
                <div className="blogSlide__item">
                  <div className="blogSlide__item__img">
                    <div className="blogSlide__item__inner image__object-fit">
                      <ImageComp image={feature_image} />
                    </div>
                  </div>
                  <div className="blogSlide__container">
                    <div className="container blogSlide__articles">
                      <div className="row">
                        <div className="col-lg-5 col-md-7 col-sm-10 col-12">
                          <div className="blogSlide__articles__wrap">
                            <div className="blogSlide__article">
                              <Link href={`/article/${slug}.html`}>
                                <a className="blogSlide__article__inner d-block">
                                  <div className="blogSlide__article__meta d-flex">
                                    <span className="metaLabel article__info__meta__date text-white">
                                      {createAt}
                                    </span>
                                    <span className="metaLabel ms-auto article__info__meta__timeRead text-white ps-1">
                                      {read_time ? read_time : calculateReadTime(content) + " min read"}
                                    </span>
                                  </div>
                                  <div className="blogSlide__article__info">
                                    <ul className="blogSlide__article__info__tags article__info__tags ul-reset text-white metaLabel">
                                      {categories.map((category, index) => {
                                        return (
                                          <li key={category.id} className="tag__item">
                                            {category.name}
                                            {index < categories.length - 1 ? (
                                              <span className="tag__item tag__item--slack">|</span>
                                            ) : null}
                                          </li>
                                        );
                                      })}
                                    </ul>
                                    <h3 className="h3 blogSlide__article__info__heading text-white">
                                      {title}
                                    </h3>
                                    <div className="blogSlide__article__info__read">
                                      <span className="iconLink iconLink--arrow iconLink--arrow--oval iconLink--arrow--large iconLink--arrow--white">
                                        <svg
                                          width="16"
                                          height="28"
                                          viewBox="0 0 16 28"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                          className="svg"
                                        >
                                          <path
                                            d="M1.57715 1.61572L13.9615 14.0001L1.57715 26.3844"
                                            stroke="white"
                                            strokeWidth="2"
                                          ></path>
                                        </svg>
                                      </span>
                                    </div>
                                  </div>
                                </a>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </BlogSlideStyles>
  );
}

export default BlogSlide;
