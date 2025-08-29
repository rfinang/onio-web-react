class ImageItemDataSrcset {
  DOM;
  rendered;
  isVisible;
  isLoaded;
  timeOnScreen;

  constructor(el) {
    this.DOM = { el: el };
    this.rendered = false;
    this.isVisible = false;
    this.isLoaded = false;
    this.timeOnScreen = null;
    this.addObServer();
  }

  addObServer() {
    this.DOM.el.classList.add("is-handle");
    if (
      !("IntersectionObserver" in window) ||
      !("IntersectionObserverEntry" in window) ||
      !("intersectionRatio" in window.IntersectionObserverEntry.prototype)
    ) {
      setTimeout(() => {
        this.render();
      }, 200);
    } else {
      let img = this.DOM.el.querySelector('img');
      let imgHeight = img.getBoundingClientRect().height;
      this.obServer = new IntersectionObserver((entries) => {
        this.isVisible = entries[0].intersectionRatio;
        if (entries[0].intersectionRatio > 0) {
          this.timeOnScreen = setTimeout(this.render.bind(this), 200);
        } else {
          clearTimeout(this.timeOnScreen);
        }
      }, {
        rootMargin: `${imgHeight + window.innerHeight/2}px`
      });
      this.obServer.observe(this.DOM.el);
    }
  }

  render() {
    if (this.isLoaded) return;
    this.isLoaded = true;
    if (this.DOM.el.getAttribute("data-srcset")) {
      this.DOM.el.insertAdjacentHTML("afterbegin", this.DOM.el.getAttribute("data-srcset"));
    }
    this.DOM.el.removeAttribute("data-srcset");
    this.destroy();
  }

  destroy() {
    this.obServer.unobserve(this.DOM.el);
    this.obServer.disconnect();
    this.obServer = null;
  }
}

export default ImageItemDataSrcset;
