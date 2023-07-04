import React from 'react';
import AuthForm from '../AuthForm/AuthForm';
import FormInput from '../FormInput/FormInput';
import useValidation from '../hooks/useValidation';

function Login() {
  const {
    values, errors, isValid, onChange, checkError, onKeyDown,
  } = useValidation();

  return (
    <AuthForm
      isValid={isValid}
      title="Рады видеть!"
      submitButtonText="Войти"
      underSubmitButtonText="Ещё не зарегистрированы?"
      underSubmitButtonLinkText="Регистрация"
      underSubmitButtonLink="/signup"
    >

      <FormInput
        value={values.email || ''}
        onChange={onChange}
        checkError={checkError}
        onKeyDown={onKeyDown}
        errors={errors}
        name="email"
        type="email"
        title="E-mail"
      />
      <FormInput
        value={values.password || ''}
        onChange={onChange}
        checkError={checkError}
        onKeyDown={onKeyDown}
        errors={errors}
        name="password"
        type="password"
        title="Пароль"
      />
    </AuthForm>
  );
}

export default Login;