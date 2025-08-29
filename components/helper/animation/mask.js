import { gsap } from "gsap";
import { getElementAnimateDelay, setElementAnimateOffsetResponsive } from "../helper";
import AnimationHelper from "./animation-helper";

class AnimationMask {
  constructor(el, options = {}) {
    this.DOM = { el };
    this.addAnimationType(options);
    this.pageEnter(this);
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

    switch (options.type || "") {
      default:
        this.options = {
          mask: {
            value: 100,
          },
          _from: {
            value: 100,
          },
          _to: {
            value: 0,
            ease: "power3.out",
            duration: 1.4,
            delay: options.delay || 0,
            onUpdate: () => {
              this.DOM.el.style.clipPath = `inset(0px ${this.options.mask.value}% 0px  0px)`;
              this.DOM.el.style.webkitClipPath = `inset(0px ${this.options.mask.value}% 0px  0px)`;
            },
            onComplete: () => {
              this.DOM.el.style.clipPath = "";
              this.DOM.el.style.webkitClipPath = "";
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

    this.DOM.el.style.clipPath = `inset(0px 99.99% 0px 0px)`;
    this.DOM.el.style.webkitClipPath = `inset(0px 99.99% 0px 0px)`;
  }

  animationIn(delay = 0) {
    if (this.animationHelper) this.animationHelper.removeHandleScrolling();
    if (this.animationOffset) delay += getElementAnimateDelay(this.animationOffset);

    const optionTo = Object.assign({}, this.options._to);
    optionTo.delay += delay;

    gsap.fromTo(this.options.mask, this.options._from, optionTo);
  }
}

export default AnimationMask;
