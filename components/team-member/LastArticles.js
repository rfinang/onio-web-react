import { LastArticleStyles } from "../styles/blog/LastArticles";
import Post from "../article/Post";

function LastArticles({ name, data }) {
  if (!data) return null;

  return (
    <LastArticleStyles>
      <div className="lastArticles bg-wild pb-md-3 pb-1">
        <div className="container pb-1">
          <div className="row mb-2 pb-1">
            <div className="col-12">
              <h6 className="h6 mb-0 js-animation--lines" data-screen-offset=".7">
                Recent posts by {name}
              </h6>
            </div>
          </div>
          <div className="row mb-4">
            {data.map((item, index) => {
              const { id } = item;

              return (
                <div
                  key={id}
                  className="col-sm-6 col-12 js-animation--fade"
                  data-offset={index % 2 === 0 ? 0 : ".15"}
                >
                  <Post data={item} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </LastArticleStyles>
  );
}

export default LastArticles;
