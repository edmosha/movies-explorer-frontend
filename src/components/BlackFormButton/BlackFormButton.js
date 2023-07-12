import React from 'react';
import './BlackFormButton.css';

function BlackFormButton({ className = 'black-form-button', text, type, isDisabled, onClick }) {
  return (
    <button className={ className }
            type={ type }
            disabled={ isDisabled }
            data-content={ text }
            onClick={ onClick }>
      { text }
    </button>
  );
}

export default BlackFormButton;