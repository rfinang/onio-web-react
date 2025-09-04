import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Radio = forwardRef(({
  variant = 'default',
  error = false,
  disabled = false,
  label,
  helperText,
  errorText,
  className = '',
  ...props
}, ref) => {
  // Custom styles based on original form-radio pattern
  const containerStyles = 'form-radio mb-6';

  // Label styles matching original check-label--text
  const labelStyles = `
    block relative pl-[3.9rem] text-[18px] pt-[0.06em] cursor-pointer
    ${variant === 'white' ? 'text-white' : 'text-primary'}
    ${disabled ? 'opacity-60 cursor-not-allowed' : ''}
  `;

  // Custom radio button styling matching original
  const customRadioStyles = `
    after:content-[''] after:absolute after:w-6 after:h-6 after:border-2 
    after:border-primary after:left-0 after:top-1/2 after:rounded-full 
    after:-translate-y-1/2 after:transition-all after:duration-[400ms]
    before:content-[''] before:absolute before:w-[10px] before:h-[10px] 
    before:bg-primary before:left-[7px] before:top-1/2 before:rounded-full 
    before:-translate-y-1/2 before:transition-opacity before:duration-[400ms] before:opacity-0
    ${variant === 'white' ? 'after:border-white before:bg-white' : ''}
  `;

  // Input styles - hidden but functional
  const inputStyles = `
    absolute opacity-0 invisible w-0 h-0 border-none
    checked:${customRadioStyles.includes('before:opacity-0') ? '+ * before:opacity-100' : ''}
  `;

  // Helper text classes
  const helperClasses = `
    text-sm mt-1 pl-[3.9rem]
    ${error ? 'text-alert' : variant === 'white' ? 'text-white' : 'text-muted'}
  `;

  return (
    <div className={`${containerStyles} ${className}`}>
      <label className="form-radio-label relative cursor-pointer">
        <input
          ref={ref}
          type="radio"
          disabled={disabled}
          className="form-check-input w-0 h-0 invisible border-none peer"
          {...props}
        />
        <span className={`${labelStyles} ${customRadioStyles} peer-checked:before:opacity-100`}>
          {label}
          {props.required && <span className="text-alert ml-1">*</span>}
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

Radio.displayName = 'Radio';

Radio.propTypes = {
  variant: PropTypes.oneOf(['default', 'white']),
  error: PropTypes.bool,
  disabled: PropTypes.bool,
  label: PropTypes.string,
  helperText: PropTypes.string,
  errorText: PropTypes.string,
  className: PropTypes.string,
  required: PropTypes.bool
};

export default Radio;
