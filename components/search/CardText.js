import Link from "next/link";
import CardBreadscrumb from "./CardBreadscrumb";

function CardText({ title, description, slug, slugList }) {
  return (
    <div className="card-text">
      <CardBreadscrumb data={slugList} />
      {title && (
        <h3 className="h5 card-text__title">
          <Link href={slug} legacyBehavior>
            <a title={title}>{title}</a>
          </Link>
        </h3>
      )}
      <p className="card-text__desc">{description}</p>
      <Link href={slug} legacyBehavior>
        <a className="card-text__link" title="Read More">
          Read More
        </a>
      </Link>
    </div>
  );
}

export default CardText;
