import Link from "next/link";
import {calculateReadTime} from "../../../helper";
import { Button, Typography } from "../../ui";

function BlogDetailMeta({ read_time, created_at, categories, content }) {
  let createAt = new Date(created_at);
  createAt = createAt.toLocaleString("en-us", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
  return (
    <div className="blogDetail__meta mb-sm-5 mb-4">
      <div className="grid md:grid-cols-12 gap-lg">
        <div className="blogDetail__meta__cat md:col-span-3 sm:col-span-4 col-span-12 mb-sm-0 mb-2 pb-sm-0 pb-1 js-animation--fade">
          {categories && (
            <>
              {categories.map((item, index) => {
                const { id, name, slug } = item;
                return (
                  <Button
                    key={id}
                    as={Link}
                    href={`/article/category/${slug}.html`}
                    variant="ghost"
                    color="black"
                    className="blogDetail__meta__cat__link"
                  >
                    <Typography variant="h5" as="span">
                      {name}
                      {index + 1 < categories.length ? (
                        <span className="d-inline-block mx-1">|</span>
                      ) : null}
                    </Typography>
                  </Button>
                );
              })}
            </>
          )}
        </div>
        <div className="blogDetail__meta__right md:col-span-8 sm:col-span-7 col-span-12 container-col-7 md:col-start-5">
          <div className="grid sm:grid-cols-6 gap-lg">
            <p
              className="blogDetail__meta__date blogDetail__meta__text sm:col-span-2 js-animation--fade"
              data-screen-offset=".15"
              data-offset=".15"
            >
              {createAt}
            </p>
            <p
              className="blogDetail__meta__readTime blogDetail__meta__text sm:col-span-2 js-animation--fade"
              data-screen-offset=".3"
              data-offset=".3"
            >
              {read_time ? read_time : calculateReadTime(content) + ' min read'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogDetailMeta;
