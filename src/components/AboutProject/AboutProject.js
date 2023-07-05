import React from 'react';
import './AboutProject.css';

function AboutProject() {
  return (
    <section className="about-project">
      <h2 className="section-title">О проекте</h2>
      <div className="about-project__info-container">

        <article className="about-project__info-block">
          <h3 className="about-project__info-header">Дипломный проект включал 5 этапов</h3>
          <p className="about-project__info-text">
            Составление плана, работу над бэкендом, вёрстку,
            добавление функциональности и финальные доработки.
          </p>
        </article>

        <article className="about-project__info-block">
          <h3 className="about-project__info-header">На выполнение диплома ушло 5 недель</h3>
          <p className="about-project__info-text">
            У каждого этапа был мягкий и жёсткий дедлайн,
            которые нужно было соблюдать, чтобы успешно защититься.
          </p>
        </article>

      </div>

      <div className="about-project__timeline-container">
        <p className="about-project__timeline-elem">1 неделя</p>
        <p className="about-project__timeline-elem">4 недели</p>
        <p className="about-project__timeline-elem">Back-end</p>
        <p className="about-project__timeline-elem">Front-end</p>
      </div>
    </section>
  );
}

export default AboutProject;
