import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { SearchPopupStyles } from "../styles/block/SearchPopup";
import { getPopularSearchApi } from "../../api";
import Link from "next/link";
import { Button, Typography } from "../ui";
function SearchPopup() {
  const router = useRouter();
  const [strKeyword, setKeyword] = useState("");
  const [popularKeyword, setPopularKeyword] = useState([]);
  useEffect(() => {
    getPopularSearchApi().then((res) => {
      setPopularKeyword(res.data);
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!strKeyword) return;
    router.push({
      pathname: "/search",
      query: {
        keyword: strKeyword,
      },
    });
    document.querySelector("#searchModal .modal-header button").click();
  };

  const handleChange = (e) => {
    setKeyword(e.target.value);
  };
  return (
    <SearchPopupStyles
      className="modal fade modal-search"
      id="searchModal"
      tabIndex={-1}
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-header d-none">
          <button type="button" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-content">
          <div className="modal-body">
            <div className="search-popup">
              <div className="search-page">
                <div className="top-section">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-8 col-lg-7">
                        <form onSubmit={handleSubmit} className="search-form">
                          <div className="form-group form-group--silver">
                            <div className="form-group__inner">
                              <input
                                type="text"
                                placeholder="Search"
                                name="email"
                                value={strKeyword}
                                onChange={handleChange}
                              />
                            </div>
                          </div>
                          <Button 
                            type="submit" 
                            variant="primary"
                            size="md"
                            className="btn-submit"
                          >
                            <svg
                              width="48"
                              height="47"
                              viewBox="0 0 48 47"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <circle
                                cx="18.5"
                                cy="18.5"
                                r="17.5"
                                stroke="currentColor"
                                strokeWidth="2"
                              />
                              <line
                                x1="30.7071"
                                y1="30.2929"
                                x2="46.7071"
                                y2="46.2929"
                                stroke="currentColor"
                                strokeWidth="2"
                              />
                            </svg>
                          </Button>
                        </form>
                      </div>
                      {popularKeyword && (
                        <div className="col-md-4 col-lg-4 offset-lg-1">
                          <Typography 
                            variant="section-badge" 
                            as="h3"
                          >
                            Popular Searches
                          </Typography>
                          <ul className="side-list" data-screen-offset=".25">
                            {popularKeyword.map((item, index) => {
                              return (
                                <li key={`ps_${index}`}>
                                  <Link href={`/search?keyword=${item.key_data}`} legacyBehavior>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </SearchPopupStyles>
  );
}

export default SearchPopup;
