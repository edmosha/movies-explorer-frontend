import React from 'react';
import './InfoPopup.css';

function InfoPopup({ params }) {
  const {
    message, error, isOpen, onClose,
  } = params;
  const infoPopupClass = `info-popup ${ isOpen ? 'info-popup_opened' : '' }`;

  return (
    <section className={ infoPopupClass }>
      <div className="info-popup__container">

        <button
          className="info-popup__close-btn"
          type="button"
          onClick={ onClose }
          aria-label="закрыть"
        />
        <h2 className="info-popup__title">{ error ? 'Упс... 😳' : 'Успех! 🥳' }</h2>
        <p className="info-popup__text">{ message }</p>

        <button
          className="info-popup__continue-btn"
          type="button"
          data-content="Продолжить"
          onClick={ onClose }
        >
          Продолжить
        </button>

      </div>
    </section>
  );
}

export default InfoPopup;
