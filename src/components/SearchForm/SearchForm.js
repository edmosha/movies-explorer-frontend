import React, { useContext } from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import './SearchForm.css';
import CurrentScreenResolution from '../contexts/CurrentScreenResolution';

function SearchForm() {
  const ScreenResolution = useContext(CurrentScreenResolution);
  const whiteSearchButtonClass = `
    search-form__button 
    search-form__button_color_white 
    ${ScreenResolution <= 320 ? 'search-form__button_hidden' : ''}`;

  return (
    <section className="search-form">
      <form className="search-form__form">
        <fieldset className="search-form__search-container">

          <button
            aria-label="start search"
            type="button"
            className={whiteSearchButtonClass}
          />

          <input
            type="text"
            className="search-form__input"
            placeholder="Фильм"
          />

          <button
            aria-label="start search"
            type="button"
            className="search-form__button search-form__button_color_black"
          />

        </fieldset>
        <FilterCheckbox />
      </form>
    </section>
  );
}

export default SearchForm;
