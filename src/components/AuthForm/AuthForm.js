import React from 'react';
import './AuthForm.css';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import BlackFormButton from "../BlackFormButton/BlackFormButton";

function AuthForm({
  onSubmit,
  children,
  isValid,
  title,
  submitButtonText,
  underSubmitButtonText,
  underSubmitButtonLinkText,
  underSubmitButtonLink,
}) {
  const submitButtonClass = `black-form-button ${!isValid ? 'black-form-button_inactive' : ''}`;

  return (
    <section className="auth">
      <Logo />
      <h1 className="auth__title">{ title }</h1>

      <form className="auth__form" onSubmit={ onSubmit }>
        <div className="auth__input-container">

          { children }

        </div>

        <BlackFormButton className={submitButtonClass}
                         text={submitButtonText}
                         type="submit"
                         disabled={!isValid}
        />

      </form>

      <p className="auth__question">
        { underSubmitButtonText }
        <Link to={underSubmitButtonLink} className="auth__link">{ underSubmitButtonLinkText }</Link>
      </p>
    </section>

  );
}

export default AuthForm;
