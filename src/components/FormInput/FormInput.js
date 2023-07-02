import React from 'react';
import './FormInput.css';

function FormInput({
  value,
  onChange,
  checkError,
  onKeyDown,
  errors,
  name,
  type,
  title,
  minLength = null,
  maxLength = null,
}) {
  const inputClass = `form-input__input ${errors[name] && 'form-input__input_invalid'}`;

  return (
    <>
      <label className="form-input__title" htmlFor={name}>{ title }</label>

      <input
        value={value}
        className={inputClass}
        id={name}
        onChange={onChange}
        onBlur={checkError}
        onKeyDown={onKeyDown}
        name={name}
        type={type}
        minLength={minLength}
        maxLength={maxLength}
        required
      />
      <span className="form-input__error">{errors[name]}</span>
    </>
  );
}

export default FormInput;
