import { InvestorUpdateStyles } from "../styles/investor/Updates";

function InvestorUpdates({ investorContent }) {
  if (!investorContent) return null;
  const { label, description, contents } = investorContent;
  return (
    <InvestorUpdateStyles>
      <div className="invertors__updates bg-wild spacing--top--sm">
        <div className="container pt-4">
          <div className="row">
            <div className="col-12 spacing--bottom--lg">
              <h4
                className="heading--block mb-0 d-inline-block js-animation--fade"
                data-screen-offset=".8"
              >
                <span className="heading--block__text">{label}</span>
              </h4>
            </div>
            <div className="col-sm-5 col-12 desc--large">
              <p className="js-animation--lines" data-screen-offset=".9">
                {description}
              </p>
            </div>
            <div className="col-lg-5 col-sm-6 col-12 desc offset-sm-1">
              {contents.map((item) => {
                const { id, title, content } = item;
                return (
                  <div key={id}>
                    <h5
                      className="h5 js-animation--lines"
                      data-screen-offset="1.05"
                      data-offset=".15"
                    >
                      {title}
                    </h5>
                    <p
                      className="js-animation--fade mb-5"
                      data-screen-offset="1.05"
                      data-offset=".15"
                      dangerouslySetInnerHTML={{
                        __html: content.replaceAll("\n", "<br/>"),
                      }}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </InvestorUpdateStyles>
  );
}

export default InvestorUpdates;
