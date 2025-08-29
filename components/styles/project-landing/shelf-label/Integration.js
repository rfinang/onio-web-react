import styled from "styled-components";

export const IntegrationStyles = styled.div`
  .shelf-label-integration {
    padding: 9.7rem 0 6.7rem;
  }
  .shelf-label-integration .heading--block {
    margin-bottom: 5.5rem;
  }
  .shelf-label-integration .info-link {
    color: #000000;
    font-weight: 500;
    font-size: 2rem;
    line-height: 2.4rem;
  }
  .shelf-label-integration .info-link svg {
    display: block;
    margin-left: 1.3rem;
    transition: transform 0.4s ease;
  }
  .shelf-label-integration .info-link:hover svg {
    transform: translateX(0.5rem);
  }
  .shelf-label-integration .info-desc {
    margin-bottom: 0;
  }

  @media (max-width: 739.98px) {
    .shelf-label-integration {
      padding: 3.3846153846rem 0 4.8rem;
    }
    .shelf-label-integration .heading--block {
      margin-bottom: 5.3rem;
    }
    .shelf-label-integration .info-desc {
      margin-bottom: 7.2rem;
    }
  }
  .shelf-label-quick-info {
    padding: 6rem 0 7.5rem;
    position: relative;
    z-index: 2;
    background-color: inherit;
  }
  .shelf-label-quick-info:after {
    content: "";
    position: absolute;
    height: 6rem;
    bottom: -5.9rem;
    background-color: #CDEDFF;
    display: block;
    width: 100%;
    z-index: 3;
    border-radius: 0 0 var(--border-radius) var(--border-radius);
    transition: opacity 0.3s cubic-bezier(0.33, 1, 0.68, 1);
    will-change: opacity;
  }

  .shelf-label-quick-info .video-block {
    margin-bottom: 6.3rem;
    height: 72.9rem;
    overflow: hidden;
    border-radius: 5rem;
    margin-bottom: 9.7rem;
  }
  .shelf-label-quick-info .video-block video {
    border-radius: 5rem;
    -o-object-fit: cover;
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
  .shelf-label-quick-info .item {
    margin-bottom: 9.5rem;
  }
  .shelf-label-quick-info .item .title {
    margin-bottom: 2.9rem;
    /* min-height: 5.6rem; */
  }
  .shelf-label-quick-info .item .desc {
    margin-bottom: 0;
  }
  .shelf-label-quick-info .btn-link {
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
  .shelf-label-quick-info .btn-link span {
    display: block;
    margin-bottom: 1rem;
  }
  .shelf-label-quick-info .btn-link svg {
    display: block;
  }
  .shelf-label-quick-info .btn-link svg rect,
  .shelf-label-quick-info .btn-link svg path {
    transition: stroke 0.4s ease;
  }
  .shelf-label-quick-info .btn-link:focus,
  .shelf-label-quick-info .btn-link:hover {
    color: #fff;
    background-color: #000000;
    text-decoration: none;
  }
  .shelf-label-quick-info .btn-link:focus svg rect,
  .shelf-label-quick-info .btn-link:focus svg path,
  .shelf-label-quick-info .btn-link:hover svg rect,
  .shelf-label-quick-info .btn-link:hover svg path {
    stroke: #fff;
  }
  @media (max-width: 1023.98px) {
    .shelf-label-quick-info .item .title {
      min-height: 7.8rem;
    }
  }
  @media (max-width: 739.98px) {
    .shelf-label-quick-info {
      padding: 50px 0;
    }
    .shelf-label-quick-info .video-block {
      height: 424px;
      border-radius: 20px;
      margin-bottom: 63px;
    }
    .shelf-label-quick-info .video-block video {
      border-radius: 20px;
    }
    .shelf-label-quick-info .item {
      margin-bottom: 63px;
    }
    .shelf-label-quick-info .item .title {
      min-height: auto;
      margin-bottom: 8px;
    }
    .shelf-label-quick-info .btn-link {
      width: 158px;
      min-height: 158px;
      margin-top: 57px;
      font-size: 13.7316px;
      line-height: 18px;
    }
  }
`;
