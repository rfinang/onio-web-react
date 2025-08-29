export const FormStyles = `

.form-group {
  margin-bottom: 3.5rem;
  position: relative;
}
.form-group select {
  -webkit-appearance: none;
  appearance: none;
  background-repeat: no-repeat;
  background-position: right 0.75rem center;
  background-image: url('data:image/svg+xml,<svg width="27" height="16" viewBox="0 0 27 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M26 1.14062L13.5 14.2812L0.999999 1.14062" strokeWidth="2" stroke="black"></path></svg>');
}
.form-group select,
.form-group input,
.form-group textarea {
  width: 100%;
  height: var(--input-height);
  border: none;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  border-radius: 0;
  font-size: 18px;
  font-weight: 500;
  color: #222021;
  outline: none !important;
  box-shadow: none !important;
}
@media (min-width: 1200px) {
  .form-group select,
.form-group input,
.form-group textarea {
    border-bottom: 2px solid #222021;
  }
}
@media (max-width: 1199.98px) {
  .form-group select,
.form-group input,
.form-group textarea {
    border-bottom: 1.5px solid #222021;
  }
}
.form-group textarea {
  min-height: 24.4rem;
  padding: 1.3rem;
}
@media (min-width: 1200px) {
  .form-group textarea {
    border: 2px solid #222021;
  }
}
@media (max-width: 1199.98px) {
  .form-group textarea {
    border: 1.5px solid #222021;
  }
}
.form-group__inner {
  position: relative;
}
.form-group--silver select,
.form-group--silver input,
.form-group--silver textarea {
  background: transparent;
}
.form-group--silver select::placeholder,
.form-group--silver input::placeholder,
.form-group--silver textarea::placeholder {
  /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: #222021;
  opacity: 1;
  /* Firefox */
}
.form-group--silver select:-ms-input-placeholder,
.form-group--silver input:-ms-input-placeholder,
.form-group--silver textarea:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  color: #222021;
}
.form-group--silver select::-ms-input-placeholder,
.form-group--silver input::-ms-input-placeholder,
.form-group--silver textarea::-ms-input-placeholder {
  /* Microsoft Edge */
  color: #222021;
}
.form-group--silver select {
  background-repeat: no-repeat;
  background-position: right 0.75rem center;
  background-image: url('data:image/svg+xml,<svg width="27" height="16" viewBox="0 0 27 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M26 1.14062L13.5 14.2812L0.999999 1.14062" strokeWidth="2" stroke="white"></path></svg>');
}
.form-group--white select,
.form-group--white input,
.form-group--white textarea {
  background: transparent;
  border-color: white !important;
  color: #ffffff;
}
.form-group--white input:-webkit-autofill,
.form-group--white input:-webkit-autofill:hover, 
.form-group--white input:-webkit-autofill:focus {
    -webkit-box-shadow: 0 0 0px 1000px #222021 inset !important;
    -webkit-text-fill-color: #ffffff;
}
.form-group--white select::placeholder,
.form-group--white input::placeholder,
.form-group--white textarea::placeholder {
  /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: #ffffff;
  opacity: 1;
  /* Firefox */
}
.form-group--white select:-ms-input-placeholder,
.form-group--white input:-ms-input-placeholder,
.form-group--white textarea:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  color: #ffffff;
}
.form-group--white select::-ms-input-placeholder,
.form-group--white input::-ms-input-placeholder,
.form-group--white textarea::-ms-input-placeholder {
  /* Microsoft Edge */
  color: #ffffff;
}
.form-group--white select {
  background-repeat: no-repeat;
  background-position: right 0.75rem center;
  background-image: url('data:image/svg+xml,<svg width="27" height="16" viewBox="0 0 27 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M26 1.14062L13.5 14.2812L0.999999 1.14062" strokeWidth="2" stroke="white"></path></svg>');
}
.form-group--required input {
  padding-right: 34px;
}
.form-group--required.error .form-group__required {
  opacity: 1;
}
.form-group--required.error .form-group__alert.required-alert {
  display: block;
}
.form-group--required.error-email .form-group__required {
  opacity: 1;
}
.form-group--required.error-email .form-group__alert.email-alert {
  display: block;
}
.form-group--required .form-group__required {
  border-color: #ee4a26;
  background: #ee4a26;
}
.form-group--required .form-group__alert {
  color: #ee4a26;
}
.form-group--required.form-group--white .form-group__required {
  border-color: #ffffff;
  background: #ffffff;
}
.form-group--required.form-group--silver .form-group__required {
  border-color: #222021;
  background: #222021;
}
.form-group--required.form-group--white .form-group__alert {
  color: #ffffff;
}
.form-group--required.form-group--silver .form-group__alert {
  color: #222021;
}
.form-group__required {
  border: 5px solid #222021;
  border-radius: 50%;
  width: 0;
  height: 0;
  background: #222021;
  display: block;
  position: absolute;
  top: calc(50% - 5px);
  right: 12px;
  opacity: 0;
}
.form-group__alert {
  display: none;
  text-align: right;
  color: #5a5c5b;
  line-height: 1.1428571429;
  margin-top: 5px;
  position: absolute;
  width: 100%;
}
@media (min-width: 740px) {
  .form-group__alert {
    font-size: 14px;
  }
}
@media (max-width: 739.98px) {
  .form-group__alert {
    font-size: 12px;
  }
}

.form-check {
  margin-bottom: 1.5rem;
  padding-left: 0;
}

.form-check-newsletter {
  margin-top: 3.5rem;
  margin-bottom: 3.5rem;
  padding-left: 0;
}

.is-mobile .form-check-newsletter .form-check__text {
  font-size: 1.5rem;
}

.form-check__label {
  display: flex;
  -webkit-box-align: start;
  -webkit-align-items: flex-start;
  -ms-flex-align: start;
  align-items: flex-start;
  cursor: pointer;
  position: relative;
}
.form-check input {
  position: absolute;
  opacity: 0;
}
.form-check input:checked + .form-check__checkbox {
  background-size: 16px;
  border-color: #fff;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url('data:image/svg+xml,<svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.2922 1.38592L8.58011 19.4864L1.47018 10.4361" stroke="white" strokeWidth="1.5" stroke-linejoin="bevel"/></svg>') !important;
}

.form-check input:checked + .form-check__checkbox_black {
  background-size: 16px;
  border-color: #000;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url('data:image/svg+xml,<svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.2922 1.38592L8.58011 19.4864L1.47018 10.4361" stroke="black" strokeWidth="1.5" stroke-linejoin="bevel"/></svg>') !important;
}

.form-check__checkbox {
  transition: border-color 0.4s ease;
  -ms-flex-negative: 0;
  flex-shrink: 0;
  display: block;
  border: 0.15rem solid #AEADAD;
  width: 3rem;
  height: 3rem;
}

.form-check__checkbox_black {
  transition: border-color 0.4s ease;
  -ms-flex-negative: 0;
  flex-shrink: 0;
  display: block;
  border: 0.2rem solid #222021;
  width: 3rem;
  height: 3rem;
}

.form-check__text {
  display: block;
  margin-left: 0.9375rem;
  line-height: 3rem;
}
.form-check:hover .form-check__checkbox {
  border-color: #fff;
}
.form-check--white {
  color: #fff;
}
.form-check--white .form-check__label {
  color: #fff;
}

.form-check-label {
  user-select: none;
  cursor: pointer;
  display: flex;
}
.form-check-label.disabled {
  cursor: default !important;
}
.form-check-label.has--error {
  color: red;
}
.form-check-label span.label {
  float: left;
}
@media (min-width: 740px) {
  .form-check-label span.label {
    width: calc(100% - 5rem);
  }
}
@media (max-width: 739.98px) {
  .form-check-label span.label {
    width: calc(100% - 4.4rem);
  }
}

.form-check .check-label--text {
  margin-left: 1.5rem;
  position: relative;
  font-size: 18px;
  padding-top: 0.06em;
}
.form-check--white .check-label--text {
  color: #ffffff;
}
.form-check--white .ht-checkbox {
  background-image: url('data:image/svg+xml,<svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.2922 1.38592L8.58011 19.4864L1.47018 10.4361" stroke="white" strokeWidth="1.5" stroke-linejoin="bevel"/></svg>') !important;
}
.form-radio {
  .form-radio-label {
    position: relative;
    cursor: pointer;
  }
  .form-check-input {
    width: 0;
    height: 0;
    visibility: hidden;
    border: none;
    &:checked + .check-label--text:before {
      opacity: 1;
    }
  }
  .check-label--text {
    display: block;
    position: relative;
    padding-left: 3.9rem;
    &:after {
      content: "";
      position: absolute;
      width: 24px;
      height: 24px;
      border: 2px solid #222021;
      left: 0;
      top: 50%;
      border-radius: 50%;
      transform: translateY(-50%);
    }
    &:before {
      transform: translateY(-50%);
      content: "";
      position: absolute;
      width: 10px;
      height: 10px;
      background-color: #222021;
      left: 0;
      top: 50%;
      border-radius: 50%;
      left: 7px;
      transition: opacity 0.4s ease;
      opacity: 0;
    }
  }
}


.form-check-input {
  pointer-events: none;
  user-select: none;
  visibility: hidden;
  position: absolute;
  opacity: 0;
  z-index: -999;
  left: 0;
}

.ht-checkbox {
  --size-checkbox: 30px;
  padding: 0;
  display: block;
  width: var(--size-checkbox);
  height: var(--size-checkbox);
  background-image: url(public/icons/system/custom-checkbox-onio.svg);
  background-repeat: no-repeat;
  background-size: auto var(--size-checkbox);
  border: none;
  cursor: pointer;
  overflow: hidden;
}

.ht-radio {
  --size-radio: 24px;
  padding: 0;
  display: block;
  width: var(--size-radio);
  height: var(--size-radio);
  background-image: url(public/icons/system/custom-radio.svg);
  background-repeat: no-repeat;
  background-size: auto var(--size-radio);
  border: none;
  cursor: pointer;
  overflow: hidden;
  margin-top: 0.06em;
}

.ht-checkbox {
  background-position: calc((var(--size-checkbox) * -3) - 4px) 0;
}

.ht-checkbox.hover {
  background-position: calc((var(--size-checkbox) * -4) - 5px) 0 !important;
}

.ht-checkbox.checked, .ht-checkbox[checked] {
  background-position: -1px 0 !important;
}

.ht-checkbox.disabled, .ht-checkbox[disabled] {
  background-position: calc((var(--size-checkbox) * -2) - 3px) 0 !important;
  cursor: default !important;
}

.ht-checkbox.checked.disabled {
  background-position: calc((var(--size-checkbox) * -1) - 2px) 0 !important;
  cursor: default !important;
}

.ht-radio {
  background-position: calc((var(--size-radio) * -3) - 6px) 0 !important;
}

.ht-radio.hover {
  background-position: 0 0 !important;
}

.ht-radio.checked {
  background-position: 0 0 !important;
}

.ht-radio.disabled {
  background-position: calc((var(--size-radio) * -2) - 4px) 0 !important;
  cursor: default;
}

.ht-radio.checked.disabled {
  background-position: calc((var(--size-radio) * -1) - 2px) 0 !important;
}

`;
