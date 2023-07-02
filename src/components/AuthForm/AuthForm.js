import React from 'react';
import './AuthForm.css';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';

function AuthForm({
  children,
  isValid,
  title,
  submitButtonText,
  underSubmitButtonText,
  underSubmitButtonLinkText,
  underSubmitButtonLink,
}) {
  const submitButtonClass = `auth__submit-btn ${!isValid ? 'auth__submit-btn_inactive' : ''}`;

  return (
    <section className="auth">
      <Logo />
      <h1 className="auth__title">{ title }</h1>

      <form className="auth__form">
        <div className="auth__input-container">

          { children }

        </div>
        <button
          className={submitButtonClass}
          type="submit"
          disabled={!isValid}
          data-content={submitButtonText}
        >
          { submitButtonText }
        </button>
      </form>

      <p className="auth__question">
        { underSubmitButtonText }
        <Link to={underSubmitButtonLink} className="auth__link">{ underSubmitButtonLinkText }</Link>
      </p>
    </section>

  );
}

export default AuthForm;
