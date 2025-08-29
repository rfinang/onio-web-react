import isMobile from "ismobilejs";

export const isScreenTablet = () => {
  return window.innerWidth < 1024;
};
const isFacebookApp = () => {
  const ua = navigator.userAgent || navigator.vendor || window.opera;
  return ua.indexOf("FBAN") > -1 || ua.indexOf("FBAV") > -1;
};

export const checkDeviceMobile = () => {
  const iPad = () => {
    return !!(
      navigator.userAgent.match(/Mac/) &&
      navigator.maxTouchPoints &&
      navigator.maxTouchPoints > 2
    );
  };

  return isMobile(navigator.userAgent).any || iPad() || isFacebookApp();
};
const getElementAnimationScreenOffset = (onscreenOffset) => {
  return onscreenOffset || 0;
};

const getElementAnimateOffset = (offsetResponsive) => {
  const winSize = { width: window.innerWidth, height: window.innerHeight };
  if (offsetResponsive && offsetResponsive.length) {
    for (let i = offsetResponsive.length - 1; i >= 0; i--) {
      if (offsetResponsive[i].screen < winSize.width) {
        return parseFloat(offsetResponsive[i].offset);
      }
    }
  }
  return 0;
};
export const getElementAnimateDelay = ({ onscreenOffset, offsetResponsive }) => {
  let scrollingType = document.documentElement.scrollTop > 0 ? "contentScrolling" : "contentLoaded";

  return parseFloat(
    scrollingType === "contentLoaded"
      ? getElementAnimationScreenOffset(onscreenOffset)
      : getElementAnimateOffset(offsetResponsive)
  );
};
export const setElementAnimateOffsetResponsive = (DOM) => {
  const winSize = { width: window.innerWidth, height: window.innerHeight };
  const offsetResponsive = [];
  const onscreenOffset =
    DOM.getAttribute("data-screen-offset") && winSize.height > DOM.getBoundingClientRect().top
      ? DOM.getAttribute("data-screen-offset")
      : 0;

  if (DOM.getAttribute("data-offset")) {
    offsetResponsive.push({ screen: 0, offset: DOM.getAttribute("data-offset") });
  } else {
    offsetResponsive.push({ screen: 0, offset: 0 });
  }

  return {
    offsetResponsive,
    onscreenOffset,
  };
};
