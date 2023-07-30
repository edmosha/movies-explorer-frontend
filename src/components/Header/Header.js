import React from 'react';
import './Header.css';
import { useLocation } from 'react-router-dom';
import Logo from '../Logo/Logo';

function Header({ children }) {
  const { pathname } = useLocation();
  const headerClass = `header header__color_${ pathname === '/' ? 'pink' : 'white' }`;

  return (
    <header className={ headerClass }>
      <div className="header__container">
        <Logo />
        { children }
      </div>
    </header>
  );
}

export default Header;
