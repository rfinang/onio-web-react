class LoadingCss {
  DOM;
  options;

  constructor(el, { color }) {
    this.DOM = { el };
    this.options = { color };

    this.init();
  }

  init() {
    this.DOM.el.classList.add("cssLoading__parent");
    this.DOM.el.insertAdjacentHTML(
      "beforeend",
      `<div class="lds-ring"><div></div><div></div><div></div><div></div></div>`
    );
    setTimeout(() => {
      this.DOM.item = this.DOM.el.querySelector(".lds-ring");
      this.DOM.item.classList.add(`color-${this.options.color}`);
    });
  }

  show() {
    this.DOM.item.classList.add("show");
  }

  hide() {
    this.DOM.item.classList.remove("show");
  }
}

export default LoadingCss;
