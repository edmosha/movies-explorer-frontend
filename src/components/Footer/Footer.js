import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <h2 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h2>

      <div className="footer__bottom">
        <p className="footer__year">&#169; 2023</p>

        <ul className="footer__links">

          <li className="footer__item">
            <a href="https://practicum.yandex.ru/" className="footer__link">Яндекс.Практикум</a>
          </li>

          <li className="footer__item">
            <a href="https://github.com/edmosha" className="footer__link">Github</a>
          </li>

        </ul>
      </div>

    </footer>
  );
}

export default Footer;
