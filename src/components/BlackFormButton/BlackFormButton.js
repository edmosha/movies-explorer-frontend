import React from 'react';
import './BlackFormButton.css';

function BlackFormButton(
  {
    className = 'black-form-button',
    text,
    isDisabled,
    onClick,
    formId,
  },
) {
  return (
    <button
      className={ className }
      type="submit"
      disabled={ isDisabled }
      data-content={ text }
      onClick={ onClick }
      form={ formId }
    >
      { text }
    </button>
  );
}

export default BlackFormButton;
