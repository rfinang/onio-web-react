import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Select = forwardRef(({
  variant = 'default',
  size = 'md',
  error = false,
  success = false,
  disabled = false,
  placeholder,
  label,
  helperText,
  errorText,
  options = [],
  leftIcon,
  className = '',
  children,
  ...props
}, ref) => {
  // Base styles - matching original contact form select styling
  const baseStyles = `
    w-full h-[var(--input-height)] border-0 border-b-2 xl:border-b-2 lg:border-b-[1.5px]
    bg-transparent px-[3px] py-0 text-[18px] font-medium font-[Inter] rounded-none
    focus:outline-none focus:ring-0 focus:shadow-none transition-colors
    duration-[400ms] ease-[cubic-bezier(0.33,1,0.68,1)]
    disabled:opacity-60 disabled:cursor-not-allowed
    appearance-none cursor-pointer
  `;

  // Size variants
  const sizeStyles = {
    sm: 'h-[40px] text-sm',
    md: 'h-[var(--input-height)] text-[18px]',
    lg: 'h-[var(--input-height)] text-[18px]'
  };

  // State variants - matching form styling with bottom borders
  const stateStyles = {
    default: 'border-b-muted text-primary focus:border-b-primary placeholder:text-muted',
    white: 'border-b-white text-white focus:border-b-white placeholder:text-white',
    error: 'border-b-alert text-alert focus:border-b-alert',
    success: 'border-b-green-500 text-green-600 focus:border-b-green-500'
  };

  // Determine current state
  let currentVariant = variant;
  if (error) currentVariant = 'error';
  if (success) currentVariant = 'success';

  // Build select classes
  const selectClasses = `
    ${baseStyles}
    ${sizeStyles[size]}
    ${stateStyles[currentVariant]}
    ${leftIcon ? 'pl-10' : ''}
    pr-10
    ${className}
  `.trim().replace(/\s+/g, ' ');

  // Helper text classes
  const helperClasses = `
    text-sm mt-1
    ${error ? 'text-alert' : success ? 'text-green-600' : 'text-muted'}
  `;

  // Chevron icon - matching original contact form
  const ChevronIcon = ({ isWhite = false }) => (
    <svg
      width="27"
      height="16"
      viewBox="0 0 27 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M26 1.14063L13.5 14.2813L0.999999 1.14063"
        stroke={isWhite ? 'white' : 'var(--onio-color-muted)'}
        strokeWidth="2"
      />
    </svg>
  );

  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-primary mb-2">
          {label}
          {props.required && <span className="text-alert ml-1">*</span>}
        </label>
      )}
      
      <div className="relative">
        {leftIcon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <span className="text-muted">{leftIcon}</span>
          </div>
        )}
        
        <select
          ref={ref}
          disabled={disabled}
          className={selectClasses}
          {...props}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          
          {/* Render options from array */}
          {options.map((option, index) => {
            if (typeof option === 'string') {
              return (
                <option key={index} value={option}>
                  {option}
                </option>
              );
            }
            
            return (
              <option 
                key={index} 
                value={option.value} 
                disabled={option.disabled}
              >
                {option.label}
              </option>
            );
          })}
          
          {/* Render children for custom options */}
          {children}
        </select>
        
        {/* Chevron icon */}
        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
          <ChevronIcon isWhite={currentVariant === 'white'} />
        </div>
      </div>
      
      {(helperText || errorText) && (
        <p className={helperClasses}>
          {error ? errorText : helperText}
        </p>
      )}
    </div>
  );
});

Select.displayName = 'Select';

Select.propTypes = {
  variant: PropTypes.oneOf(['default', 'white', 'error', 'success']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  error: PropTypes.bool,
  success: PropTypes.bool,
  disabled: PropTypes.bool,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  helperText: PropTypes.string,
  errorText: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.shape({
        value: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        disabled: PropTypes.bool
      })
    ])
  ),
  leftIcon: PropTypes.node,
  className: PropTypes.string,
  children: PropTypes.node,
  required: PropTypes.bool
};

export default Select;
