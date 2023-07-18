import React, { useContext, useEffect } from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import './SearchForm.css';
import CurrentScreenResolution from '../contexts/CurrentScreenResolution';
import useValidation from '../hooks/useValidation';
import { useLocation } from "react-router-dom";

function SearchForm({ moviesData, onSearch, searchText, filter }) {
  const ScreenResolution = useContext(CurrentScreenResolution);
  const whiteSearchButtonClass = `
    search-form__button 
    search-form__button_color_white 
    ${ ScreenResolution <= 320 ? 'search-form__button_hidden' : '' }`;

  const {
    values, isValid, onChange, checkError, onKeyDown, checked, resetValidation
  } = useValidation();

  const { pathname } = useLocation();

  useEffect(() => {
    console.log('text', searchText, 'filter', filter)
    resetValidation({ search: searchText, filter }, {}, filter)
  }, [])

  const onSubmit = (evt) => {
    evt.preventDefault();
    onSearch(values.search, values.filter, pathname.slice(1), moviesData)
  }

  return (
    <section className="search-form">
      <form className="search-form__form" onSubmit={ onSubmit }>
        <fieldset className="search-form__search-container">

          <button
            aria-label="поиск"
            type="submit"
            className={ whiteSearchButtonClass }
            disabled={ !isValid }
          />

          <input
            value={ values.search || '' }
            onChange={ onChange }
            onBlur={ checkError }
            onKeyDown={ onKeyDown }
            type="text"
            name="search"
            className="search-form__input"
            placeholder="Фильм"
            required
          />

          <button
            aria-label="поиск"
            type="submit"
            className="search-form__button search-form__button_color_black"
            disabled={ !isValid }
          />

        </fieldset>
        <FilterCheckbox value={ checked || false } onChange={ onChange } />
      </form>
    </section>
  );
}

export default SearchForm;
