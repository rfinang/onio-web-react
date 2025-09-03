import Link from "next/link";
import { Typography, Button } from "../../ui";
import ImageComp from "../../common/Image";
import Post from "../Post";

function BlogDetailAuthor({ writer, authorPost }) {
  if (!writer) return null;
  const { name, slug, job_title, short_bio, avatar } = writer;
  return (
    <div className="blogDetail__author">
      <div className="grid spacing--bottom--xs">
        <div className="col-12">
          <Typography 
            variant="section-badge"
            className="mb-0 js-animation--fade"
          >
            About the author
          </Typography>
        </div>
      </div>
      <div className="grid md:grid-cols-12 gap-lg">
        <div className="lg:col-span-4 md:col-span-5 col-span-12 mb-md-0 mb-6">
          <div className="blogAuthor container-col-4">
            <div className="grid grid-cols-12">
              <div className="col-span-1">
                <figure className="image__object-fit blogAuthor__avatar js-animation--scale">
                  <ImageComp image={avatar} />
                </figure>
              </div>
              <div className="sm:col-span-3 col-span-12 pt-md-2 pt-sm-1 js-animation--fade">
                <div className="blogAuthor__info">
                  <Typography variant="h6" className="mb-0">{name}</Typography>
                  <p>{job_title}</p>
                </div>
                <Typography
                  variant="body-xs"
                  className="blogAuthor__about"
                  dangerouslySetInnerHTML={{ __html: short_bio }}
                />

                <div className="blogAuthor__links">
                  <Button
                    as={Link}
                    href={`/team-member/${slug}.html`}
                    variant="link"
                    color="black"
                    hasArrow
                  >
                    Read Bio
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:col-span-6 col-span-12 pt-md-2 lg:col-start-9 md:col-start-8">
          {authorPost && (
            <>
              <Typography 
                variant="h6" 
                className="mb-sm-3 mb-4 js-animation--fade" 
                offset=".15"
              >
                Recent posts by {name}
              </Typography>
              <div className="grid sm:grid-cols-2 gap-lg">
                {authorPost.map((item, index) => {
                  const { id } = item;
                  return (
                    <div key={id} className="js-animation--fade" offset={0.1 + index * 0.05}>
                      <Post data={item} />
                    </div>
                  );
                })}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default BlogDetailAuthor;
