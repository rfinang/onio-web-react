import React from 'react';
import PropTypes from 'prop-types';

/**
 * Button Component - Pure Tailwind implementation
 * Replaces styled-components button with Tailwind classes
 */
const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false,
  loading = false,
  leftIcon,
  rightIcon,
  hasArrow = false,
  hasIcon = null,
  color = 'primary',
  shape = 'default',
  as = 'button',
  href,
  className = '',
  onClick,
  type = 'button',
  ...props
}) => {
  // Base classes - matching original .btn class
  const baseClasses = `
    flex items-center justify-center
    font-medium rounded-2xl transition-all duration-[400ms] no-underline
    focus:outline-none focus-visible:outline-none
    disabled:opacity-50 disabled:cursor-not-allowed
  `.trim();

  // Variant styles - using Tailwind color classes, matching original Onio buttons exactly
  const variantClasses = {
    // Primary: Black background (design token), white text → White background, black text on hover (btn--bg--black)
    primary: 'bg-primary text-white hover:!bg-white hover:!text-primary border-2 border-primary hover:!border-white transition-all duration-[400ms] ease-[cubic-bezier(0.33,1,0.68,1)]',
    // Secondary/Silver: Silver background (design token), white text - NO HOVER ANIMATION originally (btn--bg--silver/grey)
    secondary: 'bg-muted text-white border-2 border-muted',
    // White: White bg, black text → Black bg, white text on hover (btn--bg--white) - matches original exactly
    white: 'bg-white text-primary border-2 border-white hover:!bg-primary hover:!text-white hover:!border-primary transition-all duration-[400ms] ease-[cubic-bezier(0.33,1,0.68,1)]',
    // Accent: Orange background
    accent: 'bg-accent text-white hover:!bg-white hover:!text-accent border-2 border-accent transition-all duration-[400ms] ease-[cubic-bezier(0.33,1,0.68,1)]',
    // Outline: Transparent with primary border (btn--black)
    outline: 'bg-transparent border-2 border-primary text-primary hover:!bg-primary hover:!text-white transition-all duration-[400ms] ease-[cubic-bezier(0.33,1,0.68,1)]',
    // Outline White: Transparent with white border (btn--border--white)  
    'outline-white': 'bg-transparent border-2 border-white text-white hover:!bg-white hover:!text-primary transition-all duration-[400ms] ease-[cubic-bezier(0.33,1,0.68,1)]',
    ghost: 'bg-transparent text-primary hover:!bg-primary/10 transition-all duration-[400ms] ease-[cubic-bezier(0.33,1,0.68,1)]',
    danger: 'bg-alert text-white hover:!bg-white hover:!text-alert border-2 border-alert transition-all duration-[400ms] ease-[cubic-bezier(0.33,1,0.68,1)]',
    // PageLink styles - matching original pageLink pattern
    link: 'bg-transparent border-none p-0 gap-2 transition-all duration-[400ms] ease-[cubic-bezier(0.33,1,0.68,1)]',
    // IconLink styles - icon only buttons
    icon: 'bg-transparent border-none p-2 transition-all duration-[400ms] ease-[cubic-bezier(0.33,1,0.68,1)]',
  };

  // Size styles - matching original .btn and .btn--large classes  
  // Original CSS breakdown:
  // Default (≥1400px): text-xl (20px), min-h-[4.4rem], px-[2.3rem], leading-[2.3rem]
  // ≤1399px: text-[1.75rem] (17.5px), min-h-[3.938rem], px-12
  // ≤1199px: text-base (16px)  
  // ≤768px: text-base (16px), leading-[1.8rem]
  const sizeClasses = {
    small: 'px-4 py-2 text-sm gap-2',
    sm: 'px-4 py-2 text-sm gap-2',
    md: 'px-[2.3rem] md:px-8 xl:px-12 min-h-[4.4rem] text-xl xl:text-[1.75rem] lg:text-base md:text-base leading-[2.3rem] xl:leading-[1.2] md:leading-[1.8rem] xl:min-h-[3.938rem] gap-2',
    large: 'px-[2.3rem] md:px-8 xl:px-12 2xl:px-[3.6rem] min-h-[4.4rem] text-xl xl:text-[1.75rem] lg:text-base md:text-base leading-[2.3rem] xl:leading-[1.2] md:leading-[1.8rem] xl:min-h-[3.938rem] gap-3',
    lg: 'px-[2.3rem] md:px-8 xl:px-12 2xl:px-[3.6rem] min-h-[4.4rem] text-xl xl:text-[1.75rem] lg:text-base md:text-base leading-[2.3rem] xl:leading-[1.2] md:leading-[1.8rem] xl:min-h-[3.938rem] gap-3',
    xl: 'px-10 py-5 text-xl gap-3',
  };

  // Color classes for link and icon variants
  const colorClasses = {
    primary: 'text-primary',
    black: 'text-primary', 
    white: 'text-white',
    accent: 'text-accent',
    alert: 'text-alert',
    muted: 'text-muted',
    red: 'text-accent',
    silver: 'text-muted',
  };

  // Width styles
  const widthClasses = fullWidth ? 'w-full' : '';
  
  // Apply color for link and icon variants
  const currentColor = (variant === 'link' || variant === 'icon') ? colorClasses[color] || colorClasses.primary : '';

  // Arrow icon component
  const ArrowIcon = ({ color = 'black', size = 'large' }) => {
    const strokeColor = color === 'white' ? 'currentColor' : 'currentColor';
    const dimensions = size === 'large' ? { width: 31, height: 27 } : { width: 16, height: 28 };
    
    return (
      <svg
        width={dimensions.width}
        height={dimensions.height}
        viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="pageLink__icon"
      >
        <path
          d={size === 'large' ? "M15.8594 1L29 13.5L15.8594 26" : "M1.57715 1.61572L13.9615 14.0001L1.57715 26.3844"}
          stroke={strokeColor}
          strokeWidth="2"
        />
        {size === 'large' && (
          <path d="M0 13.5898L28.7829 13.5898" stroke={strokeColor} strokeWidth="2" />
        )}
      </svg>
    );
  };

  // Icon component for iconLink patterns
  const IconComponent = ({ type = 'arrow', color = 'black', size = 'large', shape = 'oval' }) => {
    const strokeColor = 'currentColor';
    
    if (type === 'arrow') {
      return (
        <span className={`iconLink iconLink--arrow iconLink--arrow--${shape} iconLink--arrow--${size} iconLink--arrow--${color}`}>
          <svg
            width="16"
            height="28"
            viewBox="0 0 16 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.57715 1.61572L13.9615 14.0001L1.57715 26.3844"
              stroke={strokeColor}
              strokeWidth="2"
            />
          </svg>
        </span>
      );
    }
    
    if (type === 'download') {
      return (
        <span className={`iconLink iconLink--download iconLink--download--${size}`}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 15L7 10H17L12 15Z" fill="currentColor"/>
            <path d="M12 3V13" stroke="currentColor" strokeWidth="2"/>
            <path d="M3 19H21" stroke="currentColor" strokeWidth="2"/>
          </svg>
        </span>
      );
    }
    
    return null;
  };

  // Combine all classes
  const combinedClasses = [
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    widthClasses,
    currentColor,
    className,
  ].filter(Boolean).join(' ');

  // Determine element type
  const Element = as === 'button' ? 'button' : as === 'a' ? 'a' : as;
  
  // Handle icon-only buttons
  if (variant === 'icon' && hasIcon) {
    return (
      <Element
        className={`${combinedClasses} onio-button`}
        disabled={disabled}
        onClick={onClick}
        href={href}
        {...props}
      >
        <IconComponent 
          type={hasIcon} 
          color={color} 
          size={size} 
          shape={shape}
        />
      </Element>
    );
  }

  return (
    <Element
      type={as === 'button' ? type : undefined}
      className={`${combinedClasses} onio-button js-link--btn`}
      disabled={disabled || loading}
      onClick={onClick}
      href={href}
      {...props}
    >
      {loading && (
        <svg
          className="animate-spin -ml-1 mr-2 h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      )}
      
      {leftIcon && !loading && (
        <span className="flex-shrink-0">{leftIcon}</span>
      )}
      
      {variant === 'link' && children && (
        <span className="js-link__text">{children}</span>
      )}
      
      {variant !== 'link' && (
        <span className="js-link__text">{children}</span>
      )}
      
      {hasArrow && variant === 'link' && (
        <ArrowIcon color={color} size={size} />
      )}
      
      {rightIcon && (
        <span className="flex-shrink-0">{rightIcon}</span>
      )}
    </Element>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.oneOf(['primary', 'secondary', 'white', 'accent', 'outline', 'outline-white', 'ghost', 'danger', 'link', 'icon']),
  size: PropTypes.oneOf(['small', 'sm', 'md', 'large', 'lg', 'xl']),
  fullWidth: PropTypes.bool,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  hasArrow: PropTypes.bool,
  hasIcon: PropTypes.oneOf(['arrow', 'download']),
  color: PropTypes.oneOf(['primary', 'black', 'white', 'accent', 'alert', 'muted', 'red', 'silver']),
  shape: PropTypes.oneOf(['default', 'oval', 'round']),
  as: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.elementType,
    PropTypes.oneOf(['button', 'a', 'Link'])
  ]),
  href: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
};

export default Button;
