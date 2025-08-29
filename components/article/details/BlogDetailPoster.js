import React from "react";
import ImageComp from "../../common/Image";

function BlogDetailPoster({ feature_image, mobile_feature_image }) {
  if (!feature_image) return null;

  const renderImage = (image) => {
      return (
          <picture>
              {image.url && (
                  <source media={"(min-width:" + image.width + "px)"} srcSet={image.url} />
              )}
              {image.formats?.xlarge && (
                  <source media="(min-width:1921px), (min-height:1921px)" srcSet={image.formats.xlarge.url} />
              )}
              {image.formats?.large && (
                  <source media="(min-width:1201px), (min-height:1201px)" srcSet={image.formats.large.url} />
              )}
              {image.formats?.medium && (
                  <source media="(min-width:769px), (min-width:769px)" srcSet={image.formats.medium.url} />
              )}
              {image.formats?.small && (
                  <source media="(min-width:376px), (min-height:376px)" srcSet={image.formats.small.url} />
              )}
              {image.formats?.xsmall && (
                  <source media="(min-width:1px)" srcSet={image.formats.xsmall.url} />
              )}
              <img src={image.formats?.preload ? image.formats?.preload.url : (image.formats?.thumbnail ? image.formats?.thumbnail.url : image.url)} alt={image.alternativeText} />
          </picture>
      )
  }
  return (
    <div className="blogDetail__poster mb-4 pb-1">
      <figure className="js-animation--fade--none" data-screen-offset=".5">
        <div className="image__object-fit image--radius h-100">
          {feature_image && (
            <>
              <div className="d-sm-block d-none js-animation--fade--none" data-screen-offset=".1">
                  {renderImage(feature_image)}
              </div>
              <div className="d-sm-none d-block">
                  {renderImage(mobile_feature_image ? mobile_feature_image : feature_image)}
              </div>
            </>
          )}
        </div>
        {feature_image.caption !== "" && <figcaption>{feature_image.caption}</figcaption>}
      </figure>
    </div>
  );
}

export default BlogDetailPoster;
