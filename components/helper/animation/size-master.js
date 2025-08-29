import { gsap } from "gsap";

class SizeMatters {
  constructor() {
    this.DOM = { main: document.querySelector(".js-sizeMatter") };
    if (!this.DOM.main) return;
    this.DOM.VLines = this.DOM.main.querySelectorAll(".sizeMatters__gird__lines--v .border__line");
    this.DOM.HLines = this.DOM.main.querySelectorAll(".sizeMatters__gird__lines--h .border__line");

    this.DOM.VSizeLabelChip = this.DOM.main.querySelector(".js-sizeMatters__image__size--w");
    this.DOM.HsizeLabelChip = this.DOM.main.querySelector(".js-sizeMatters__image__size--h");

    this.DOM.chip = this.DOM.main.querySelector(".js-sizeMatters__image__thumbnail");
    this.DOM.chipShadow = this.DOM.main.querySelector(".js-sizeMatters__image__thumbnail__shadow");

    this.DOM.heading = this.DOM.main.querySelectorAll(".js-sizeMatter_heading");
    this.DOM.headingItems = this.DOM.main.querySelectorAll(".js-sizeMatter_heading__item");
    this.DOM.chipTrigger = this.DOM.main.querySelector(
      ".js-sizeMatters__image__thumbnail__trigger"
    );

    this.DOM.textSizes = this.DOM.main.querySelectorAll(".js-sizeMatters__image__size span");

    this.status = {
      headingIn: false,
      chipIn: false,
    };

    this.readyChipIn = false;
    this.isVisivleChip = false;
    this.init();
    this.bindEvent();
  }

  init() {
    gsap.set(this.DOM.chip, { y: "100%", scale: 1.2 });
    gsap.set(this.DOM.HLines, { width: "0%" });
    gsap.set(this.DOM.VLines, { height: "0%" });

    gsap.set(this.DOM.VSizeLabelChip, { width: "0%" });
    gsap.set(this.DOM.HsizeLabelChip, { height: "0%" });

    gsap.set(this.DOM.headingItems[0], { x: "-100%" });
    gsap.set(this.DOM.headingItems[1], { x: "100%" });

    gsap.set(this.DOM.textSizes, { opacity: 0 });

    this.ob = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        switch (entries[0].target) {
          case this.DOM.headingItems[1]:
            if (!this.status.headingIn) {
              this.status.headingIn = true;
              this.headingAnimationIn();
            }
            break;

          case this.DOM.chipTrigger:
            this.isVisivleChip = true;
            if (!this.status.chipIn && this.readyChipIn) {
              this.status.chipIn = true;
              this.chipAnimationIn();
            }
            break;
        }
      }
    });
  }

  headingAnimationIn() {
    gsap.to(this.DOM.headingItems, { x: "0%", duration: 1, ease: "power3.intOut" });
    setTimeout(() => {
      this.readyChipIn = true;
      if (this.isVisivleChip) {
        this.status.chipIn = true;
        this.chipAnimationIn();
      }
    }, 1100);
  }

  chipAnimationIn() {
    gsap.to(this.DOM.HLines, { width: "100%", duration: 1.4, ease: "power3.intOut", stagger: 0.1 });
    gsap.to(this.DOM.VLines, {
      height: "100%",
      duration: 1.4,
      ease: "power3.intOut",
      stagger: 0.1,
    });

    gsap.to(this.DOM.heading, { scale: 0.1, y: "20%", duration: 1.2, ease: "power3.inOut" });
    gsap.to(this.DOM.chip, { scale: 1, y: "0%", duration: 1.2, ease: "power3.out" });

    gsap.to(this.DOM.chipShadow, { opacity: 0, duration: 0.8, ease: "power3.out", delay: 0.8 });
    gsap.to(this.DOM.VSizeLabelChip, {
      width: "100%",
      duration: 1.4,
      ease: "power3.inOut",
      delay: 0.8,
    });
    gsap.to(this.DOM.HsizeLabelChip, {
      height: "100%",
      duration: 1.4,
      ease: "power3.inOut",
      delay: 0.8,
    });
    gsap.to(this.DOM.textSizes, { opacity: 1, direction: 0.8, ease: "power3.inOut", delay: 1.5 });
  }

  pageEnter() {
    setTimeout(() => {
      this.ob.observe(this.DOM.chipTrigger);
    }, 1100);
    this.ob.observe(this.DOM.headingItems[1]);
  }

  bindEvent() {
    this.pageEnter();
  }
}

export default SizeMatters;
