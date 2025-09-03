import { Typography } from "../../ui";
import { EnvironmentalBenefitsStyles } from "../../styles/home/EnvironmentalBenefits";

function ZeroEnvironmentalBenefits({ sectionEnviromentalBenefits, materialSavings }) {
  if (!sectionEnviromentalBenefits) return null;
  const { label, title, description, contents } = sectionEnviromentalBenefits;
  return (
    <EnvironmentalBenefitsStyles>
      <div className="ppEnvironmentalBenefits bg-primary">
        <div className="ppEnvironmentalBenefits__container container">
          <div className="row mb-ms-5 mb-4">
            <div className="col-12">
              <Typography variant="section-badge" className="heading--block--white mb-0 d-inline-block js-animation--fade">
                {label}
              </Typography>
            </div>
          </div>
          <div className="row text-white spacing--bottom--xl">
            <div className="col-md-5 col-12">
              <Typography variant="h2" className="js-animation--chars">{title}</Typography>
              <span className="spacing--bottom--lg d-md-block d-none pb-md-3"></span>
              <span className="d-md-none d-block mb-3"></span>
            </div>
            <div
              className="col-md-6 col-12 pt-2 desc--large offset-md-1 js-animation--lines"
              data-offset=".15"
              dangerouslySetInnerHTML={{ __html: description }}
            />
          </div>
          <div className="row mb-3">
            {materialSavings && (
              <div className="col-lg-6 col-md-7 col-12 mb-md-0 mb-6 text-red">
                <Typography variant="h3" className="desc--large mb-2 js-animation--lines">{materialSavings.title}</Typography>
                <p className="desc--small mb-5 js-animation--fade">{materialSavings.description}</p>
                {materialSavings.material_savings_item.map((item) => {
                  const { id, element_name, element_symbol, atomic_number, amount } = item;
                  return (
                    <div
                      key={id}
                      className={`material js-material ${
                        "material--" + element_symbol.toLowerCase()
                      }`}
                    >
                      <div className="material__card js-material__card">
                        <span className="d-block material__card__name">{element_name}</span>
                        <span className="d-block material__card__code">{element_symbol}</span>
                        <span className="d-block material__card__number">{atomic_number}</span>
                      </div>
                      <div className="material__line">
                        <span className="material__line__el js-material__line__el d-block"></span>
                      </div>
                      <div className="material__number js-material__number">{amount}</div>
                    </div>
                  );
                })}
              </div>
            )}
            {contents && (
              <div className="col-md-4 col-12 text-white offset-lg-2 offset-md-1">
                <div className="row">
                  {contents.map((item) => {
                    const { id, title, content } = item;
                    return (
                      <div
                        key={id}
                        className="col-md-12 col-sm-6 col-12 js-animation--fade"
                        data-offset=".15"
                      >
                        <Typography variant="h5">{title}</Typography>
                        <p className="desc--small">{content}</p>
                        <p className="d-md-block d-sm-none d-block spacing--bottom--md"></p>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </EnvironmentalBenefitsStyles>
  );
}

export default ZeroEnvironmentalBenefits;
