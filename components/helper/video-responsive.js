import { VideoItem } from "./video-item";

class VideoResponsive {
  constructor() {
    this.DOM = { videos: document.querySelectorAll(".js-video__responsive") };
    this.bindEvent();
  }

  resizeVideoSrc() {
    this.DOM.videos.forEach((video) => {
      new VideoItem(video);
    });
  }

  bindEvent() {
    this.resizeVideoSrc();
  }
}

export default VideoResponsive;
