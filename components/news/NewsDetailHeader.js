
function NewsDetailHeader({ title }) {
  return (
    <div className="blogDetail__header">
      <div className="row align-items-end">
        <div className="col-2 d-sm-block d-none"></div>
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

export default NewsDetailHeader;
