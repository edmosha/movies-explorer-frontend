import React, { useState } from 'react';
import './HamburgerButton.css';

function HamburgerButton({ onClick }) {
  const [isOpen, setIsOpen] = useState(false);

  const lineClass = `hamburger-btn__line ${ isOpen ? 'hamburger-btn__line_opened' : '' }`;
  const buttonClass = `hamburger-btn ${ isOpen ? 'hamburger-btn__fixed' : '' }`;

  const handleClick = () => {
    onClick();
    setIsOpen(!isOpen);
  };

  return (
    <button type="button" className={ buttonClass } onClick={ handleClick }>
      <div className={ lineClass } />
      <div className={ lineClass } />
      <div className={ lineClass } />
    </button>
  );
}

export default HamburgerButton;
