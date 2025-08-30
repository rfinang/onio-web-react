import gsap, { SteppedEase } from "gsap";
// GLOBAL VARS
let turnkeyScreen;
let scrollEndCallback;
let lastScrollTop = 0;
let stepByScreen = 20;
let lastStep = 0;
// SPRITE ACTIVE
let sprite_active, frame_w, steps, bg_position_total, global_tl;

function handleScrolling(scrollTop) {
  if (!document.querySelector(".js-sprite-img")) {
    return;
  }
  if (scrollTop < 0) return;
  scrollTop = Math.abs(scrollTop);
  update(scrollTop);
}
function getMatrixValue() {
  const transform = sprite_active.style.transform;

  if (!transform) {
    return 0;
  }
  const re = /translate3d\((?<x>.*?)px, (?<y>.*?)px, (?<z>.*?)px/;
  const results = re.exec(transform);

  if (!results) {
    const re = /translate\((?<x>.*?)px, (?<y>.*?)px/;
    const results = re.exec(transform);

    return results.groups.x;
  }
  return results.groups.x;
}
function update(st) {
  let ratio = window.innerWidth < 1440 ? 1 : parseFloat(1440 / window.innerWidth).toFixed(2);
  if (st > (22 * stepByScreen) / ratio) return;

  let steps = st === 0 ? 0 : Math.round(st / (stepByScreen / ratio));
  steps = steps > 22 ? 22 : steps;
  if (lastStep === steps) return;
  
  // Directly set the position without animation - remove any transitions
  let xPosition = steps * frame_w;
  sprite_active.style.transition = 'none';
  sprite_active.style.webkitTransition = 'none';
  sprite_active.style.transform = `translateX(-${xPosition}px)`;
  sprite_active.style.webkitTransform = `translateX(-${xPosition}px)`;
  
  lastStep = steps;
  lastScrollTop = st;
}

// PLAY
function playTimeline() {
  global_tl.play();
}

// REVERSE
function reverseTimeline() {
  // LOOP FOR REVERSE MODE
  if (global_tl.progress() == 0) {
    global_tl.progress(1);
  }
  global_tl.reverse();
}

// PAUSE
function pauseTimeline() {
  global_tl.pause();
}
function set_anim_active() {
  stepByScreen = window.innerWidth < 992 ? 10 : 20;
  if (!!global_tl) {
    global_tl.seek(0);
    global_tl.pause();
    global_tl.kill();
  }

  // SPRITE ACTIVE
  sprite_active = document.querySelector(".js-sprite-img");
  frame_w = sprite_active.parentNode.offsetWidth;

  steps = 22;

  // SPRITE VALUES
  bg_position_total = steps * frame_w;

  // TIMELINE
  global_tl = gsap.timeline({
    paused: true,
  });

  // Force stepped animation with no interpolation
  global_tl.set(sprite_active, { x: 0 });
  global_tl.to(sprite_active, {
    x: "-" + bg_position_total,
    duration: 1,
    ease: `steps(${steps})`,
  });
}
export default function init() {
  if (!document.querySelector(".js-sprite-img")) {
    return;
  }

  turnkeyScreen = window.innerWidth;
  set_anim_active();
  window.addEventListener("wheel", () => handleScrolling(window.scrollY));
  window.addEventListener("scroll", () => handleScrolling(window.scrollY));

  window.addEventListener("resize", () => {
    if (!document.querySelector(".js-sprite-img")) return;
    if (turnkeyScreen != window.innerWidth) {
      turnkeyScreen = window.innerWidth;
      setTimeout(() => {
        set_anim_active();
      }, 500);
    }
  });
}
