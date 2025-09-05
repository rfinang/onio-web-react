import ImageComp from "./Image";

function PageHero({ investorBanner, maxWidthTitle }) {
  if (!investorBanner) return null;
  const { title, label, image, mobile_image } = investorBanner;

  return (
    <section className="relative w-full h-screen overflow-hidden">
      <figure className="absolute inset-0 w-full h-full mb-0 js-animation--image">
        {image && (
          <>
            <div className="hidden sm:block w-full h-full">
              <ImageComp image={image} preload={true} />
            </div>
            <div className="block sm:hidden w-full h-full">
              <ImageComp image={mobile_image ? mobile_image : image} preload={true}/>
            </div>
          </>
        )}
      </figure>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="container mx-auto px-4">
          <h4
            className="inline-block mb-4 px-4 py-2 bg-secondary text-primary font-bold text-lg js-animation--fade is-animation-loading"
            data-screen-offset=".3"
          >
            {label}
          </h4>
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 lg:col-span-8 sm:col-span-10">
              <h1
                className="text-4xl lg:text-6xl font-bold text-white js-animation--chars is-animation-loading"
                style={{maxWidth: `${maxWidthTitle}rem`}}
                data-screen-offset=".6"
                dangerouslySetInnerHTML={{ __html: title }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PageHero;
