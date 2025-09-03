import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Checkbox = forwardRef(({
  variant = 'default',
  error = false,
  disabled = false,
  label,
  helperText,
  errorText,
  className = '',
  ...props
}, ref) => {
  // Container styles based on original form-check
  const containerStyles = 'form-check mb-6 pl-0';

  // Label styles matching original form-check__label
  const labelStyles = `
    flex items-start cursor-pointer relative
    ${disabled ? 'opacity-60 cursor-not-allowed' : ''}
    ${variant === 'white' ? 'text-white' : 'text-primary'}
  `;

  // Checkbox visual element matching original form-check__checkbox
  const checkboxVisualStyles = `
    flex-shrink-0 block border w-12 h-12 transition-all duration-[400ms] ease-out
    ${variant === 'white' ? 'border-[0.15rem] border-muted hover:border-white' : 
      variant === 'black' ? 'border-[0.2rem] border-primary' : 
      'border-[0.15rem] border-muted hover:border-white'}
  `;

  // Text styles matching original form-check__text
  const textStyles = `
    block ml-[0.9375rem] leading-12 text-[18px]
    ${variant === 'white' ? 'text-white' : 'text-primary'}
  `;

  // Helper text classes
  const helperClasses = `
    text-sm mt-1 pl-12
    ${error ? 'text-alert' : variant === 'white' ? 'text-white' : 'text-muted'}
  `;

  // Checked state handled via CSS utilities (.checkbox-mark) with variant classes
  const checkedStyles = '';
  const visualVariantClass = variant === 'black' ? 'checkbox-black' : 'checkbox-white';

  return (
    <div className={`${containerStyles} ${className}`}>
      <label className={labelStyles}>
        <input
          ref={ref}
          type="checkbox"
          disabled={disabled}
          className="absolute opacity-0 peer"
          {...props}
        />
        <span className={`${checkboxVisualStyles} ${checkedStyles} ${visualVariantClass}`}></span>
        <span className={textStyles}>
          {label}
          {props.required && <span className="text-red-500 ml-1">*</span>}
        </span>
      </label>
      
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
  variant: PropTypes.oneOf(['default', 'white', 'black']),
  error: PropTypes.bool,
  disabled: PropTypes.bool,
  label: PropTypes.string,
  helperText: PropTypes.string,
  errorText: PropTypes.string,
  className: PropTypes.string,
  required: PropTypes.bool
};

export default Checkbox;
