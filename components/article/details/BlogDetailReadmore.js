import { Typography } from "../../ui";
import Post from "../Post";
function BlogDetailReadmore({ relatedPost }) {
  if (!relatedPost) return null;
  return (
    <div className="blogDetail__readMore">
      <div className="grid mb-4 pb-2">
        <div className="col-span-12">
          <Typography 
            variant="section-badge"
            className="mb-0 js-animation--fade"
          >
            Keep Reading
          </Typography>
        </div>
      </div>
      {relatedPost && (
        <div className="grid sm:grid-cols-2 gap-lg spacing--bottom--sm pb-1">
          {relatedPost.map((item, index) => {
            const { id } = item;
            return (
              <div key={id} className="js-animation--fade" data-offset={index % 2 === 0 ? 0 : ".15"}>
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
