class AnimationHelper {
  animationOb;
  OBServer;
  timeOutAnimationIn;
  isVisible;
  isHandleScrolling;

  constructor({ setOffset, animationIn, el }) {
    this.isHandleScrolling = false;
    this.animationOb = {
      setOffset,
      animationIn,
      el,
    };
    this.handleScrolling();
  }

  handleScrolling() {
    const { el, setOffset, animationIn } = this.animationOb;
    setOffset();
    this.OBServer = new IntersectionObserver((entries) => {
      this.isVisible = entries[0].isIntersecting;
      if (this.isVisible) {
        if (this.timeOutAnimationIn) clearTimeout(this.timeOutAnimationIn);
        this.timeOutAnimationIn = setTimeout(animationIn, 300);
      } else {
        clearTimeout(this.timeOutAnimationIn);
      }
    }, {
      rootMargin: '500px'
    });
    this.OBServer.observe(el);
  }

  removeHandleScrolling() {
    if (!this.OBServer) return;
    const { el } = this.animationOb;
    this.OBServer.unobserve(el);
    this.OBServer.disconnect();
    this.OBServer = null;
  }

  isInViewPointer() {
    return this.isVisible;
  }
}

export default AnimationHelper;
