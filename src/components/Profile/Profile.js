import React from 'react';
import './Profile.css';
import { Link } from 'react-router-dom';

function Profile() {
  return (
    <section className="profile">
      <h1 className="profile__title">Привет, Виталий!</h1>
      <div className="profile__info-container">
        <p className="profile__info-item">Имя</p>
        <p className="profile__info-item">Виталий</p>
        <p className="profile__info-item">E-mail</p>
        <p className="profile__info-item">pochta@yandex.ru</p>
      </div>

      <button type="button" className="profile__edit-btn">Редактировать</button>
      <Link to="/" className="profile__exit">Выйти из аккаунта</Link>
    </section>
  );
}

export default Profile;
