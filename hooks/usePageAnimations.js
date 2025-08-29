import { useEffect, useRef } from 'react';
import PageAnimations from '../components/helper/animation/page-animations';

export const usePageAnimations = () => {
  const pageAnimationsRef = useRef(null);

  useEffect(() => {
    const initAnimations = () => {
      try {
        // Clean up previous instance
        if (pageAnimationsRef.current && typeof pageAnimationsRef.current.destroy === 'function') {
          pageAnimationsRef.current.destroy();
          pageAnimationsRef.current = null;
        }
        
        // Create new instance
        pageAnimationsRef.current = new PageAnimations();
        
        // Force trigger footer animations if page is scrolled to bottom
        setTimeout(() => {
          const footer = document.querySelector('.footer');
          if (footer) {
            const rect = footer.getBoundingClientRect();
            const isFooterVisible = rect.top < window.innerHeight && rect.bottom > 0;
            
            if (isFooterVisible) {
              // Force trigger all footer fade animations
              document.querySelectorAll('.footer .js-animation--fade').forEach((element) => {
                if (element.style.opacity === '0' || !element.style.opacity) {
                  // Manually trigger fade-in for visible footer elements
                  element.style.transition = 'opacity 0.8s ease';
                  element.style.opacity = '1';
                  element.classList.add('is-animation-completed');
                }
              });
            }
          }
        }, 200);
      } catch (error) {
        console.warn('PageAnimations initialization error:', error);
      }
    };

    // Safari detection and optimized timing
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    
    if (isSafari) {
      // Safari needs a small delay for better performance
      const timer = setTimeout(initAnimations, 50);
      return () => {
        clearTimeout(timer);
        if (pageAnimationsRef.current && typeof pageAnimationsRef.current.destroy === 'function') {
          try {
            pageAnimationsRef.current.destroy();
          } catch (error) {
            console.warn('PageAnimations cleanup error:', error);
          }
          pageAnimationsRef.current = null;
        }
      };
    } else {
      // Chrome and other browsers - initialize immediately
      initAnimations();
    }

    // Cleanup function
    return () => {
      if (pageAnimationsRef.current && typeof pageAnimationsRef.current.destroy === 'function') {
        try {
          pageAnimationsRef.current.destroy();
        } catch (error) {
          console.warn('PageAnimations cleanup error:', error);
        }
        pageAnimationsRef.current = null;
      }
    };
  }, []);

  return pageAnimationsRef.current;
};

export default usePageAnimations;