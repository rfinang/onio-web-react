import Link from "next/link";
import { BlogHeaderStyles } from "../styles/blog/BlogHeader";

function BlogHeader({ blogHeaderData, blogCategories, totalPost = null }) {
  if (!blogHeaderData) return null;
  const { title, label, description } = blogHeaderData;
  return (
    <BlogHeaderStyles>
      <div className="blpArticles blogHeader">
        <div className="blpArticles__container container">
          <div className="row spacing--bottom--xs">
            <div className="col-12">
              <h4 className="heading--block mb-0 d-inline-block js-animation--fade">
                <span className="heading--block__text">{label}</span>
              </h4>
            </div>
          </div>
          <div className="row spacing--bottom--xs">
            <div className="col-lg-5 col-sm-6 col-12">
              {totalPost && <p className="h1 mb-0">{totalPost} articles about</p>}
              <h1 className="h1 js-animation--chars" data-screen-offset=".15">
                {title}
              </h1>
            </div>
            <div className="col-lg-4 col-sm-5 col-12 offset-lg-2 offset-sm-1 pt-2 desc--large">
              <p className="js-animation--lines" data-screen-offset=".35">
                {description}
              </p>
            </div>
          </div>
          {blogCategories && (
            <div className="row filterBlog">
              <div className="col-sm-auto col-4">
                <p className="h6 mb-0 js-animation--fade" data-screen-offset=".5">
                  Filter by:
                </p>
              </div>
              <div className="col-sm col-7 offset-sm-0 offset-1">
                <ul className="filterBlog__categories ul-reset">
                  <li className="filterBlog__item js-animation--fade" data-screen-offset=".6">
                    <Link href="/article" legacyBehavior>
                      <a className="h6 d-block linkHover--black">All</a>
                    </Link>
                  </li>
                  {blogCategories.map((item, index) => {
                    const { id, name, slug } = item;
                    return (
                      <li
                        key={id}
                        className="filterBlog__item js-animation--fade"
                        data-screen-offset={0.6 + (index + 1) / 10}
                      >
                        <Link href={`/article/category/${slug}.html`} legacyBehavior>
                          <a className="h6 d-block linkHover--black">{name}</a>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </BlogHeaderStyles>
  );
}

export default BlogHeader;
