let servicesInstance = null;

class Services {
  constructor() {
    if (servicesInstance) return servicesInstance;
    servicesInstance = this;
    window.addEventListener("load", () => {
      this.handleScrolling = this.handleScrolling.bind(this);
      this.bindEvent();
    });
  }

  handleScrolling() {
    this.scrollingType = "contentScrolling";
  }

  bindEvent() {
    window.addEventListener("scroll", () => {
      this.handleScrolling();
    });
  }
}

export default new Services();
