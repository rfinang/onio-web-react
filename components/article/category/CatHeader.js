import Link from "next/link";
import { CatHeaderStyles } from "../../styles/blog/category/CatHeader";

function CatHeader({ name, blogCategories, blogToTal }) {
  return (
    <CatHeaderStyles>
      <div className="catArticles blogHeader">
        <div className="catArticles__container container">
          <div className="row spacing--bottom--xs">
            <div className="col-4">
              <h4 className="heading--block mb-0 d-inline-block js-animation--fade">
                <span className="heading--block__text">Articles</span>
              </h4>
            </div>
          </div>
          <div className="row spacing--bottom--lg">
            <div className="col-12 js-animation--fade" data-screen-offset=".2">
              <p className="h1 mb-0">{blogToTal} articles about</p>
              <h1 className="h1 catArticles__title">
                <span className="catArticles__title__text">{name}</span>
              </h1>
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
    </CatHeaderStyles>
  );
}

export default CatHeader;
