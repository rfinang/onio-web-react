import styled from "styled-components";

export const VideoItem = styled.a`
  display: block;
  
  position: relative;
  max-width: 33.6rem;
  height: 21.6rem;
  .link__video {
    &__img {
      overflow: hidden;
      border-radius: 2.5rem;
      margin-bottom: 0;
      height: 100%;
      position: relative;

      &:after {
        display: block;
        content: "";
        width: 100%;
        height: 100%;
        background: #000;
        opacity: 0;
        transition: opacity 0.4s cubic-bezier(0.33, 1, 0.68, 1);
        position: absolute;
        top: 0;
        left: 0;
      }
      & > picture img {
        object-fit: cover;
        width: 100%;
        height: 100%;
        max-width: auto;
      }
    }
    &__icon {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 2;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 0.2rem solid #fff;
      width: 4.6rem;
      height: 4.6rem;
      border-radius: 50%;
    }
  }
  &:hover .link__video {
    &__img:after {
      opacity: .6;
    }
  }
`;
