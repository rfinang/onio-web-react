import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Checkbox = forwardRef(({
  size = 'md',
  error = false,
  disabled = false,
  label,
  helperText,
  errorText,
  className = '',
  ...props
}, ref) => {
  // Size variants
  const sizeStyles = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6'
  };

  // Base checkbox styles
  const checkboxStyles = `
    ${sizeStyles[size]}
    text-primary
    bg-white
    border-2
    border-muted
    rounded
    focus:ring-2
    focus:ring-primary/20
    focus:ring-offset-0
    transition-all
    duration-200
    disabled:opacity-60
    disabled:cursor-not-allowed
    cursor-pointer
    ${error ? 'border-red-500 focus:ring-red-500/20' : ''}
  `;

  // Label text size
  const labelTextSize = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg'
  };

  // Helper text classes
  const helperClasses = `
    text-sm mt-1 ml-7
    ${error ? 'text-red-600' : 'text-muted'}
  `;

  return (
    <div className={`flex flex-col ${className}`}>
      <div className="flex items-start">
        <input
          ref={ref}
          type="checkbox"
          disabled={disabled}
          className={checkboxStyles}
          {...props}
        />
        
        {label && (
          <label className={`ml-2 ${labelTextSize[size]} ${disabled ? 'text-muted' : 'text-primary'} cursor-pointer`}>
            {label}
            {props.required && <span className="text-red-500 ml-1">*</span>}
          </label>
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

Checkbox.displayName = 'Checkbox';

Checkbox.propTypes = {
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  error: PropTypes.bool,
  disabled: PropTypes.bool,
  label: PropTypes.string,
  helperText: PropTypes.string,
  errorText: PropTypes.string,
  className: PropTypes.string,
  required: PropTypes.bool
};

export default Checkbox;