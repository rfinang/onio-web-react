import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
function SearchHeader({
  popularKeyword,
  productsCount = 0,
  generalCount = 0,
  articleCount = 0,
  newsCount = 0,
  keyword,
  active = 0,
}) {
  const [strKeyword, setKeyword] = useState("");
  const totalResult = productsCount + generalCount + articleCount + newsCount;
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!strKeyword) return;
    router.push({
      pathname: "/search",
      query: {
        keyword: strKeyword,
      },
    });
  };
  const handleChange = (e) => {
    setKeyword(e.target.value);
  };
  return (
    <div className="top-section">
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-lg-7">
            <form
              onSubmit={handleSubmit}
              className="search-form js-animation--fade is-animation-loading"
            >
              <div className="form-group form-group--silver">
                <div className="form-group__inner">
                  <input
                    type="text"
                    id="search-keyword"
                    placeholder="Search"
                    name="email"
                    value={strKeyword}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <button type="submit" className="btn btn-submit">
                <svg
                  width="48"
                  height="47"
                  viewBox="0 0 48 47"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="18.5" cy="18.5" r="17.5" stroke="rgb(34, 32, 33)" strokeWidth="2" />
                  <line
                    x1="30.7071"
                    y1="30.2929"
                    x2="46.7071"
                    y2="46.2929"
                    stroke="rgb(34, 32, 33)"
                    strokeWidth="2"
                  />
                </svg>
              </button>
            </form>
            <h1
              className="h5 total-results js-animation--fade is-animation-loading"
              data-screen-offset=".25"
            >
              {totalResult > 0 ? (
                <span>
                  {totalResult} results for '{keyword}'
                </span>
              ) : (
                <span>
                  There are no results for '{keyword}'.
                  <br />
                  Try another search term.
                </span>
              )}
            </h1>
            {totalResult > 0 && (
              <ul
                className="search-category js-animation--fade is-animation-loading"
                data-screen-offset=".35"
              >
                <li>
                  <Link href={`/search?keyword=${keyword}`}>
                    <a className={active === 0 ? "active" : ""} title="Top Hits">
                      Top Hits
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href={`/search/general?keyword=${keyword}`}>
                    <a className={active === 1 ? "active" : ""} title={`General (${generalCount})`}>
                      General ({generalCount})
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href={`/search/products?keyword=${keyword}`}>
                    <a
                      className={active === 2 ? "active" : ""}
                      title={`Products (${productsCount})`}
                    >
                      Products ({productsCount})
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href={`/search/article?keyword=${keyword}`}>
                    <a
                      className={active === 3 ? "active" : ""}
                      title={`Articles (${articleCount})`}
                    >
                      Articles ({articleCount})
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href={`/search/news?keyword=${keyword}`}>
                    <a className={active === 4 ? "active" : ""} title={`News (${newsCount})`}>
                      News ({newsCount})
                    </a>
                  </Link>
                </li>
              </ul>
            )}
          </div>
          {popularKeyword && (
            <div className="col-md-4 col-lg-4 offset-lg-1">
              <h3
                className="heading--block d-inline-block js-animation--fade is-animation-loading"
                data-screen-offset=".15"
              >
                <span className="heading--block__text">Popular Searches</span>
              </h3>
              <ul
                className="side-list h4 js-animation--fade is-animation-loading"
                data-screen-offset=".2"
              >
                {popularKeyword.map((item, index) => {
                  return (
                    <li key={`ps_${index}`}>
                      <Link href={`/search?keyword=${item.key_data}`}>
                        <a title={item.key_data}>{item.key_data}</a>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SearchHeader;
