import React, { useContext, useEffect } from 'react';
import './Profile.css';
import { Link } from 'react-router-dom';
import BlackFormButton from '../BlackFormButton/BlackFormButton';
import CurrentUser from '../contexts/CurrentUser';
import useValidation from '../hooks/useValidation';

function Profile({ handleUpdateProfile, handleLogout }) {
  const {
    values, errors, isValid, onChange, onKeyDown, resetValidation,
  } = useValidation();

  const user = useContext(CurrentUser);
  const { name, email } = user;
  const isButtonDisabled = !isValid || (values.name === name && values.email === email);
  const submitButtonClass = `black-form-button ${ isButtonDisabled ? 'black-form-button_inactive' : '' }`;

  useEffect(() => {
    resetValidation({ name, email });
  }, [user]);

  const onSubmit = (evt) => {
    evt.preventDefault();
    handleUpdateProfile(values);
    resetValidation(user);
  };

  return (
    <section className="profile">
      <h1 className="profile__title">{ `Привет, ${ name }!` }</h1>
      <form className="profile__info-container" onSubmit={ onSubmit } id="profile-form">

        <label htmlFor="profile-name-input" className="profile__label">Имя</label>
        <input
          value={ values.name || '' }
          className="profile__input"
          id="profile-name-input"
          onChange={ onChange }
          onKeyDown={ onKeyDown }
          name="name"
          type="text"
          minLength="2"
          maxLength="30"
          pattern="[a-zA-ZА-Яа-яЁё\s\-]+"
          required
        />

        <span className="profile__error">{ errors.name }</span>

        <label htmlFor="profile-email-input" className="profile__label">E-mail</label>
        <input
          value={ values.email || '' }
          className="profile__input"
          id="profile-email-input"
          onChange={ onChange }
          onKeyDown={ onKeyDown }
          name="email"
          type="email"
          pattern="[a-zA-Z0-9_.]+[@]{1}[a-z0-9]+[\.][a-z]+"
          required
        />

        <span className="profile__error">{ errors.email }</span>

      </form>

      <BlackFormButton
        className={ submitButtonClass }
        text="Редактировать"
        isDisabled={ isButtonDisabled }
        formId="profile-form"
      />

      <Link to="/" className="profile__exit" onClick={ handleLogout }>Выйти из аккаунта</Link>
    </section>
  );
}

export default Profile;
