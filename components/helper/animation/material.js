import { gsap } from "gsap";
import { getElementAnimateDelay, setElementAnimateOffsetResponsive } from "../helper";
import AnimationHelper from "./animation-helper";

class AnimationMaterial {
  constructor(el, options = {}) {
    this.DOM = { el };

    this.DOM.card = this.DOM.el.querySelector(".js-material__card");
    this.DOM.line = this.DOM.el.querySelector(".js-material__line__el");
    this.DOM.number = this.DOM.el.querySelector(".js-material__number");

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

  addAnimationType() {
    this.animationHelper = new AnimationHelper({
      el: this.DOM.el,
      animationIn: this.animationIn.bind(this),
      setOffset: this.setOffset.bind(this),
    });

    this.timeLine = gsap.timeline({ paused: true, repeat: 0 });
    this.timeLine.fromTo(
      this.DOM.card,
      { opacity: 0 },
      { opacity: 1, ease: "power3.out", duration: 0.5 }
    );
    this.timeLine.fromTo(
      this.DOM.line,
      { width: "0%" },
      { width: "100%", ease: "power3.inOut", duration: 0.6 }
    );
    this.timeLine.fromTo(
      this.DOM.number,
      { scale: 0, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.5,
        ease: "power3.inOut",
      }
    );
  }

  animationIn(delay = 0) {
    if (this.animationHelper) this.animationHelper.removeHandleScrolling();
    if (this.animationOffset) delay += getElementAnimateDelay(this.animationOffset);

    this.timeLine.delay = delay;
    this.timeLine.play();
  }
}

export default AnimationMaterial;
