import React, { useContext } from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import './SearchForm.css';
import CurrentScreenResolution from '../contexts/CurrentScreenResolution';
import useValidation from '../hooks/useValidation';

function SearchForm() {
  const ScreenResolution = useContext(CurrentScreenResolution);
  const whiteSearchButtonClass = `
    search-form__button 
    search-form__button_color_white 
    ${ScreenResolution <= 320 ? 'search-form__button_hidden' : ''}`;

  const {
    values, isValid, onChange, checkError, onKeyDown, checked,
  } = useValidation();

  return (
    <section className="search-form">
      <form className="search-form__form">
        <fieldset className="search-form__search-container">

          <button
            aria-label="start search"
            type="button"
            className={whiteSearchButtonClass}
            disabled={!isValid}
          />

          <input
            value={values.search || ''}
            onChange={onChange}
            onBlur={checkError}
            onKeyDown={onKeyDown}
            type="text"
            name="search"
            className="search-form__input"
            placeholder="Фильм"
            required
          />

          <button
            aria-label="start search"
            type="button"
            className="search-form__button search-form__button_color_black"
            disabled={!isValid}
          />

        </fieldset>
        <FilterCheckbox value={checked || false} onChange={onChange} />
      </form>
    </section>
  );
}

export default SearchForm;
