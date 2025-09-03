import Link from "next/link";
import { Typography, Button } from "../ui";
import Post from "../news/Post";
import { HomeNewsStyles } from "../styles/home/HomeNews";
function NewsPost({
  data,
  headingBlock = "Latest Articles",
  pageLinkURL = "/article",
  pageLinkText = "View all Latest News",
  hasSpacing = false,
}) {
  if (!data) return null;
  return (
    <HomeNewsStyles>
      <div className="lastArticles bg-background lastArticles--home pb-1">
        {hasSpacing ? (
          <span className="d-block line__spacing spacing--bottom--sm pt-sm-0 pt-2"></span>
        ) : null}
        <div className="container pb-2">
          <div className="row spacing--bottom--sm">
            <div className="col-sm-4 col-12">
              <Typography 
                variant="section-badge"
                className="mb-0 js-animation--fade"
              >
                {headingBlock}
              </Typography>
            </div>
            <div className="col-auto d-sm-block d-none ms-auto">
              <Button
                as={Link}
                href={pageLinkURL}
                variant="link"
                color="black"
                hasArrow
                className="js-animation--fade"
                data-offset=".15"
              >
                {pageLinkText}
              </Button>
            </div>
          </div>
          <div className="row">
            {data.map((item, index) => {
              return (
                <div key={item.id} className="col-lg-6 col-12">
                  <div className="js-animation--fade" data-offset={index % 2 === 1 ? ".15" : 0}>
                    <Post data={item} />
                  </div>
                </div>
              );
            })}

            <div className="col-12 d-sm-none d-block mt-sm-0 mt-4 js-animation--fade">
              <Button
                as={Link}
                href="/articles"
                variant="link"
                color="black"
                hasArrow
              >
                View all articles
              </Button>
            </div>
          </div>
        </div>
      </div>
    </HomeNewsStyles>
  );
}

export default NewsPost;
