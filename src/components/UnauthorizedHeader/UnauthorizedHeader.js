import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import './UnauthorizedHeader.css';

function UnauthorizedHeader() {
  return (
    <Header>
      <div className="header__auth-panel">
        <Link className="header__register" to="/signup">Регистрация</Link>
        <Link className="header__login" to="/signin">Войти</Link>
      </div>
    </Header>
  );
}

export default UnauthorizedHeader;
