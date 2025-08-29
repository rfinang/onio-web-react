import { useEffect } from "react";
import { VideoPopupStyles } from "../styles/block/VideoPopup";

function VideoPopup({ videoURL }) {
  // if (!videoURL) return null;
  useEffect(() => {
    var myModalEl = document.getElementById("videoModal");
    myModalEl.addEventListener("hidden.bs.modal", function () {
      document.querySelector(".js-video__player").pause();
    });
    myModalEl.addEventListener("shown.bs.modal", function () {
      document.querySelector(".js-video__player").play();
    });
    return () => {
      document.querySelector(".js-video__player").pause();
    };
  }, []);
  return (
    <VideoPopupStyles className="modal fade" id="videoModal" tabIndex={-1} aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-body">
            <div className="popup--main--video">
              <video
                src={videoURL}
                width="1600"
                height="900"
                className="js-video__player"
                loop
                playsInline
                webkit-playsinline="true"
                x5-playsinline="true"
              ></video>
            </div>
          </div>
        </div>
      </div>
      <button type="button" className="modal__close" data-bs-dismiss="modal" />
    </VideoPopupStyles>
  );
}

export default VideoPopup;
