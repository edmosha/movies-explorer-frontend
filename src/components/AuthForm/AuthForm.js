import React, { useState } from 'react';
import './AuthForm.css';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import BlackFormButton from '../BlackFormButton/BlackFormButton';

function AuthForm(
  {
    handleSubmit,
    children,
    isValid,
    title,
    submitButtonText,
    underSubmitButtonText,
    underSubmitButtonLinkText,
    underSubmitButtonLink,
  },
) {
  const [ isDisabled, setIsDisabled ] = useState(false);
  const submitButtonClass = `black-form-button ${ !isValid || isDisabled ? 'black-form-button_inactive' : '' }`;

  const onSubmit = (evt) => {
    setIsDisabled(true);
    handleSubmit(evt).then(() => {
      setIsDisabled(false);
    })
  }

  return (
    <section className="auth">
      <Logo />
      <h1 className="auth__title">{ title }</h1>

      <form className="auth__form" onSubmit={ onSubmit }>
        <div className="auth__input-container">

          { children }

        </div>

        <BlackFormButton
          className={ submitButtonClass }
          text={ submitButtonText }
          isDisabled={ (!isValid || isDisabled) }
        />

      </form>

      <p className="auth__question">
        { underSubmitButtonText }
        <Link to={ underSubmitButtonLink } className="auth__link">{ underSubmitButtonLinkText }</Link>
      </p>
    </section>

  );
}

export default AuthForm;
