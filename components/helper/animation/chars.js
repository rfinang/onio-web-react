// import Splitting from "splitting";
import { gsap } from "gsap";
import Splitting from "../splitting";
import { getElementAnimateDelay, setElementAnimateOffsetResponsive } from "../helper";
import AnimationHelper from "./animation-helper";
class AnimationChars {
  constructor(el, options = {}) {
    this.DOM = { el };
    this.init(options);
    this.pageEnter();
  }
  setOffset() {
    const { offsetResponsive, onscreenOffset } = setElementAnimateOffsetResponsive(this.DOM.el);
    this.animationOffset = { offsetResponsive, onscreenOffset };
  }
  pageEnter() {
    if (this.animationHelper && this.animationHelper.isInViewPointer()) {
      this.animationIn();
    }
  }

  addAnimationType(options) {
    this.DOM.el.classList.add("animation--chars");
    const { type, isHover } = options;
    switch (type || "") {
      case "2d":
        this.options = {
          _from: { y: "100%" },
          _to: {
            y: "0%",
            duration: 1,
            stagger: 0.02,
            delay: 0,
            ease: "power3.out",
          },
          _out: {
            y: "-100%",
            duration: 0.8,
            stagger: 0.01,
            ease: "power3.inOut",
          },
        };

        this.options._from = Object.assign({}, this.options._from, options._from);
        this.options._to = Object.assign({}, this.options._to, options._to);
        this.options._out = Object.assign({}, this.options._out, options._out);
        this.DOM.el.classList.add("animation--chars--2d");
        if (!isHover) {
          gsap.set(this.chars[0].chars, this.options._from);
        }
        break;
      default:
        this.options = {
          _from: { y: "100%", rotationX: 70 },
          _to: {
            y: "0%",
            rotationX: 0,
            duration: 1,
            stagger: 0.02,
            delay: 0,
            ease: "power3.out",
          },
          _out: {
            y: "-100%",
            rotationX: 0,
            duration: 0.8,
            stagger: 0.01,
            ease: "power3.inOut",
          },
        };

        this.options._from = Object.assign({}, this.options._from, options._from);
        this.options._to = Object.assign({}, this.options._to, options._to);
        this.options._out = Object.assign({}, this.options._out, options._out);
        this.DOM.el.classList.add("animation--chars--3d");
        gsap.set(this.chars[0].chars, this.options._from);
        break;
    }
    this.options.type = options.type;
  }

  init(options) {
    this.animationHelper = new AnimationHelper({
      el: this.DOM.el,
      animationIn: this.animationIn.bind(this),
      setOffset: this.setOffset.bind(this),
    });
    this.chars = Splitting({
      target: this.DOM.el,
      by: "chars",
    });

    this.addAnimationType(options);
    this.DOM.el.classList.remove("is-animation-loading");
  }

  animationIn(delay = 0) {
    const optionTo = Object.assign({}, this.options._to);
    if (this.animationHelper) this.animationHelper.removeHandleScrolling();
    if (this.animationOffset) delay += getElementAnimateDelay(this.animationOffset);

    optionTo.delay += delay;
    gsap.fromTo(this.chars[0].chars, this.options._from, optionTo);
  }
}

export default AnimationChars;
