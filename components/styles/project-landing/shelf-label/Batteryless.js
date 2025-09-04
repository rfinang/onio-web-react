import styled from "styled-components";

export const BatterylessStyles = styled.div`
  .shelf-label-batteryless {
    padding: 6rem 0 6.4rem;
  }
  .shelf-label-batteryless .heading--block {
    margin-bottom: 7.1rem;
  }
  .shelf-label-batteryless .section-title,
  .shelf-label-batteryless .section-desc {
    margin-bottom: 13rem;
  }

  @media (max-width: 739.98px) {
    .shelf-label-batteryless {
      padding: 47px 0 36.5px;
    }
    .shelf-label-batteryless .heading--block {
      margin-bottom: 62px;
    }
    .shelf-label-batteryless .section-title,
    .shelf-label-batteryless .section-desc {
      margin-bottom: 30px;
    }
  }

  @media (min-width: 1200px) {
    .focusFeature {
      padding-left: 6%;
      padding-right: 6%;
    }
  }
  .focusFeature__thumbnail {
    margin-bottom: 7.2rem;
    text-align: center;
  }
  @media (min-width: 1400px) {
    .focusFeature__thumbnail__inner svg {
      max-width: 21.6rem;
    }
  }
  @media (min-width: 740px) and (max-width: 1399.98px) {
    .focusFeature__thumbnail__inner svg {
      max-width: 21.6rem;
    }
  }
  @media (max-width: 739.98px) {
    .focusFeature__thumbnail__inner svg {
      max-width: 120px;
    }
  }
  @media (min-width: 1024px) {
    .focusFeature__info__heading {
      margin-bottom: 4rem;
    }
  }
  @media (min-width: 740px) and (max-width: 1023.98px) {
    .focusFeature__info__heading {
      margin-bottom: 3rem;
    }
  }
  .focusFeature__info__desc {
    padding-left: 5%;
    padding-right: 5%;
  }

  /* empty comment */
  .turnkey-landing-quick-info {
    padding: 6rem 0 17.7rem;
    position: relative;
    z-index: 2;
    background-color: inherit;
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
    margin-bottom: 2.9rem;
    /* min-height: 5.6rem; */
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
    border: 2px solid var(--onio-color-primary);
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
    color: var(--onio-color-white);
    background-color: #000000;
    text-decoration: none;
  }
  .turnkey-landing-quick-info .btn-link:focus svg rect,
  .turnkey-landing-quick-info .btn-link:focus svg path,
  .turnkey-landing-quick-info .btn-link:hover svg rect,
  .turnkey-landing-quick-info .btn-link:hover svg path {
    stroke: var(--onio-color-white);
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
`;
