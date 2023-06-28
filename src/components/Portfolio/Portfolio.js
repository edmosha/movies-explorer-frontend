import React from 'react';
import './Portfolio.css';

function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>

      <ul className="portfolio__list">

        <li className="portfolio__item">
          <a className="portfolio___link" href="#">
            Статичный сайт
            <span className="portfolio__link-icon" />
          </a>
        </li>

        <li className="portfolio__item">
          <a className="portfolio___link" href="#">
            Адаптивный сайт
            <span className="portfolio__link-icon" />
          </a>
        </li>

        <li className="portfolio__item">
          <a className="portfolio___link" href="#">
            Одностраничное приложение
            <span className="portfolio__link-icon" />
          </a>
        </li>

      </ul>

    </section>
  );
}

export default Portfolio;
