import React from 'react';
import './Header.css';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../images/logo.svg';

function Header({ children }) {
  const { pathname } = useLocation();
  const headerClass = `header header__color_${pathname === '/' ? 'pink' : 'white'}`;

  return (
    <header className={headerClass}>
      <div className="header__container">
        <Link to="/">
          <img className="header__logo" src={logo} alt="Логотип" />
        </Link>
        { children }
      </div>
    </header>
  );
}

export default Header;
