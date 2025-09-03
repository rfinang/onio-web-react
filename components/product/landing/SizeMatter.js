import { useEffect } from "react";
import Link from "next/link";
import { Typography, Button } from "../../ui";
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
      <div className="sizeMatters bg-accent">
        <div className="container spacing--bottom--lg">
          <div className="row">
            <Typography
              variant="body-xl"
              className="col-md-6 col-sm-7 mb-sm-0 mb-4 col-12 js-animation--lines"
              dangerouslySetInnerHTML={{ __html: description }}
            />
            <div className="col-sm-auto col-12 ms-sm-auto js-animation--fade" data-offset=".15">
              <Button
                as={Link}
                href={link_to.url}
                variant="link"
                color="black"
                hasArrow
              >
                {link_to.label}
              </Button>
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
