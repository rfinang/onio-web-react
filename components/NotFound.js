import { useEffect } from "react";

import styled from "styled-components";
import { Button, Typography } from "./ui";
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
      <div className="content__404 bg-alert">
        <div className="container">
          <div className="spacing--bottom--sm">
            <Typography 
              variant="section-badge"
              className="js-animation--fade is-animation-loading"
              data-screen-offset=".1"
            >
              404 Error
            </Typography>
          </div>
          <div className="row justify-content-center">
            <div className="col-12 mb-3">
              <Typography 
                variant="hero"
                as="h1"
                className="text-center mb-5 js-animation--fade is-animation-loading"
                data-screen-offset=".2"
              >
                A glitch occurred
              </Typography>
              <Typography 
                variant="h6"
                as="p"
                className="text-center js-animation--chars is-animation-loading"
                data-screen-offset=".3"
              >
                It seems that page could not be found
              </Typography>
            </div>
            <div className="col-lg-3 col-sm-4 col-12">
              <Button
                as="a"
                href="/"
                variant="secondary"
                size="lg"
                className="js-link--btn js-animation--fade"
              >
                Go Home
              </Button>
            </div>
          </div>
        </div>
      </div>
    </NotFoundStyles>
  );
}

export default NotFound;
