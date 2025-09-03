import ImageComp from "../../common/Image";

function Powered({ data }) {
  if (!data) return null;
  const { label, title, description, contents, image, mobile_image } = data;
  return (
    <div className="powered bg-primary">
      <div className="powered__container container">
        <div className="powered__heading mb-4">
          <h4 className="heading--block heading--block--white mb-0 d-inline-block js-animation--fade">
            <span className="heading--block__text">{label}</span>
          </h4>
        </div>
        <div className="row mb-5">
          <div className="col-lg-5 col-md-6 col-12">
            <h2 className="h2 mb-md-0 mb-2 text-white js-animation--chars">{title}</h2>
          </div>
          <div className="col-lg-6 col-md-5 col-12 pt-2 desc--large text-white offset-md-1">
            <p className="mb-0 js-animation--lines" data-offset=".15">
              {description}
            </p>
          </div>
        </div>
        {image && (
          <>
            <figure className="image__object-fit d-sm-block d-none spacing--bottom--md image--radius js-animation--fade--none">
              <ImageComp image={image} />
            </figure>
            <figure className="image__object-fit d-sm-none d-block spacing--bottom--md image--radius js-animation--fade--none">
              <ImageComp image={mobile_image ? mobile_image : image} />
            </figure>
          </>
        )}
        {contents && (
          <>
            {contents.map((item, index) => {
              if (index % 2 === 0) {
                return (
                  <div key={item.id} className="row mb-md-0 mb-4 pt-2">
                    <div className="col-md-6 col-12 desc--large text-white">
                      <p className="js-animation--lines">{item.content}</p>
                    </div>
                  </div>
                );
              }
              return (
                <div key={item.id} className="row spacing--bottom--md">
                  <div className="col-lg-4 col-md-5 col-12 desc--small text-white ms-md-auto">
                    <p className="pr-md-1 js-animation--fade">{item.content}</p>
                  </div>
                </div>
              );
            })}
          </>
        )}
      </div>
    </div>
  );
}

export default Powered;
