import Link from "next/link";
import {calculateReadTime} from "../../../helper";

function BlogDetailMeta({ read_time, created_at, categories, content }) {
  let createAt = new Date(created_at);
  createAt = createAt.toLocaleString("en-us", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
  return (
    <div className="blogDetail__meta mb-sm-5 mb-4">
      <div className="row">
        <div className="blogDetail__meta__cat col-md-3 col-sm-4 col-12 mb-sm-0 mb-2 pb-sm-0 pb-1 js-animation--fade">
          {categories && (
            <>
              {categories.map((item, index) => {
                const { id, name, slug } = item;
                return (
                  <Link key={id} href={`/article/category/${slug}.html`} legacyBehavior>
                    <a className="h5 linkHover linkHover--black blogDetail__meta__cat__link">
                      {name}
                      {index + 1 < categories.length ? (
                        <span className="d-inline-block mx-1">|</span>
                      ) : null}
                    </a>
                  </Link>
                );
              })}
            </>
          )}
        </div>
        <div className="blogDetail__meta__right col-md-7 col-sm-5 col-12 container-col-7 offset-md-1">
          <div className="row">
            <p
              className="blogDetail__meta__date blogDetail__meta__text col-lg-2 col-sm-3 col js-animation--fade"
              data-screen-offset=".15"
              data-offset=".15"
            >
              {createAt}
            </p>
            <p
              className="blogDetail__meta__readTime blogDetail__meta__text col-lg-2 col-sm-4 col js-animation--fade"
              data-screen-offset=".3"
              data-offset=".3"
            >
              {read_time ? read_time : calculateReadTime(content) + ' min read'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogDetailMeta;
