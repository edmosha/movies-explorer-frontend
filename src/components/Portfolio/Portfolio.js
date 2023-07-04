import React from 'react';
import './Portfolio.css';

function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>

      <ul className="portfolio__list">

        <li className="portfolio__item">
          <a className="portfolio___link" href="https://github.com/edmosha/how-to-learn" target="_blank" rel="noreferrer">
            Статичный сайт
            <span className="portfolio__link-icon" />
          </a>
        </li>

        <li className="portfolio__item">
          <a className="portfolio___link" href="https://github.com/edmosha/russian-travel" target="_blank" rel="noreferrer">
            Адаптивный сайт
            <span className="portfolio__link-icon" />
          </a>
        </li>

        <li className="portfolio__item">
          <a className="portfolio___link" href="https://github.com/edmosha/react-mesto-api-full-gha" target="_blank" rel="noreferrer">
            Одностраничное приложение
            <span className="portfolio__link-icon" />
          </a>
        </li>

      </ul>

    </section>
  );
}

export default Portfolio;
