import { AboutSayHelloStyles } from "../styles/about/SayHello";

function SayHello({ bigPicture }) {
  if (!bigPicture) return null;
  const { title, label, description, content } = bigPicture;
  return (
    <AboutSayHelloStyles>
      <div className="aboutSayHello">
        <div className="container">
          <div className="row">
            <div className="col-12 mb-4 pb-1">
              <h4 className="heading--block mb-0 d-inline-block js-animation--fade">
                <span className="heading--block__text">{label}</span>
              </h4>
            </div>
            <div className="col-lg-6 col-md-8 col-12">
              <h2 className="h2 spacing--bottom--md js-animation--chars">{title}</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-12 mb-md-0 mb-5 desc--large js-animation--lines">
              <div
                className="pr-lg-2"
                dangerouslySetInnerHTML={{
                  __html: description.replaceAll("\n", "<br/>"),
                }}
              />
            </div>
            <div
              className="col-lg-4 col-md-5 offset-lg-2 offset-md-1 pb-md-0 pb-2"
              dangerouslySetInnerHTML={{
                __html: content.content,
              }}
            />
          </div>
        </div>
      </div>
    </AboutSayHelloStyles>
  );
}

export default SayHello;
