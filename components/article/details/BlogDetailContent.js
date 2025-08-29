import React from "react";
import {useAppContext} from "../../../context/AppContext";
function BlogDetailContent({ content, linkTo, sendMail, handleMouseClick, customClass }) {
  const { dispatch } = useAppContext();
  const onClickContactUs = (reasonToContact) => () => {
    return dispatch({
      type: "change_contact",
      value: reasonToContact,
    });
  };

  const popupWindow = (url, windowName, win, w, h) => {
    const y = win.top.outerHeight / 2 + win.top.screenY - h / 2;
    const x = win.top.outerWidth / 2 + win.top.screenX - w / 2;
    return win.open(
      url,
      windowName,
      `toolbar = no,
      location = no,
      directories = no,
      status = no,
      menubar = no,
      scrollbars = no,
      resizable = no,
      copyhistory = no,
      width = ${w},
      height = ${h},
      top = ${y},
      left = ${x}`
    );
  };
  const fbSharingClick = (e) => {
    e.preventDefault();
    popupWindow(
      "https://www.facebook.com/sharer/sharer.php?u=" + window.location.href,
      "Share to Facebook",
      window,
      600,
      400
    );
  };
  const twSharingClick = (e) => {
    e.preventDefault();
    popupWindow(
      "https://twitter.com/intent/tweet/?url=" + window.location.href,
      "Share to Twitter",
      window,
      600,
      400
    );
  };
  return (
    <div className={`blogDetail__content ${customClass}  js-animation--fade`}>
      <div className="row">
        <div className="col-lg-4 col-md-8 js-postSharing col-sm-10 col-12 offset-lg-0 offset-md-2 offset-sm-1">
          <ul className="blogDetail__content__sharing js-postSharing__translate ul-reset d-flex">
            <li>Share:</li>
            <li>
              <a href="#" onClick={fbSharingClick} className="linkHover linkHover--black">
                Facebook
              </a>
            </li>
            /
            <li>
              <a href="#" onClick={twSharingClick} className="linkHover linkHover--black">
                Twitter
              </a>
            </li>
            /
            <li>
              <a
                href="#"
                className="linkHover linkHover--black js-copy-clipboard"
                data-mobile="top"
                data-position="right"
                data-text="copy link"
                onClick={handleMouseClick}
              >
                <span>Copy Link</span>
              </a>
            </li>
          </ul>
          <span className="spacing--bottom--md d-lg-none d-block"></span>
        </div>
        <div className="col-lg-6 col-md-8 col-sm-10 col-12 offset-lg-0 offset-md-2 offset-sm-1 blogDetail__content__right">
          <div className="blogDetail__content__right__inner mb-lg-3 mb-4">
            <div className="dynamic-content" dangerouslySetInnerHTML={{ __html: content }}></div>
            <span className="blogDetail__content__border d-block"></span>
          </div>
          {sendMail && (
              <div className="blogDetail__content__right__press">
                <h5 className="h5 mb-2">Press Contact</h5>
                <h6 className="h6 mb-0">{sendMail.name}</h6>
                <p>{sendMail.short_description}</p>
                <div className="d-inline-block">
                  <a href={sendMail.link ?? "#contact-form-press"}
                     data-bs-toggle={sendMail.link ? undefined : "modal"}
                     data-bs-target={sendMail.link ? undefined : "#contactModal"}
                     onClick={sendMail.link ? undefined : onClickContactUs("#contact-form-press")}
                     className="pageLink pageLink--black">
                    <span className="pageLink__text">Contact us</span>
                    <span className="pageLink__icon">
                    <svg
                        width="31"
                        height="27"
                        viewBox="0 0 31 27"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                          d="M15.8594 1L29 13.5L15.8594 26"
                          stroke="#222021"
                          strokeWidth="2"
                      />
                      <path d="M0 13.5898L28.7829 13.5898" stroke="#222021" strokeWidth="2"/>
                    </svg>
                  </span>
                  </a>
                </div>
              </div>
          )}

          {linkTo && (
              <div className="blogDetail__content__right__press">
                  <a href={linkTo.url}
                     target={linkTo.open_new_tab ? "_blank" : "_self"}
                     className="pageLink pageLink--black js-animation--fade" data-offset=".15">
                    <span className="pageLink__text">{ linkTo.label ?? "Go to article" }</span>
                    <span className="pageLink__icon">
                    <svg
                        width="31"
                        height="27"
                        viewBox="0 0 31 27"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                          d="M15.8594 1L29 13.5L15.8594 26"
                          stroke="#222021"
                          strokeWidth="2"
                      />
                      <path d="M0 13.5898L28.7829 13.5898" stroke="#222021" strokeWidth="2"/>
                    </svg>
                  </span>
                  </a>
              </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default BlogDetailContent;
