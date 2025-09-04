import Link from "next/link";
import ImageComp from "../common/Image";
import { PostStyles } from "../styles/elements/Post";
import { Typography, Button } from "../ui";
import Tippy from "@tippyjs/react";
import 'tippy.js/dist/tippy.css';

function Post({ data }) {
  if (!data) return null;
  const { slug, thumbnail, read_time, title, publish_date } = data;
  let createAt = new Date(publish_date);
  createAt = createAt.toLocaleString("en-us", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
  return (
    <PostStyles>
      <div className="article">
        <Link href={`/news/${slug}.html`} legacyBehavior>
          <a className="article__link">
            <div className="article__thumbnail image__object-fit font-0">
              <ImageComp image={thumbnail} />
            </div>
            <div className="article__info">
              <div className="article__info__meta d-flex">
                <span className="metaLabel article__info__meta__date text-primary">{createAt}</span>
                {/* <span className="metaLabel ms-auto article__info__meta__timeRead text-primary ps-1">
                  {read_time ? read_time : "Less than 1 minute"}
                </span> */}
              </div>
              <Tippy content={title} delay={[500, 0]}>
                <Typography variant="h5" color="primary" className="article__info__heading">{title}</Typography>
              </Tippy>

              <div className="article__info__read">
                <Button variant="icon" hasIcon="arrow" color="black" size="large" shape="oval" />
              </div>
            </div>
          </a>
        </Link>
      </div>
    </PostStyles>
  );
}

export default Post;
