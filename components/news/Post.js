import Link from "next/link";
import ImageComp from "../common/Image";
import { PostStyles } from "../styles/elements/Post";
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
                <span className="metaLabel article__info__meta__date text-black">{createAt}</span>
                {/* <span className="metaLabel ms-auto article__info__meta__timeRead text-black ps-1">
                  {read_time ? read_time : "Less than 1 minute"}
                </span> */}
              </div>
              <Tippy content={title} delay={[500, 0]}>
                <h4 className="article__info__heading h6 text-black">{title}</h4>
              </Tippy>

              <div className="article__info__read">
                <span className="iconLink iconLink--arrow iconLink--arrow--oval iconLink--arrow--large iconLink--arrow--black">
                  <svg
                    width="16"
                    height="28"
                    viewBox="0 0 16 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="svg"
                  >
                    <path
                      d="M1.57715 1.61572L13.9615 14.0001L1.57715 26.3844"
                      stroke="white"
                      strokeWidth="2"
                    ></path>
                  </svg>
                </span>
              </div>
            </div>
          </a>
        </Link>
      </div>
    </PostStyles>
  );
}

export default Post;
