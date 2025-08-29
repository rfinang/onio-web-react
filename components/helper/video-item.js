import { isScreenTablet } from "./helper";
import LoadingCss from "./loading-css";

export class VideoItem {
  constructor(video) {
    this.isplay = false;
    this.loading = new LoadingCss(video.parentElement, { color: "white" });

    setTimeout(() => {
      this.loading.show();
    }, 100);

    if (isScreenTablet()) {
      video.src = video.getAttribute("data-src-mobile");
    } else {
      video.src = video.getAttribute("data-src");
    }

    video.addEventListener("error", () => {
      console.error("video cant not play");
    });
    video.addEventListener("waiting", () => {
      this.loading.show();
    });
    if (video.readyState && document.readyState === "complete") video.play();
    else {
      this.interLoopHandlePlay = setInterval(() => {
        if (video.readyState && document.readyState === "complete") {
          video.play();
          clearInterval(this.interLoopHandlePlay);
        }
      }, 300);
    }
    video.addEventListener("playing", () => {
      this.loading.hide();
    });
  }
}
