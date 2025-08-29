import Link from "next/link";

function CardBreadscrumb({ data }) {
  return (
    <ul className="metaLabel card-text__category">
      <li>
        <Link href="/" legacyBehavior>
          <a title="Home">Home</a>
        </Link>
      </li>
      {data && (
        <>
          {data?.map((item, index) => {
            const { slug, label } = item;
            return (
              <li key={index}>
                <Link href={slug} legacyBehavior>
                  <a title={label}>{label}</a>
                </Link>
              </li>
            );
          })}
        </>
      )}
    </ul>
  );
}

export default CardBreadscrumb;
