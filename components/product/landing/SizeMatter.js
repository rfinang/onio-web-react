import { useEffect } from "react";
import Link from "next/link";
import ImageComp from "../../common/Image";
import BenefitAnimations from "../../home/BenefitAnimations";
import EnvironmentalBenefits from "../../home/EnvironmentalBenefits";
import { SizeMatterStyles } from "../../styles/product/SizeMatter";
import SizeMatters from "../../helper/animation/size-master";

function SizeMatter({ data, lowerBomData }) {
  if (!data) return null;
  useEffect(() => {
    new SizeMatters();
  }, []);
  const { description, title_first_half, title_second_half, link_to, chip_image, list_animation } =
    data;
  return (
    <SizeMatterStyles>
      <div className="sizeMatters bg-red">
        <div className="container spacing--bottom--lg">
          <div className="row">
            <div
              className="col-md-6 col-sm-7 mb-sm-0 mb-4 col-12 desc--large js-animation--lines"
              dangerouslySetInnerHTML={{ __html: description }}
            />
            <div className="col-sm-auto col-12 ms-sm-auto js-animation--fade" data-offset=".15">
              <Link href={link_to.url} legacyBehavior>
                <a className="pageLink pageLink--black">
                  <span className="pageLink__text">{link_to.label}</span>
                  <span className="pageLink__icon">
                    <svg
                      width="31"
                      height="27"
                      viewBox="0 0 31 27"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="svg"
                    >
                      <path d="M15.8594 1L29 13.5L15.8594 26" stroke="white" strokeWidth="2"></path>
                      <path d="M0 13.5898L28.7829 13.5898" stroke="white" strokeWidth="2"></path>
                    </svg>
                  </span>
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="sizeMatters__container">
          <div className="sizeMatters__inner js-sizeMatter">
            <div className="row g-0 justify-content-center">
              <div className="col-sm-10 col-12 sizeMatters__heading pt-1">
                <h2 className="heading--supper text-center js-sizeMatter_heading mb-0">
                  <span className="d-block mb-0 js-sizeMatter_heading__item">
                    {title_first_half}
                  </span>
                  <span className="d-block mb-0 js-sizeMatter_heading__item">
                    {title_second_half}
                  </span>
                </h2>
              </div>
            </div>

            <div className="sizeMatters__image">
              <div className="sizeMatters__image__thumbnail js-sizeMatters__image__thumbnail">
                <div className="image__object-fit">
                  <ImageComp image={chip_image} />
                </div>
                <span className="sizeMatters__image__thumbnail__shadow js-sizeMatters__image__thumbnail__shadow"></span>
              </div>
              <span className="js-sizeMatters__image__thumbnail__trigger"></span>
              <span className="sizeMatters__image__size js-sizeMatters__image__size sizeMatters__image__size--w js-sizeMatters__image__size--w">
                <span>4mm</span>
              </span>
              <span className="sizeMatters__image__size js-sizeMatters__image__size sizeMatters__image__size--h js-sizeMatters__image__size--h">
                <span className="text">4mm</span>
              </span>
            </div>
            <div className="sizeMatters__gird">
              <ul className="sizeMatters__gird__lines sizeMatters__gird__lines--h">
                <li>
                  <span className="border__line border__line--top js-border__line"></span>
                  <span className="border__line border__line--bottom js-border__line"></span>
                </li>
                <li>
                  <span className="border__line js-border__line"></span>
                </li>
                <li>
                  <span className="border__line js-border__line"></span>
                </li>
                <li>
                  <span className="border__line js-border__line"></span>
                </li>
                <li>
                  <span className="border__line js-border__line"></span>
                </li>
                <li>
                  <span className="border__line js-border__line"></span>
                </li>
                <li>
                  <span className="border__line js-border__line"></span>
                </li>
                <li>
                  <span className="border__line js-border__line"></span>
                </li>
              </ul>
              <ul className="sizeMatters__gird__lines sizeMatters__gird__lines--v">
                <li>
                  <span className="border__line js-border__line"></span>
                </li>
                <li>
                  <span className="border__line js-border__line"></span>
                </li>
                <li>
                  <span className="border__line js-border__line"></span>
                </li>
                <li>
                  <span className="border__line js-border__line"></span>
                </li>
                <li>
                  <span className="border__line js-border__line"></span>
                </li>
                <li>
                  <span className="border__line js-border__line"></span>
                </li>
                <li>
                  <span className="border__line js-border__line"></span>
                </li>
                <li>
                  <span className="border__line js-border__line"></span>
                </li>
                <li>
                  <span className="border__line js-border__line"></span>
                </li>
                <li>
                  <span className="border__line js-border__line"></span>
                </li>
                <li>
                  <span className="border__line js-border__line"></span>
                </li>
                <li></li>
              </ul>
            </div>
          </div>
          {list_animation && <BenefitAnimations benefitAnimations={list_animation} />}
        </div>
        <EnvironmentalBenefits lowerBomData={lowerBomData} customClass="pb-0" />
      </div>
    </SizeMatterStyles>
  );
}

export default SizeMatter;
