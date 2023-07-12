import React from 'react';
import './InfoPopup.css';
import BlackFormButton from "../BlackFormButton/BlackFormButton";

function InfoPopup({ params, onClose }) {
  const { message, error, isOpen } = params;
  const infoPopupClass = `info-popup ${ isOpen ? 'info-popup_opened' : '' }`;

  return (
    <section className={ infoPopupClass }>
      <div className="info-popup__container">
        <button className="info-popup__close-btn" type="button" onClick={ onClose }/>
        <h2 className="info-popup__title">{ error ? 'Упс... 😳' : 'Успех! 🥳' }</h2>
        <p className="info-popup__text">{ message }</p>
        <BlackFormButton text="Продолжить" type="button" disabled={ false } onClick={ onClose }/>
      </div>
    </section>
  );
}

export default InfoPopup;