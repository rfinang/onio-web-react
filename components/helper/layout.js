import { checkDeviceMobile } from "./helper";

class Layout {
  constructor() {
    this.screenWidth;
    this.init();
    this.bindingEvents();
  }

  init() {
    this.screenWidth = window.innerWidth;
    this.bodyClass();
  }

  bodyClass() {
    if (checkDeviceMobile()) {
      document.body.classList.add("site__template-mobile");
      document.documentElement.classList.add("is-mobile");
    } else {
      document.body.classList.remove("site__template-mobile");
      document.documentElement.classList.remove("is-mobile");
    }
  }

  bindingEvents() {
    let _this = this;
    window.addEventListener("resize", function () {
      if (_this.screenWidth != window.innerWidth) {
        _this.screenWidth = window.innerWidth;
        _this.bodyClass();
      }
    });
  }
}

export default Layout;
