import React from 'react';
import { Link } from 'react-router-dom';
import './AuthPanel.css';

function AuthPanel() {
  return (
    <div className="auth-panel">
      <Link className="auth-panel__register" to="/signup">Регистрация</Link>
      <Link className="auth-panel__login" to="/signin">Войти</Link>
    </div>
  );
}

export default AuthPanel;
