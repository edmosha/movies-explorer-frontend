import React from 'react';
import AuthForm from '../AuthForm/AuthForm';
import FormInput from '../FormInput/FormInput';
import useValidation from '../hooks/useValidation';

function Register({ handleRegister }) {
  const {
    values, errors, isValid, onChange, checkError, onKeyDown, resetValidation,
  } = useValidation();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleRegister(values);
    resetValidation();
  };

  return (
    <AuthForm
      onSubmit={ handleSubmit }
      isValid={ isValid }
      title="Добро пожаловать!"
      submitButtonText="Зарегистрироваться"
      underSubmitButtonText="Уже зарегистрированы?"
      underSubmitButtonLinkText="Войти"
      underSubmitButtonLink="/signin"
    >

      <FormInput
        value={ values.name || '' }
        onChange={ onChange }
        checkError={ checkError }
        onKeyDown={ onKeyDown }
        errors={ errors }
        name="name"
        type="text"
        title="Имя"
        minLength="2"
        maxLength="30"
      />
      <FormInput
        value={ values.email || '' }
        onChange={ onChange }
        checkError={ checkError }
        onKeyDown={ onKeyDown }
        errors={ errors }
        name="email"
        type="email"
        title="E-mail"
      />
      <FormInput
        value={ values.password || '' }
        onChange={ onChange }
        checkError={ checkError }
        onKeyDown={ onKeyDown }
        errors={ errors }
        name="password"
        type="password"
        title="Пароль"
      />
    </AuthForm>
  );
}

export default Register;
