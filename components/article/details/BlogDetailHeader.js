import React from "react";

function BlogDetailHeader({ handleGoBack, title }) {
  return (
    <div className="blogDetail__header">
      <div className="row align-items-end">
        <div className="col-2 d-sm-block d-none js-animation--fade" data-screen-offset=".25">
          <a href="#" className="pageLink pageLink--black pageLink--reverse" onClick={handleGoBack}>
            <span className="pageLink__text">Back</span>
            <span className="pageLink__icon">
              <svg
                width="31"
                height="27"
                viewBox="0 0 31 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="svg"
              >
                <path d="M15.8594 1L29 13.5L15.8594 26" stroke="white" strokeWidth="2"></path>
                <path d="M0 13.5898L28.7829 13.5898" stroke="white" strokeWidth="2"></path>
              </svg>
            </span>
          </a>
        </div>
        <div className="col-md-7 col-sm-8 offset-md-2 offset-sm-2">
          <h1 className="h1 js-animation--chars" data-screen-offset=".4">
            {title}
          </h1>
        </div>
      </div>
      <span className="d-sm-block spacing--bottom--xs pb-sm-1 d-none"></span>
      <span className="d-sm-none mb-2 d-block"></span>
    </div>
  );
}

export default BlogDetailHeader;
