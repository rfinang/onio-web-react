import { gsap } from "gsap";
import { getElementAnimateDelay, setElementAnimateOffsetResponsive } from "../helper";
import AnimationHelper from "./animation-helper";

class AnimationScale {
  constructor(el, options = {}) {
    this.DOM = { el };
    this.addAnimationType(options);
    this.pageEnter();
  }

  setOffset() {
    const { offsetResponsive, onscreenOffset } = setElementAnimateOffsetResponsive(this.DOM.el);
    this.animationOffset = { offsetResponsive, onscreenOffset };
  }

  pageEnter() {
    if (this.animationHelper && this.animationHelper.isInViewPointer()) {
      this.setOffset();
      this.animationIn();
    }
  }

  addAnimationType(options) {
    this.animationHelper = new AnimationHelper({
      el: this.DOM.el,
      animationIn: this.animationIn.bind(this),
      setOffset: this.setOffset.bind(this),
    });
    this.DOM.el.classList.add("animation--fade");
    switch (options.type || "") {
      default:
        this.options = {
          _from: {
            opacity: 0,
            scale: 0,
          },
          _to: {
            opacity: 1,
            scale: 1,
            ease: "power3.out",
            duration: 0.8,
            delay: options.delay || 0,
            clearProps: "all",
            onComplete: () => {
              this.DOM.el.classList.add("is-animation-completed");
            },
          },
          _out: {
            opacity: 0,
            ease: "power3.inOut",
            duration: 0.6,
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

    gsap.killTweensOf(this.DOM.el);
    gsap.fromTo(this.DOM.el, this.options._from, optionTo);
  }

  animationOut(delay = 0) {
    gsap.killTweensOf(this.DOM.el);
    gsap.to(this.DOM.el, { opacity: 0, delay, duration: 0.5, ease: "power3.out" });
  }

  animationReset() {
    gsap.killTweensOf(this.DOM.el);
    gsap.set(this.DOM.el, this.options._from);
  }
}

export default AnimationScale;
