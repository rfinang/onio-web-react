import { Typography } from "../ui";
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
              <Typography 
                variant="section-badge"
                className="mb-0 js-animation--fade"
              >
                {label}
              </Typography>
            </div>
            <div className="col-lg-6 col-md-8 col-12">
              <Typography 
                variant="h2" 
                className="spacing--bottom--md js-animation--chars"
              >
                {title}
              </Typography>
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
