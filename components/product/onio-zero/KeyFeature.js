import ImageComp from "../../common/Image";
import { useAppContext } from "../../../context/AppContext";
function KeyFeature({ sectionKeyFeature }) {
  if (!sectionKeyFeature) return null;
  const { label, title, features_content, request_link, image } = sectionKeyFeature;
  const { dispatch } = useAppContext();
  const onClickGetStartedItem = (reasoneToContact) => () => {
    return dispatch({
      type: "change_contact",
      value: reasoneToContact,
    });
  };

  return (
    <>
      <div className="spacing--bottom--xs">
        <h4 className="heading--block heading--block--white mb-0 d-inline-block js-animation--fade">
          <span className="heading--block__text">{label}</span>
        </h4>
      </div>
      <div className="row">
        <div className="col-md-5 col-12 mb-md-0 mb-5">
          <div className="row">
            <div className="col-md-12 col-sm-8 col-12">
              <h2 className="h2 text-white spacing--bottom--md animation--chars">{title}</h2>
            </div>
            <div className="col-md-12 col-sm-7 col-12">
              <figure className="image__object-fit image--radius js-animation--fade--none">
                <ImageComp image={image} />
              </figure>
            </div>
            <div className="col-md-12 col-sm-4 col-12 offset-md-0 offset-sm-1">
              <p className="spacing--top--sm">
                <a
                  href={request_link.link}
                  className="resource resource--link resource--red js-animation--fade"
                  data-bs-toggle="modal"
                  data-bs-target="#contactModal"
                  onClick={onClickGetStartedItem(request_link.link)}
                >
                  <span className="d-block resource__heading">{request_link.label}</span>
                  <span className="d-block resource__icon">
                    <span className="iconLink iconLink--arrow iconLink--arrow--oval iconLink--arrow--small iconLink--arrow--red">
                      <svg
                        width="21"
                        height="21"
                        viewBox="0 0 21 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="svg"
                      >
                        <path
                          d="M10.1348 1.07703L19.5576 10.4999L10.1348 19.9228"
                          stroke="#FF6231"
                          strokeWidth="2"
                        ></path>
                      </svg>
                    </span>
                  </span>
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6 offset-md-1 col-12 pt-5">
          {features_content && (
            <div className="row">
              {features_content.map((item, index) => {
                const { id, title, content } = item;
                return (
                  <div key={id} className="col-sm-6 col-12">
                    <div
                      className="postIcon text-white js-animation--fade"
                      data-offset={index % 2 === 0 ? ".15" : ".3"}
                    >
                      <h6 className="h6 mb-3">{title}</h6>
                      <p>{content}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default KeyFeature;
