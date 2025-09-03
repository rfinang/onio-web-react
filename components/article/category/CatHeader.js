import Link from "next/link";
import { Button, Typography, Container } from "../../ui";
import { CatHeaderStyles } from "../../styles/blog/category/CatHeader";

function CatHeader({ name, blogCategories, blogToTal }) {
  return (
    <CatHeaderStyles>
      <div className="catArticles blogHeader">
        <Container className="catArticles__container">
          <div className="grid spacing--bottom--xs">
            <div className="col-4">
              <h4 className="heading--block mb-0 d-inline-block js-animation--fade">
                <span className="heading--block__text">Articles</span>
              </h4>
            </div>
          </div>
          <div className="grid spacing--bottom--lg">
            <div className="col-span-12 js-animation--fade" data-screen-offset=".2">
              <p className="h1 mb-0">{blogToTal} articles about</p>
              <h1 className="h1 catArticles__title">
                <span className="catArticles__title__text">{name}</span>
              </h1>
            </div>
          </div>
          {blogCategories && (
            <div className="grid md:grid-cols-12 gap-lg filterBlog">
              <div className="sm:col-auto col-span-4">
                <p className="h6 mb-0 js-animation--fade" data-screen-offset=".5">
                  Filter by:
                </p>
              </div>
              <div className="sm:col-span-10 col-span-7 sm:col-start-auto col-start-2">
                <ul className="filterBlog__categories ul-reset">
                  <li className="filterBlog__item js-animation--fade" data-screen-offset=".6">
                    <Button
                      as={Link}
                      href="/article"
                      variant="ghost"
                      color="black"
                      className="d-block"
                    >
                      <Typography variant="h6" as="span">All</Typography>
                    </Button>
                  </li>
                  {blogCategories.map((item, index) => {
                    const { id, name, slug } = item;
                    return (
                      <li
                        key={id}
                        className="filterBlog__item js-animation--fade"
                        data-screen-offset={0.6 + (index + 1) / 10}
                      >
                        <Button
                          as={Link}
                          href={`/article/category/${slug}.html`}
                          variant="ghost"
                          color="black"
                          className="d-block"
                        >
                          <Typography variant="h6" as="span">{name}</Typography>
                        </Button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          )}
        </Container>
      </div>
    </CatHeaderStyles>
  );
}

export default CatHeader;
