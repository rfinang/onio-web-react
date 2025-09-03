import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Input = forwardRef(({
  type = 'text',
  variant = 'default',
  error = false,
  disabled = false,
  placeholder,
  label,
  errorText,
  required = false,
  className = '',
  ...props
}, ref) => {
  // Onio form styling - matches original design exactly
  const baseStyles = `
    w-full
    h-[var(--input-height)]
    border-0
    border-b-2
    xl:border-b-2
    lg:border-b-[1.5px]
    bg-transparent
    px-2
    py-0
    text-[18px]
    font-medium
    font-[Inter]
    rounded-none
    focus:outline-none
    focus:ring-0
    focus:shadow-none
    transition-colors
    duration-[400ms]
    ease-[cubic-bezier(0.33,1,0.68,1)]
  `;

  // Variant styles matching original Onio forms
  const variantStyles = {
    default: 'border-primary text-primary placeholder:text-primary placeholder:opacity-100',
    white: 'border-white !text-white placeholder:!text-white placeholder:opacity-100',
    silver: 'border-primary text-primary placeholder:text-primary placeholder:opacity-100'
  };

  // Error styles
  const errorStyles = error ? 'border-alert' : '';

  // Build input classes
  const inputClasses = `
    ${baseStyles}
    ${variantStyles[variant]}
    ${errorStyles}
    ${required ? 'pr-[34px]' : ''}
    ${className}
  `.trim().replace(/\s+/g, ' ');

  // Label styles matching original
  const labelClasses = `
    block
    mb-2
    text-sm
    font-medium
    ${variant === 'white' ? 'text-white' : 'text-primary'}
  `;

  return (
    <div className="form-group mb-[3.5rem] relative">
      {label && (
        <label className={labelClasses}>
          {label}
        </label>
      )}
      
      <input
        ref={ref}
        type={type}
        disabled={disabled}
        placeholder={placeholder}
        className={inputClasses}
        {...props}
      />
      
      {/* Required indicator dot - matches original styling */}
      {required && (
        <div className={`
          form-group__required
          absolute
          top-1/2
          right-3
          -mt-[5px]
          w-0
          h-0
          border-[5px]
          ${variant === 'white' ? 'border-white bg-white' : 'border-primary bg-primary'}
          rounded-full
          transition-opacity
          duration-300
          ${error ? 'opacity-100' : 'opacity-0'}
        `}></div>
      )}
      
      {/* Error message - matches original positioning */}
      {error && errorText && (
        <div className="
          form-group__alert
          absolute
          w-full
          mt-[5px]
          text-right
          text-muted
          leading-[1.142857]
          xl:text-[14px]
          lg:text-[12px]
        ">
          {errorText}
        </div>
      )}
    </div>
  );
});

Input.displayName = 'Input';

Input.propTypes = {
  type: PropTypes.oneOf(['text', 'email', 'password', 'number', 'tel', 'url', 'search']),
  variant: PropTypes.oneOf(['default', 'white', 'silver']),
  error: PropTypes.bool,
  disabled: PropTypes.bool,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  errorText: PropTypes.string,
  className: PropTypes.string,
  required: PropTypes.bool
};

export default Input;