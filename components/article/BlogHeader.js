import Link from "next/link";
import { Typography, Button, Container } from "../ui";
import { BlogHeaderStyles } from "../styles/blog/BlogHeader";

function BlogHeader({ blogHeaderData, blogCategories, totalPost = null }) {
  if (!blogHeaderData) return null;
  const { title, label, description } = blogHeaderData;
  return (
    <BlogHeaderStyles>
      <div className="blpArticles blogHeader">
        <Container className="blpArticles__container">
          <div className="grid spacing--bottom--xs">
            <div className="col-12">
              <Typography 
                variant="section-badge"
                className="mb-0 js-animation--fade"
              >
                {label}
              </Typography>
            </div>
          </div>
          <div className="grid md:grid-cols-12 gap-lg spacing--bottom--xs">
            <div className="lg:col-span-5 sm:col-span-6 col-span-12">
              {totalPost && <Typography variant="h1" className="mb-0" as="p">{totalPost} articles about</Typography>}
              <Typography 
                variant="h1" 
                className="js-animation--chars" 
                data-screen-offset=".15"
              >
                {title}
              </Typography>
            </div>
            <div className="lg:col-span-4 sm:col-span-5 col-span-12 lg:col-start-8 sm:col-start-8 pt-2">
              <Typography 
                variant="body-xl" 
                className="js-animation--lines" 
                data-screen-offset=".35"
                as="p"
              >
                {description}
              </Typography>
            </div>
          </div>
          {blogCategories && (
            <div className="grid md:grid-cols-12 gap-lg filterBlog">
              <div className="sm:col-auto col-span-4">
                <Typography 
                  variant="h6" 
                  className="mb-0 js-animation--fade" 
                  data-screen-offset=".5"
                  as="p"
                >
                  Filter by:
                </Typography>
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
    </BlogHeaderStyles>
  );
}

export default BlogHeader;
