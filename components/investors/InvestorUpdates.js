import { InvestorUpdateStyles } from "../styles/investor/Updates";
import Container from "../ui/Container";

function InvestorUpdates({ investorContent }) {
  if (!investorContent) return null;
  const { label, description, contents } = investorContent;
  return (
    <InvestorUpdateStyles>
      <div className="invertors__updates bg-background spacing--top--sm">
        <Container className="pt-4">
          <div className="grid md:grid-cols-12 gap-lg">
            <div className="col-span-12 spacing--bottom--lg">
              <h4
                className="heading--block mb-0 d-inline-block js-animation--fade"
                data-screen-offset=".8"
              >
                <span className="heading--block__text">{label}</span>
              </h4>
            </div>
            <div className="sm:col-span-5 col-span-12 desc--large">
              <p className="js-animation--lines" data-screen-offset=".9">
                {description}
              </p>
            </div>
            <div className="lg:col-span-5 sm:col-span-6 col-span-12 desc sm:col-start-7">
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
        </Container>
      </div>
    </InvestorUpdateStyles>
  );
}

export default InvestorUpdates;
