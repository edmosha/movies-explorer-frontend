import React from 'react';
import './Header.css';
import logo from '../../images/logo.svg';

function Header({ children }) {
  return (
    <header className="header">
      <div className="header__container">
        <img className="header__logo" src={logo} alt="Логотип" />
        { children }
      </div>
    </header>
  );
}

export default Header;
