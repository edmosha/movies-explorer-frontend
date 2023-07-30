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
          <p className="about-me__text" />
          <a className="about-me__link" href="https://github.com/edmosha" target="_blank" rel="noreferrer">Github</a>
        </div>

        <img className="about-me__photo" src={ Photo } alt="Фото студента" />

      </div>

    </section>
  );
}

export default AboutMe;
