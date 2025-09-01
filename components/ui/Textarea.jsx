import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Textarea = forwardRef(({
  variant = 'default',
  size = 'md',
  error = false,
  success = false,
  disabled = false,
  placeholder,
  label,
  helperText,
  errorText,
  rows = 4,
  resize = 'vertical',
  className = '',
  ...props
}, ref) => {
  // Base styles
  const baseStyles = `
    w-full
    border
    rounded
    font-medium
    transition-all
    duration-200
    focus:outline-none
    focus:ring-2
    focus:ring-offset-0
    placeholder-muted
    disabled:opacity-60
    disabled:cursor-not-allowed
  `;

  // Size variants
  const sizeStyles = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-3 text-base',
    lg: 'px-5 py-4 text-lg'
  };

  // State variants
  const stateStyles = {
    default: 'border-muted bg-white text-primary focus:border-primary focus:ring-primary/20',
    error: 'border-red-500 bg-red-50 text-red-900 focus:border-red-500 focus:ring-red-500/20',
    success: 'border-green-500 bg-green-50 text-green-900 focus:border-green-500 focus:ring-green-500/20'
  };

  // Resize variants
  const resizeStyles = {
    none: 'resize-none',
    vertical: 'resize-y',
    horizontal: 'resize-x',
    both: 'resize'
  };

  // Determine current state
  let currentVariant = variant;
  if (error) currentVariant = 'error';
  if (success) currentVariant = 'success';

  // Build textarea classes
  const textareaClasses = `
    ${baseStyles}
    ${sizeStyles[size]}
    ${stateStyles[currentVariant]}
    ${resizeStyles[resize]}
    ${className}
  `.trim().replace(/\s+/g, ' ');

  // Helper text classes
  const helperClasses = `
    text-sm mt-1
    ${error ? 'text-red-600' : success ? 'text-green-600' : 'text-muted'}
  `;

  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-primary mb-2">
          {label}
          {props.required && <span className="text-red-500 ml-1">*</span>}
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
      
      {(helperText || errorText) && (
        <p className={helperClasses}>
          {error ? errorText : helperText}
        </p>
      )}
    </div>
  );
});

Textarea.displayName = 'Textarea';

Textarea.propTypes = {
  variant: PropTypes.oneOf(['default', 'error', 'success']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  error: PropTypes.bool,
  success: PropTypes.bool,
  disabled: PropTypes.bool,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  helperText: PropTypes.string,
  errorText: PropTypes.string,
  rows: PropTypes.number,
  resize: PropTypes.oneOf(['none', 'vertical', 'horizontal', 'both']),
  className: PropTypes.string,
  required: PropTypes.bool
};

export default Textarea;