import React from 'react';
import './AboutMe.css';
import Photo from '../../images/student-photo.JPG';

function AboutMe() {
  return (
    <section className="about-me">
      <h2 className="section-title">Студент</h2>

      <div className="about-me__student-container">

        <div className="about-me__text-container">
          <h3 className="about-me__title">Дарья</h3>
          <p className="about-me__subtitle">Фронтенд-разработчица, 22 года</p>
          <p className="about-me__text">
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
            и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить.
            С 2015 года работал в компании «СКБ Контур». После того,
            как прошёл курс по веб-разработке,
            начал заниматься фриланс-заказами и ушёл с постоянной работы.
          </p>
          <a className="about-me__link" href="#">Github</a>
        </div>

        <img className="about-me__photo" src={Photo} alt="Фото студента" />

      </div>

    </section>
  );
}

export default AboutMe;
