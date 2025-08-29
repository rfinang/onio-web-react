import { gsap } from "gsap";
import { getElementAnimateDelay, setElementAnimateOffsetResponsive } from "../helper";
import AnimationHelper from "./animation-helper";
import Splitting from "../splitting";

class AnimationLines {
  constructor(el, options = {}) {
    this.DOM = { el };
    this.DOM.el.classList.add("animation--lines");
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
    this.descSplitting = Splitting({
      target: this.DOM.el,
      by: "lines",
    });
    const { type } = options;
    switch (type || "") {
      case "mask_bottom":
        this.options = {
          _from: { y: "100%" },
          _to: {
            y: "0%",
            ease: "power3.out",
            duration: 0.8,
            delay: 0,
          },
        };
        this.DOM.el.classList.add("lines_mask--bottom");
        break;
      default:
        this.options = {
          _from: { y: "120%", opacity: 0 },
          _to: {
            y: "0%",
            opacity: 1,
            ease: "power3.out",
            duration: 0.8,
            delay: 0,
          },
        };

        this.options._from = Object.assign({}, this.options._from, options._from);
        this.options._to = Object.assign({}, this.options._to, options._to);
        this.options._out = Object.assign({}, this.options._out, options._out);
        break;
    }
    this.DOM.el.classList.remove("is-animation-loading");
    gsap.set(this.descSplitting[0].lines, this.options._from);
    this.options.type = options.type;
  }

  animationIn(delay = 0) {
    if (this.animationHelper) this.animationHelper.removeHandleScrolling();
    if (this.animationOffset) delay += getElementAnimateDelay(this.animationOffset);

    const optionTo = Object.assign({}, this.options._to);
    optionTo.delay += delay;

    this.descSplitting[0].lines.forEach((line) => {
      gsap.fromTo(line, this.options._from, optionTo);
      optionTo.delay += 0.05;
    });
  }
}

export default AnimationLines;
