import ImageItemDataSrcset from "./image-item-data-srcset";

class ImageLazy {
  constructor() {
    this.init();
  }
  init() {
    this.imageLazys = [];
    this.DOM = { imageLazys: document.querySelectorAll(".js-image--lazy") };
    this.DOM.imageLazys.forEach((lazy) => {
      const imageItem = new ImageItemDataSrcset(lazy);
      this.imageLazys.push(imageItem);
    });
  }

  destroy() {
    this.imageLazys.forEach((lazy) => lazy.destroy());
    this.imageLazys = null;
  }

  resize() {
    this.imageLazys.forEach((lazy) => lazy.resize());
  }
}
export default ImageLazy;
