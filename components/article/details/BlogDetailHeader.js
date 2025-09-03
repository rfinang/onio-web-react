
import { Button } from "../../ui";

function BlogDetailHeader({ handleGoBack, title }) {
  return (
    <div className="blogDetail__header">
      <div className="grid md:grid-cols-12 items-end">
        <div className="col-span-2 hidden sm:block js-animation--fade" data-screen-offset=".25">
          <Button
            as="a"
            href="#"
            variant="link"
            color="black"
            hasArrow
            className="pageLink--reverse"
            onClick={handleGoBack}
          >
            Back
          </Button>
        </div>
        <div className="md:col-span-7 sm:col-span-8 col-span-12 md:col-start-3 sm:col-start-3">
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

export default BlogDetailHeader;
