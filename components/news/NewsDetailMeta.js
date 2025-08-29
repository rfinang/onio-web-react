import Link from "next/link";

function NewsDetailMeta({ label, created_at }) {
  let createAt = new Date(created_at);
  createAt = createAt.toLocaleString("en-us", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
  return (
    <div className="blogDetail__meta mb-sm-5 mb-4">
      <div className="row">
        <div className="blogDetail__meta__cat col-md-3 col-sm-4 col-12 mb-sm-0 mb-2 pb-sm-0 pb-1">
          <h4 className="heading--block mb-0 d-inline-block js-animation--fade">
            <span className="heading--block__text">{label}</span>
          </h4>
        </div>
        <div className="blogDetail__meta__right col-md-7 col-sm-5 col-12 container-col-7 offset-md-1">
          <p
            className="blogDetail__meta__date blogDetail__meta__text  js-animation--fade"
            data-screen-offset=".15"
          >
            {createAt}
          </p>
        </div>
      </div>
    </div>
  );
}

export default NewsDetailMeta;
