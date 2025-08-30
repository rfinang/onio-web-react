import gsap, { SteppedEase } from "gsap";
// GLOBAL VARS
let turnkeyScreen;
let scrollEndCallback;
let lastScrollTop = 0;
let stepByScreen = 20;
let lastStep = 0;
// SPRITE ACTIVE
let sprite_active, frame_w, totalSteps, steps, bg_position_total, global_tl;

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
  if (st > (totalSteps * stepByScreen) / ratio) return;

  let steps = st === 0 ? 0 : Math.round(st / (stepByScreen / ratio));
  steps = steps > totalSteps ? totalSteps : steps;
  if (lastStep === steps) return;
  
  // Directly set the position without animation - remove any transitions
  let xPosition = steps * frame_w;
  
  // Debug logging
  if (steps !== lastStep) {
    console.log('ESL Update - step:', steps, 'xPosition:', xPosition, 'frame_w:', frame_w);
  }
  
  // Kill any GSAP animations on this element immediately
  if (typeof gsap !== 'undefined') {
    gsap.killTweensOf(sprite_active);
  }
  
  // Try using margin-left instead of transform to avoid any smoothing
  sprite_active.style.cssText = `
    margin-left: -${xPosition}px !important;
    transform: none !important;
    -webkit-transform: none !important;
    transition: none !important;
    -webkit-transition: none !important;
    -moz-transition: none !important;
    -o-transition: none !important;
    will-change: auto !important;
  `;
  
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
  stepByScreen = window.innerWidth < 992 ? 5 : 10;
  if (!!global_tl) {
    global_tl.seek(0);
    global_tl.pause();
    global_tl.kill();
  }

  // SPRITE ACTIVE
  sprite_active = document.querySelector(".js-sprite-img");
  frame_w = sprite_active.parentNode.offsetWidth;
  
  // Debug: log the frame width and ensure no CSS transitions
  console.log('ESL Sprite - frame_w:', frame_w, 'totalSteps:', totalSteps);
  if (sprite_active) {
    // Kill any GSAP tweens on this element
    gsap.killTweensOf(sprite_active);
    // Clear any inline GSAP transforms
    gsap.set(sprite_active, { clearProps: "all" });
    
    // Force remove any transitions that might exist
    sprite_active.style.transition = 'none !important';
    sprite_active.style.webkitTransition = 'none !important';
    // Check computed style
    const computedStyle = window.getComputedStyle(sprite_active);
    console.log('ESL Sprite computed transition:', computedStyle.transition);
  }

  steps = totalSteps;

  // SPRITE VALUES
  bg_position_total = steps * frame_w;

  // Don't create GSAP timeline at all - we're not using it
  global_tl = null;
}
export default function init(total = 28) {
  totalSteps = total;
  if (!document.querySelector(".js-sprite-img")) {
    return;
  }

  // Inject CSS to force no transitions and disable smooth scrolling
  const style = document.createElement('style');
  style.textContent = `
    html, :root {
      scroll-behavior: auto !important;
    }
    * {
      scroll-behavior: auto !important;
    }
    .js-sprite-img {
      transition: none !important;
      -webkit-transition: none !important;
      -moz-transition: none !important;
      -o-transition: none !important;
      transition-property: none !important;
      animation: none !important;
      scroll-behavior: auto !important;
    }
    .js-sprite-img * {
      transition: none !important;
      animation: none !important;
    }
  `;
  document.head.appendChild(style);

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
