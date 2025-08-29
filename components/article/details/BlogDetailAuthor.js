import Link from "next/link";
import React from "react";
import ImageComp from "../../common/Image";
import Post from "../Post";

function BlogDetailAuthor({ writer, authorPost }) {
  if (!writer) return null;
  const { name, slug, job_title, short_bio, avatar } = writer;
  return (
    <div className="blogDetail__author">
      <div className="row spacing--bottom--xs">
        <div className="col-12">
          <h4 className="heading--block mb-0 d-inline-block  js-animation--fade">
            <span className="heading--block__text">About the author</span>
          </h4>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4 col-md-5 col-12 mb-md-0 mb-6">
          <div className="blogAuthor container-col-4">
            <div className="row">
              <div className="col-1">
                <figure className="image__object-fit blogAuthor__avatar js-animation--scale">
                  <ImageComp image={avatar} />
                </figure>
              </div>
              <div className="col-sm-3 col-12 pt-md-2 pt-sm-1 js-animation--fade">
                <div className="blogAuthor__info">
                  <h6 className="h6 mb-0">{name}</h6>
                  <p>{job_title}</p>
                </div>
                <div
                  className="blogAuthor__about desc--xs"
                  dangerouslySetInnerHTML={{ __html: short_bio }}
                />

                <div className="blogAuthor__links">
                  <Link href={`/team-member/${slug}.html`}>
                    <a className="pageLink pageLink--black">
                      <span className="pageLink__text">Read Bio</span>
                      <span className="pageLink__icon">
                        <svg
                          width="31"
                          height="27"
                          viewBox="0 0 31 27"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="svg"
                        >
                          <path
                            d="M15.8594 1L29 13.5L15.8594 26"
                            stroke="white"
                            strokeWidth="2"
                          ></path>
                          <path
                            d="M0 13.5898L28.7829 13.5898"
                            stroke="white"
                            strokeWidth="2"
                          ></path>
                        </svg>
                      </span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="offset-lg-2 offset-md-1 col-md-6 col-12 pt-md-2">
          {authorPost && (
            <>
              <h6 className="h6 mb-sm-3 mb-4 js-animation--fade" offset=".15">
                Recent posts by {name}
              </h6>
              <div className="row">
                {authorPost.map((item, index) => {
                  const { id } = item;
                  return (
                    <div
                      key={id}
                      className="col-md-12 col-sm-6 col-12 js-animation--fade"
                      offset={0.1 + index * 0.05}
                    >
                      <Post data={item} />
                    </div>
                  );
                })}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default BlogDetailAuthor;
