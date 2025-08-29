import Head from "next/head";

function ImageComp({ image, preload, customClass }) {
  if (!image) return null;
  let primary = image.width > image.height ? 'width' : 'height';
  let primarySize = image.width > image.height ? image.width : image.height;
  let isHighRes = primarySize > 2400;
  if (preload) {
    return (
        <>
          <Head>
            {image.url && !isHighRes && (
                <link rel="preload" href={image.url} as="image" media={`(min-${primary}: ${primarySize}px)`}/>
            )}
              {image.url && isHighRes && (
                  <link rel="preload" href={image.url} as="image" media={`(min-${primary}: 2401px)`}/>
              )}
            {image.formats?.xlarge && (
                <link rel="preload" href={image.formats?.xlarge.url} as="image" media={`(min-${primary}: 1921px) and (max-${primary}: 2400px) and not(min-${primary}: ${primarySize}px)`}/>
            )}
            {image.formats?.large && (
                <link rel="preload" href={image.formats?.large.url} as="image" media={`(min-${primary}: 1201px) and (max-${primary}: 1920px) and not(min-${primary}: ${primarySize}px)`}/>
            )}
            {image.formats?.medium && (
                <link rel="preload" href={image.formats?.medium.url} as="image" media={`(min-${primary}: 769px) and (max-${primary}: 1200px) and not(min-${primary}: ${primarySize}px)`}/>
            )}
            {image.formats?.small && (
                <link rel="preload" href={image.formats?.small.url} as="image" media={`(min-${primary}: 376px) and (max-${primary}: 768px) and not(min-${primary}: ${primarySize}px)`}/>
            )}
            {image.formats?.xsmall && (
                <link rel="preload" href={image.formats?.xsmall.url} as="image" media={`(min-${primary}: 1px) and (max-${primary}: 375px) and not(min-${primary}: ${primarySize}px)`}/>
            )}
          </Head>
          <picture className={customClass ?? ''}>
            {image.url && !isHighRes && (
                <source media={`(min-${primary}:${primarySize}px)`} srcSet={image.url} />
            )}
              {image.url && isHighRes && (
                  <source media={`(min-${primary}:2401px)`} srcSet={image.url} />
              )}
            {image.formats?.xlarge && (
                <source media={`(min-${primary}:1921px)`} srcSet={image.formats.xlarge.url} />
            )}
            {image.formats?.large && (
                <source media={`(min-${primary}:1201px)`} srcSet={image.formats.large.url} />
            )}
            {image.formats?.medium && (
                <source media={`(min-${primary}:769px)`} srcSet={image.formats.medium.url} />
            )}
            {image.formats?.small && (
                <source media={`(min-${primary}:376px)`} srcSet={image.formats.small.url} />
            )}
            {image.formats?.xsmall && (
                <source media={`(min-${primary}:1px)`} srcSet={image.formats.xsmall.url} />
            )}
            <img src={image.formats?.preload ? image.formats?.preload.url : (image.formats?.thumbnail ? image.formats?.thumbnail.url : image.url)} alt={image.alternativeText} />
          </picture>
        </>
    )
  }

  const imageSrc =
    ((image.url && !isHighRes)
        ? `<source media="(min-${primary}:${primarySize}px)" srcSet="${image.url}" />`
        : "") +
      ((image.url && isHighRes)
          ? `<source media="(min-${primary}:2401px)" srcSet="${image.url}" />`
          : "") +
    (image.formats?.xlarge
      ? `<source media="(min-${primary}:1921px)" srcSet="${image.formats.xlarge.url}" />`
      : "") +
    (image.formats?.large
      ? `<source media="(min-${primary}:1201px)" srcSet="${image.formats.large.url}" />`
      : "") +
    (image.formats?.medium
      ? `<source media="(min-${primary}:769px)" srcSet="${image.formats.medium.url}" />`
      : "") +
    (image.formats?.small
      ? `<source media="(min-${primary}:376px)" srcSet="${image.formats.small.url}" />`
      : "") +
    (image.formats?.xsmall
      ? `<source media="(min-${primary}:1px)" srcSet="${image.formats.xsmall.url}" />`
      : "");
  return (
    <picture className={`js-image--lazy ${customClass ?? ''}`} data-srcset={imageSrc}>
      <img src={image.formats?.preload ? image.formats?.preload.url : (image.formats?.thumbnail ? image.formats?.thumbnail.url : image.url)} alt={image.alternativeText} />
    </picture>
  );
}

export default ImageComp;
