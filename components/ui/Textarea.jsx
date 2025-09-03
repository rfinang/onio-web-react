import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Textarea = forwardRef(({
  variant = 'default',
  error = false,
  disabled = false,
  placeholder,
  label,
  errorText,
  required = false,
  rows = 4,
  className = '',
  ...props
}, ref) => {
  // Onio textarea styling - matches original design exactly
  const baseStyles = `
    w-full
    min-h-[24.4rem]
    border-2
    xl:border-2
    lg:border-[1.5px]
    bg-transparent
    p-[1.3rem]
    text-[18px]
    font-medium
    font-[Inter]
    rounded-none
    resize-y
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

  // Build textarea classes
  const textareaClasses = `
    ${baseStyles}
    ${variantStyles[variant]}
    ${errorStyles}
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
      
      <textarea
        ref={ref}
        disabled={disabled}
        placeholder={placeholder}
        rows={rows}
        className={textareaClasses}
        {...props}
      />
      
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

Textarea.displayName = 'Textarea';

Textarea.propTypes = {
  variant: PropTypes.oneOf(['default', 'white', 'silver']),
  error: PropTypes.bool,
  disabled: PropTypes.bool,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  errorText: PropTypes.string,
  className: PropTypes.string,
  required: PropTypes.bool,
  rows: PropTypes.number
};

export default Textarea;