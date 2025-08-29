import styled from "styled-components";
export const VideoPopupStyles = styled.div`
  .modal-dialog {
    max-width: 100%;
    margin: 0;
  }
  .modal-content {
    border: none;
    border-radius: 0;
    background-color: transparent;
  }
  .modal-body {
    padding: 0;
  }
  .modal__close {
    background-color: transparent;
    border: none;

    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  video {
    object-fit: contain;
    width: 100%;
    height: 100%;
  }
  .popup--main--video {
    display: flex;
    align-items: center;
    height: 100vh;
    overflow: hidden;
  }
  @supports (backdrop-filter: blur(30px)) {
    .popup--main--video {
      background-color: rgba(0, 0, 0, 0.8);
      backdrop-filter: blur(10px);
    }
  }
  @supports not (backdrop-filter: blur(30px)) {
    .popup--main--video {
      background-color: rgba(0, 0, 0, 0.9);
    }
  }
`;
