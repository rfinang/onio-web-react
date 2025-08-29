import AnimationImage from "./image";
import AnimationFade from "./fade";
import AnimationChars from "./chars";
import AnimationLines from "./lines";
import { checkDeviceMobile } from "../helper";
import AnimationMask from "./mask";
import AnimationMaterial from "./material";
import AnimationScale from "./scale";
import ImageLazy from "../image-lazy/image-lazy";
import AnimationButton from "./button";

class PageAnimations {
  constructor() {
    this.init();
  }
  init() {
    new ImageLazy();
    if (checkDeviceMobile()) return;
    document.querySelectorAll(".js-link--btn:not(.is-render)").forEach((btn) => {
      btn.classList.add("is-render");
      new AnimationButton(btn);
    });
    document.querySelectorAll(".js-animation--image").forEach((item) => new AnimationImage(item));
    document.querySelectorAll(".js-animation--fade").forEach(
      (item) =>
        new AnimationFade(item, {
          type: "fade_tran",
        })
    );
    document
      .querySelectorAll(".js-animation--fade--none")
      .forEach((item) => new AnimationFade(item));
    document.querySelectorAll(".js-animation--chars").forEach((item) => new AnimationChars(item));
    document.querySelectorAll(".js-animation--lines").forEach((item) => new AnimationLines(item));
    document.querySelectorAll(".js-animation--chars--2d").forEach(
      (item) =>
        new AnimationChars(item, {
          type: "2d",
        })
    );
    document.querySelectorAll(".js-animation--mask").forEach((item) => new AnimationMask(item));
    document.querySelectorAll(".js-material").forEach((item) => new AnimationMaterial(item));
    document.querySelectorAll(".js-animation--scale").forEach((item) => new AnimationScale(item));
  }
}
export default PageAnimations;
