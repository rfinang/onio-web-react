import { gsap } from "gsap";
import { getElementAnimateDelay, setElementAnimateOffsetResponsive } from "../helper";
import AnimationHelper from "./animation-helper";

class AnimationImage {
  constructor(el, options = {}) {
    this.DOM = { el };
    this.options = { type: options.type || "default" };
    this.addAnimationType(this.options.type, options);
    this.pageEnter.bind();
  }

  pageEnter() {
    if (this.animationHelper && this.animationHelper.isInViewPointer()) {
      this.setOffset();
      this.animationIn();
    }
  }

  setOffset() {
    const { offsetResponsive, onscreenOffset } = setElementAnimateOffsetResponsive(this.DOM.el);
    this.animationOffset = { offsetResponsive, onscreenOffset };
  }

  addAnimationType(type = "", options) {
    this.animationHelper = new AnimationHelper({
      el: this.DOM.el,
      animationIn: this.animationIn.bind(this),
      setOffset: this.setOffset.bind(this),
    });

    this.DOM.el.classList.add("animation--image");
    switch (type) {
      default:
        this.options = {
          _from: {
            scale: 1.2,
            opacity: 0,
            y: 100,
          },
          _to: {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1,
            ease: "power3.out",
            clearProps: "all",
            onComplete: () => {
              this.DOM.el.classList.add("is-animation-completed");
            },
          },
        };

        this.options._from = Object.assign({}, this.options._from, options._from);
        this.options._to = Object.assign({}, this.options._to, options._to);
        this.options._out = Object.assign({}, this.options._out, options._out);
        break;
    }

    this.DOM.el.classList.remove("is-animation-loading");
    gsap.set(this.DOM.el, this.options._from);
  }

  animationIn(delay = 0) {
    if (this.animationHelper) this.animationHelper.removeHandleScrolling();
    if (this.animationOffset) delay += getElementAnimateDelay(this.animationOffset);

    const optionTo = Object.assign({}, this.options._to);
    optionTo.delay += delay;

    gsap.fromTo(this.DOM.el, this.options._from, optionTo);
  }
}

export default AnimationImage;
