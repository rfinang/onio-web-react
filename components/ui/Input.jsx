import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Input = forwardRef(({
  type = 'text',
  variant = 'default',
  size = 'md',
  error = false,
  success = false,
  disabled = false,
  placeholder,
  label,
  helperText,
  errorText,
  leftIcon,
  rightIcon,
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

  // Determine current state
  let currentVariant = variant;
  if (error) currentVariant = 'error';
  if (success) currentVariant = 'success';

  // Build input classes
  const inputClasses = `
    ${baseStyles}
    ${sizeStyles[size]}
    ${stateStyles[currentVariant]}
    ${leftIcon ? 'pl-10' : ''}
    ${rightIcon ? 'pr-10' : ''}
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
      
      <div className="relative">
        {leftIcon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <span className="text-muted">{leftIcon}</span>
          </div>
        )}
        
        <input
          ref={ref}
          type={type}
          disabled={disabled}
          placeholder={placeholder}
          className={inputClasses}
          {...props}
        />
        
        {rightIcon && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <span className="text-muted">{rightIcon}</span>
          </div>
        )}
      </div>
      
      {(helperText || errorText) && (
        <p className={helperClasses}>
          {error ? errorText : helperText}
        </p>
      )}
    </div>
  );
});

Input.displayName = 'Input';

Input.propTypes = {
  type: PropTypes.oneOf(['text', 'email', 'password', 'number', 'tel', 'url', 'search']),
  variant: PropTypes.oneOf(['default', 'error', 'success']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  error: PropTypes.bool,
  success: PropTypes.bool,
  disabled: PropTypes.bool,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  helperText: PropTypes.string,
  errorText: PropTypes.string,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  className: PropTypes.string,
  required: PropTypes.bool
};

export default Input;