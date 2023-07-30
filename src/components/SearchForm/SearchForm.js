import React, { useContext, useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import CurrentScreenResolution from '../contexts/CurrentScreenResolution';
import useValidation from '../hooks/useValidation';

function SearchForm({
  moviesData, onSearch, searchText, filter, handleSearchLoading,
}) {
  const ScreenResolution = useContext(CurrentScreenResolution);
  const whiteSearchButtonClass = `
    search-form__button 
    search-form__button_color_white 
    ${ ScreenResolution <= 320 ? 'search-form__button_hidden' : '' }`;

  const {
    values, isValid, onChange, checkError, onKeyDown, checked, resetValidation,
  } = useValidation();

  const { pathname } = useLocation();

  useLayoutEffect(() => {
    resetValidation({ search: searchText, filter }, {}, filter);
  }, []);

  const onSubmit = (evt) => {
    evt.preventDefault();
    handleSearchLoading(true);
    onSearch(values.search, pathname.slice(1), moviesData, checked);
  };

  const onToggleFilter = () => {
    handleSearchLoading(true);
    onSearch(values.search, pathname.slice(1), moviesData, !checked);
  };

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
          />

          <button
            aria-label="поиск"
            type="submit"
            className="search-form__button search-form__button_color_black"
          />

        </fieldset>
        <FilterCheckbox
          value={ checked || false }
          onChange={ onChange }
          onClick={ onToggleFilter }
        />
      </form>
    </section>
  );
}

export default SearchForm;
