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
  className = '',
  onClick,
  type = 'button',
  ...props
}) => {
  // Base classes - matching original .btn class
  const baseClasses = `
    flex items-center justify-center
    font-medium rounded-2xl transition-all duration-[400ms] no-underline
    focus:outline-none focus:ring-2 focus:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed
  `.trim();

  // Variant styles - matching actual website button styles
  const variantClasses = {
    // Primary: Black background, white text (btn--bg--black)
    primary: 'bg-[var(--onio-color-primary)] text-white hover:bg-white hover:text-[var(--onio-color-primary)] border-2 border-[var(--onio-color-primary)] transition-all duration-[400ms] ease-[cubic-bezier(0.33,1,0.68,1)]',
    // Secondary: Yellow background, black text
    secondary: 'bg-[var(--onio-color-secondary)] text-[var(--onio-color-primary)] hover:bg-[var(--onio-color-primary)] hover:text-[var(--onio-color-secondary)] border-2 border-[var(--onio-color-secondary)] transition-all duration-[400ms] ease-[cubic-bezier(0.33,1,0.68,1)]',
    // White: White bg, black text → Black bg, white text on hover
    white: 'bg-white text-[var(--onio-color-primary)] border-2 border-white hover:!bg-[var(--onio-color-primary)] hover:!text-white transition-all duration-[400ms] ease-[cubic-bezier(0.33,1,0.68,1)]',
    // Accent: Orange background
    accent: 'bg-[var(--onio-color-accent)] text-white hover:bg-white hover:text-[var(--onio-color-accent)] border-2 border-[var(--onio-color-accent)] transition-all duration-[400ms] ease-[cubic-bezier(0.33,1,0.68,1)]',
    // Outline: Transparent with border
    outline: 'bg-transparent border-2 border-[var(--onio-color-primary)] text-[var(--onio-color-primary)] hover:bg-[var(--onio-color-primary)] hover:text-white transition-all duration-[400ms] ease-[cubic-bezier(0.33,1,0.68,1)]',
    ghost: 'bg-transparent text-[var(--onio-color-primary)] hover:bg-[var(--onio-color-primary)]/10 transition-all duration-[400ms] ease-[cubic-bezier(0.33,1,0.68,1)]',
    danger: 'bg-[var(--onio-color-alert)] text-white hover:bg-white hover:text-[var(--onio-color-alert)] border-2 border-[var(--onio-color-alert)] transition-all duration-[400ms] ease-[cubic-bezier(0.33,1,0.68,1)]',
  };

  // Size styles - matching original .btn and .btn--large classes  
  // Original CSS breakdown:
  // Default (≥1400px): text-xl (20px), min-h-[4.4rem], px-[2.3rem], leading-[2.3rem]
  // ≤1399px: text-[1.75rem] (17.5px), min-h-[3.938rem], px-12
  // ≤1199px: text-base (16px)  
  // ≤768px: text-base (16px), leading-[1.8rem]
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm gap-2',
    md: 'px-6 py-3 text-base gap-2',
    lg: 'px-[2.3rem] md:px-8 xl:px-12 2xl:px-[3.6rem] min-h-[4.4rem] text-xl xl:text-[1.75rem] lg:text-base md:text-base leading-[2.3rem] xl:leading-[1.2] md:leading-[1.8rem] xl:min-h-[3.938rem] gap-3',
    xl: 'px-10 py-5 text-xl gap-3',
  };

  // Width styles
  const widthClasses = fullWidth ? 'w-full' : '';

  // Combine all classes
  const combinedClasses = [
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    widthClasses,
    className,
  ].filter(Boolean).join(' ');

  return (
    <button
      type={type}
      className={`${combinedClasses} js-link--btn`}
      disabled={disabled || loading}
      onClick={onClick}
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
      
      <span className="js-link__text">{children}</span>
      
      {rightIcon && (
        <span className="flex-shrink-0">{rightIcon}</span>
      )}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary', 'white', 'accent', 'outline', 'ghost', 'danger']),
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
  fullWidth: PropTypes.bool,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  className: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
};

export default Button;