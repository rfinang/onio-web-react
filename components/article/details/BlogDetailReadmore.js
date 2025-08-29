import Post from "../Post";
function BlogDetailReadmore({ relatedPost }) {
  if (!relatedPost) return null;
  return (
    <div className="blogDetail__readMore">
      <div className="row mb-4 pb-2">
        <div className="col-12">
          <h4 className="heading--block mb-0 d-inline-block js-animation--fade">
            <span className="heading--block__text">Keep Reading</span>
          </h4>
        </div>
      </div>
      {relatedPost && (
        <div className="row spacing--bottom--sm pb-1">
          {relatedPost.map((item, index) => {
            const { id } = item;
            return (
              <div
                key={id}
                className="col-sm-6 col-12  js-animation--fade"
                data-offset={index % 2 === 0 ? 0 : ".15"}
              >
                <Post data={item} />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default BlogDetailReadmore;
