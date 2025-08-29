import Link from "next/link";
import { useAppContext } from "../../../context/AppContext";
import { ResourceStyles } from "../../styles/project-landing/smart-hub/Resource";

function Resource({ data }) {
  if (!data) return null;
  const { dispatch } = useAppContext();
  const onClickGetStartedItem = (reasoneToContact) => () => {
    return dispatch({
      type: "change_contact",
      value: reasoneToContact,
    });
  };

  const { label, title, description, get_started_links } = data;
  return (
    <ResourceStyles id="resources">
      <div className="smart-hub-resource">
        <div className="container">
          <div className="d-block">
            <h4 className="heading--block heading--block--white d-inline-block block-title js-animation--fade">
              <span className="heading--block__text">{label}</span>
            </h4>
          </div>
          <h3 className="h2 section-title js-animation--fade" data-offset=".1">
            {title}
          </h3>
          <p className="h5 section-desc js-animation--fade" data-offset=".15">
            {description}
          </p>
          {get_started_links && (
            <div className="row">
              <div className="col-md-5 col-lg-4">
                <h4 className="h4 title">Get started:</h4>
              </div>
              <div className="col-md-7 col-lg-8">
                <div className="js-animation--fade is-animation-loading">
                  <ul className="info-list h6">
                    {get_started_links.map((item) => {
                      const { id, url, label, open_new_tab } = item;
                      return (
                        <li key={id}>
                          <Link href={url}>
                            <a title={label} target={open_new_tab ? "_blank" : "_self"}>
                              {label}
                              <svg
                                width="46"
                                height="46"
                                viewBox="0 0 46 46"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <circle cx="23" cy="23" r="22" stroke="#fff" strokeWidth="2" />
                                <path
                                  d="M18.5771 10.6155L30.9615 22.9999L18.5771 35.3843"
                                  stroke="#fff"
                                  strokeWidth="2"
                                />
                              </svg>
                            </a>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </ResourceStyles>
  );
}

export default Resource;
