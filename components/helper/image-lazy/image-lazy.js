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
    if (this.imageLazys && Array.isArray(this.imageLazys)) {
      this.imageLazys.forEach((lazy) => {
        if (lazy && typeof lazy.destroy === 'function') {
          lazy.destroy();
        }
      });
      this.imageLazys = null;
    }
  }

  resize() {
    if (this.imageLazys && Array.isArray(this.imageLazys)) {
      this.imageLazys.forEach((lazy) => {
        if (lazy && typeof lazy.resize === 'function') {
          lazy.resize();
        }
      });
    }
  }
}
export default ImageLazy;
