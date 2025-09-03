import Link from "next/link";
import { Typography, Button } from "../ui";
import { HomeNewsStyles } from "../styles/home/HomeNews";
import ImageComp from "../common/Image";
function HomeBlog({
  blogData: homeLatestBlog,
  headingBlock = "Latest Articles",
  pageLinkURL = "/article",
  pageLinkText = "View all Latest News",
  hasSpacing = false,
}) {
  if (!homeLatestBlog) return null;
  return (
    <HomeNewsStyles>
      <div className="lastArticles bg-background lastArticles--home pb-1">
        {hasSpacing ? (
          <span className="d-block line__spacing spacing--bottom--sm pt-sm-0 pt-2"></span>
        ) : null}
        <div className="container pb-2">
          <div className="row spacing--bottom--sm">
            <div className="col-sm-4 col-12">
              <Typography 
                variant="section-badge"
                className="mb-0 js-animation--fade"
              >
                {headingBlock}
              </Typography>
            </div>
            <div className="col-auto d-sm-block d-none ms-auto">
              <Button
                as={Link}
                href={pageLinkURL}
                variant="link"
                color="black"
                hasArrow
                className="js-animation--fade"
                data-offset=".15"
              >
                {pageLinkText}
              </Button>
            </div>
          </div>
          <div className="row">
            {homeLatestBlog.map((item, index) => {
              let createAt = new Date(item.publish_date);
              createAt = createAt.toLocaleString("en-us", {
                day: "numeric",
                month: "short",
                year: "numeric",
              });
              return (
                <div key={item.id} className="col-lg-6 col-12">
                  <div
                    className="article js-animation--fade"
                    data-offset={index % 2 === 1 ? ".15" : 0}
                  >
                    <Link href={`/article/${item.slug}.html`} legacyBehavior>
                      <a className="article__link">
                        <div className="article__thumbnail image__object-fit font-0">
                          <ImageComp image={item.thumbnail} />
                        </div>
                        <div className="article__info">
                          <div className="article__info__meta d-flex">
                            <span className="metaLabel article__info__meta__date text-primary">
                              {createAt}
                            </span>
                            <span className="metaLabel ms-auto article__info__meta__timeRead text-primary">
                              {item.read_time}
                            </span>
                          </div>
                          {item.categories && item.categories.length > 0 && (
                            <ul className="article__info__tags ul-reset text-primary metaLabel">
                              {item.categories.map((category, index) => {
                                return (
                                  <li key={category.id} className="tag__item">
                                    {category.name}
                                    {index < item.categories.length - 1 ? (
                                      <span className="tag__item tag__item--slack">|</span>
                                    ) : null}
                                  </li>
                                );
                              })}
                            </ul>
                          )}
                          <Typography variant="h5" color="primary" className="article__info__heading">{item.title}</Typography>
                          <div className="article__info__read">
                            <Button
                              variant="icon"
                              hasIcon="arrow"
                              color="black"
                              size="large"
                              shape="oval"
                              aria-label="Read article"
                            />
                          </div>
                        </div>
                      </a>
                    </Link>
                  </div>
                </div>
              );
            })}

            <div className="col-12 d-sm-none d-block mt-sm-0 mt-4 js-animation--fade">
              <Button
                as={Link}
                href="/articles"
                variant="link"
                color="black"
                hasArrow
              >
                View all articles
              </Button>
            </div>
          </div>
        </div>
      </div>
    </HomeNewsStyles>
  );
}

export default HomeBlog;
