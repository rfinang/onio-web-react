import React from "react";
import { InvestorPartnerStyles } from "../styles/investor/Partner";

function InvestorPartner({ partner }) {
  if (!partner) return null;
  const { title, label, description, content, images } = partner;
  return (
    <InvestorPartnerStyles>
      <div className="invertors__partner">
        <span className="d-block line__spacing spacing--bottom--lg"></span>
        <div className="container pb-sm-4 pb-2">
          <div className="row mb-lg-6 mb-5">
            <div className="col-12">
              <h4 className="heading--block mb-0 d-inline-block js-animation--fade">
                <span className="heading--block__text">{label}</span>
              </h4>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-5 col-sm-6 col-12">
              <h2 className="h2 mb-md-6 mb-sm-5 mb-4 js-animation--chars">{title}</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-5 col-sm-6 col-12">
              <p className="desc--large js-animation--lines">{description}</p>
              {content && (
                <div
                  className="js-animation--fade"
                  data-offset=".35"
                  dangerouslySetInnerHTML={{ __html: content.content }}
                />
              )}
              <span className="d-block line__spacing spacing--bottom--md"></span>
            </div>
            {images && (
              <div className="col-sm-6 col-12 ms-auto mb-sm-0 mb-2 pb-sm-0 pb-1">
                <div className="row justify-content-sm-end">
                  {images.map((item, index) => {
                    const { id, url, open_new_tab, image } = item;
                    return (
                      <div
                        key={id}
                        className="col-6 js-animation--fade"
                        data-offset={index % 2 === 0 ? ".15" : ".3"}
                      >
                        <a
                          href={url}
                          target={open_new_tab ? "_blank" : "_self"}
                          className="partner__logo image__object-fit"
                        >
                          <img src={image.url} alt="logo-partner" />
                        </a>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </InvestorPartnerStyles>
  );
}

export default InvestorPartner;
