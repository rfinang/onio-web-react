import React from "react";
import { TeamContentStyles } from "../styles/team-member/Content";
import ImageComp from "../common/Image";
function TeamMemberContent({ data, articleCount }) {
  const { name, job_title, bio, short_bio, social, avatar } = data;
  return (
    <TeamContentStyles>
      <div className="teamMember__content section--topPage bg-wild">
        <div className="container">
          <div className="row spacing--bottom--xs">
            <div className="col-12">
              <h4 className="heading--block mb-0 d-inline-block js-animation--fade">
                <span className="heading--block__text">Team Members</span>
              </h4>
            </div>
          </div>
          <div className="row mb-4">
            <div className="col-lg-7 col-md-10 col-12 pb-1">
              <div className="mb-4 pb-1">
                <h1 className="h1 mb-0 js-animation--chars" data-screen-offset=".3">
                  {name}
                </h1>
                <p className="h5 mb-0 js-animation--fade" data-screen-offset=".4">
                  {job_title}
                </p>
              </div>
              {social && (
                <ul
                  className="teamMember__socials ul-reset js-animation--fade--none"
                  data-screen-offset=".5"
                >
                  {social.map((item) => {
                    const { id, title, url, icon } = item;
                    return (
                      <li key={id}>
                        <a href={url} target="_blank" className="linkHover--black" title={title}>
                          <img src={icon.url} className="svg" alt={title} />
                        </a>
                      </li>
                    );
                  })}
                </ul>
              )}
              <p className="desc--md mb-0 js-animation--fade" data-screen-offset=".5">
                {articleCount} Article Contributions
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-5 col-md-6 col-12">
              <div className="staff">
                <div
                  className="staff__thumbnail image__object-fit font-0 js-animation--fade--none"
                  data-screen-offset=".5"
                >
                  <ImageComp image={avatar} />
                </div>
              </div>
            </div>
            <div
              className="col-md-5 col-12 offset-md-1 js-animation--fade"
              data-screen-offset=".65"
              dangerouslySetInnerHTML={{ __html: bio }}
            ></div>
          </div>
        </div>
      </div>
    </TeamContentStyles>
  );
}

export default TeamMemberContent;
