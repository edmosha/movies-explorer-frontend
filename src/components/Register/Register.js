import React, { useContext, useLayoutEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthForm from '../AuthForm/AuthForm';
import FormInput from '../FormInput/FormInput';
import useValidation from '../hooks/useValidation';
import CurrentUser from '../contexts/CurrentUser';

function Register({ handleRegister }) {
  const {
    values, errors, isValid, onChange, checkError, onKeyDown, resetValidation,
  } = useValidation();

  const { _id } = useContext(CurrentUser);
  const navigate = useNavigate();

  useLayoutEffect(() => {
    if (_id) navigate('/movies', { replace: true });
  }, []);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    return handleRegister(values).then((res) => !(res instanceof Error) && resetValidation());
  };

  return (
    <AuthForm
      handleSubmit={ handleSubmit }
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
        pattern="[a-zA-ZА-Яа-яЁё\s\-]+"
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
        pattern="[a-zA-Z0-9_.]+[@]{1}[a-z0-9]+[\.][a-z]+"
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
