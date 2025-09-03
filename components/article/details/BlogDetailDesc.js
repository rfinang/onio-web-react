
function BlogDetailDesc({ shortDescription }) {
  if (!shortDescription) return null;
  return (
    <div className="blogDetail__desc grid md:grid-cols-12 spacing--bottom--md pb-lg-2">
      <div className="md:col-span-8 sm:col-span-10 col-span-12 md:col-start-3 sm:col-start-2">
        <h2
          className="h5 js-animation--lines"
          dangerouslySetInnerHTML={{ __html: shortDescription }}
        />
      </div>
    </div>
  );
}

export default BlogDetailDesc;
