import { gsap } from "gsap";

class AnimationButton {
  constructor(el) {
    this.DOM = { el };

    this.DOM.text = this.DOM.el.querySelector(".js-link__text");
    
    // Safety check: if no text element found, skip initialization
    if (!this.DOM.text) {
      console.warn('AnimationButton: .js-link__text element not found in button', el);
      return;
    }
    
    this.DOM.domText = document.createElement("span");
    this.DOM.domText.innerHTML = this.DOM.text.innerHTML;
    this.DOM.domText.classList.add("js-link__text__element");
    this.DOM.domTextClone = this.DOM.domText.cloneNode(true);
    this.DOM.domTextClone.classList.add("is-clone");

    this.DOM.text.innerHTML = "";
    this.DOM.text.appendChild(this.DOM.domText);
    this.DOM.text.appendChild(this.DOM.domTextClone);
    gsap.set(this.DOM.domTextClone, { y: "100%" });

    this.init();
  }

  init() {
    // Skip if no text element was found
    if (!this.DOM.text) return;
    this.bindEvent();
  }

  mouseEnter() {
    // Skip if no text element was found
    if (!this.DOM.text) return;
    
    gsap.fromTo(
      this.DOM.domText,
      { y: "0%" },
      {
        y: "-100%",
        duration: 0.4,
        ease: "power3.out",
      }
    );

    gsap.fromTo(
      this.DOM.domTextClone,
      { y: "100%" },
      {
        y: "0",
        duration: 0.4,
        ease: "power3.out",
        delay: 0.015,
      }
    );
  }

  mouseClick(event) {
    const spanBg = document.createElement("span");
    const rectBtn = this.DOM.el.getBoundingClientRect();
    const disScale = Math.max(
      Math.abs(rectBtn.right - event.clientX),
      Math.abs(rectBtn.left - event.clientX)
    );

    this.DOM.el.append(spanBg);
    spanBg.classList.add("js-link__active-bg");
    gsap.set(spanBg, {
      x: event.clientX - rectBtn.left,
      y: event.clientY - rectBtn.top,
    });
    gsap.to(spanBg, {
      keyframes: [
        {
          scale: disScale * 2.2,
          duration: 0.6,
          ease: "power3.out",
        },
        {
          opacity: 0,
          ease: "power3.out",
          duration: 1.6,
          delay: -0.6,
          onComplete: () => spanBg.remove(),
        },
      ],
    });
  }

  bindEvent() {
    // Skip if no text element was found
    if (!this.DOM.text) return;
    
    this.DOM.el.addEventListener("mouseenter", this.mouseEnter.bind(this));
    this.DOM.el.addEventListener("click", this.mouseClick.bind(this));
  }
}

export default AnimationButton;
