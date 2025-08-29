import { useEffect } from "react";

import styled from "styled-components";
import PageAnimations from "./helper/animation/page-animations";
const NotFoundStyles = styled.div`
  .content__404 {
    padding-top: 15rem;
    padding-bottom: 25rem;
  }
  .content__404 .heading--supper--lineHeight {
    word-break: break-word;
  }
  @media (max-width: 739.98px) {
    .content__404 {
      padding-bottom: 15rem;
    }
  }
  @media (max-width: 739.98px) {
    .content__404 .heading--supper--lineHeight {
      font-size: 82px;
    }
  }
  @media (max-width: 350px) {
    .content__404 .heading--supper--lineHeight {
      font-size: 62px;
    }
  }
`;
function NotFound() {
  useEffect(() => {
    setTimeout(() => {
      new PageAnimations();
    });
  }, []);
  return (
    <NotFoundStyles>
      <div className="content__404 bg-red">
        <div className="container">
          <div className="spacing--bottom--sm">
            <h4
              className="heading--block heading--block--solid mb-0 d-inline-block js-animation--fade is-animation-loading"
              data-screen-offset=".1"
            >
              <span className="heading--block__text">404 Error</span>
            </h4>
          </div>
          <div className="row justify-content-center">
            <div className="col-12 mb-3">
              <h1
                className="heading--supper heading--supper--lineHeight text-center mb-5 js-animation--fade is-animation-loading"
                data-screen-offset=".2"
              >
                A glitch occurred
              </h1>
              <p
                className="text-center h6 js-animation--chars is-animation-loading"
                data-screen-offset=".3"
              >
                It seems that page could not be found
              </p>
            </div>
            <div className="col-lg-3 col-sm-4 col-12">
              <a
                href="/"
                className="btn btn--large js-link--btn btn--bg btn--bg--white js-animation--fade"
              >
                <span className="js-link__text">Go Home</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </NotFoundStyles>
  );
}

export default NotFound;
