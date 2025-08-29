import styled from "styled-components";

export const BatterylessQuickStyles = styled.div`
  .turnkey-landing-quick-info {
    padding: 16rem 0 9.7rem;
    position: relative;
    z-index: 2;
    background-color: inherit;
  }
  .turnkey-landing-quick-info:after {
    content: "";
    position: absolute;
    height: 6rem;
    bottom: -5.9rem;
    background: #ffe0d6;
    display: block;
    width: 100%;
    z-index: 3;
    border-radius: 0 0 var(--border-radius) var(--border-radius);
    transition: opacity 0.3s cubic-bezier(0.33, 1, 0.68, 1);
    will-change: opacity;
  }
  .turnkey-landing-quick-info .video-block {
    margin-bottom: 6.3rem;
    height: 72.9rem;
    overflow: hidden;
    border-radius: 5rem;
    background-color: #f38167;
    margin-bottom: 9.7rem;
  }
  .turnkey-landing-quick-info .video-block video {
    border-radius: 5rem;
    -o-object-fit: cover;
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
  .turnkey-landing-quick-info .item {
    margin-bottom: 9.5rem;
  }
  .turnkey-landing-quick-info .item .title {
    margin-bottom: 4rem;
    min-height: 5.6rem;
  }
  .turnkey-landing-quick-info .item .desc {
    margin-bottom: 0;
  }
  .turnkey-landing-quick-info .btn-link {
    display: inline-flex;
    flex-direction: column;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    border: 2px solid #222021;
    padding: 1.1rem 1.4rem;
    min-height: 21.6rem;
    width: 21.6rem;
    color: #000000;
    font-weight: 500;
    font-size: 2rem;
    line-height: 2.6rem;
    transition: background-color 0.4s ease, color 0.4s ease;
  }
  .turnkey-landing-quick-info .btn-link span {
    display: block;
    margin-bottom: 1rem;
  }
  .turnkey-landing-quick-info .btn-link svg {
    display: block;
  }
  .turnkey-landing-quick-info .btn-link svg rect,
  .turnkey-landing-quick-info .btn-link svg path {
    transition: stroke 0.4s ease;
  }
  .turnkey-landing-quick-info .btn-link:focus,
  .turnkey-landing-quick-info .btn-link:hover {
    color: #fff;
    background-color: #000000;
    text-decoration: none;
  }
  .turnkey-landing-quick-info .btn-link:focus svg rect,
  .turnkey-landing-quick-info .btn-link:focus svg path,
  .turnkey-landing-quick-info .btn-link:hover svg rect,
  .turnkey-landing-quick-info .btn-link:hover svg path {
    stroke: #fff;
  }
  @media (max-width: 1023.98px) {
    .turnkey-landing-quick-info .item .title {
      min-height: 7.8rem;
    }
  }
  @media (max-width: 739.98px) {
    .turnkey-landing-quick-info {
      padding: 50px 0;
    }
    .turnkey-landing-quick-info .video-block {
      height: 424px;
      border-radius: 20px;
      margin-bottom: 63px;
    }
    .turnkey-landing-quick-info .video-block video {
      border-radius: 20px;
    }
    .turnkey-landing-quick-info .item {
      margin-bottom: 63px;
    }
    .turnkey-landing-quick-info .item .title {
      min-height: auto;
      margin-bottom: 8px;
    }
    .turnkey-landing-quick-info .btn-link {
      width: 158px;
      min-height: 158px;
      margin-top: 57px;
      font-size: 13.7316px;
      line-height: 18px;
    }
  }

  .resource {
    text-decoration: none !important;
    display: block;
    max-width: 21.6rem;
    padding: 1.2rem 1.5rem 2.1rem 1.5rem;
    transition: all 0.4s cubic-bezier(0.33, 1, 0.68, 1);
    margin-bottom: 2.4rem;
    width: 100%;
  }
  .resource--red {
    color: #ff6231;
  }
  @media (min-width: 1200px) {
    .resource--red {
      border: 2px solid #ff6231;
    }
  }
  @media (max-width: 1199.98px) {
    .resource--red {
      border: 1.5px solid #ff6231;
    }
  }
  @media (any-hover: hover) {
    .resource--red:hover {
      background: #ff6231;
      color: #222021;
    }
    .resource--red:hover .iconLink {
      background: #222021;
      border-color: #222021 !important;
    }
    .resource--red:hover .iconLink svg path {
      stroke: #ff6231;
    }
  }
  .resource--black {
    border: 2px solid #222021;
  }
  .resource--black:hover {
    background-color: #222021;
    color: #fff;
  }
  .resource--black:hover .iconLink {
    background-color: #fff;
  }
  .resource__heading {
    margin-bottom: 3rem;
    min-height: 11.2rem;
  }
  .resource__icon {
    position: relative;
    left: 0.25em;
  }
`;
