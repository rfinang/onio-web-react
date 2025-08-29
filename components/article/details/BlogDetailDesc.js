import React from "react";

function BlogDetailDesc({ shortDescription }) {
  if (!shortDescription) return null;
  return (
    <div className="blogDetail__desc row spacing--bottom--md pb-lg-2">
      <div className="col-md-8 col-sm-10 offset-md-2 offset-sm-1 col-12">
        <h2
          className="h5 js-animation--lines"
          dangerouslySetInnerHTML={{ __html: shortDescription }}
        />
      </div>
    </div>
  );
}

export default BlogDetailDesc;
