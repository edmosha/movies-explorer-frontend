import React from 'react';
import './FilterCheckbox.css';

function FilterCheckbox({ value, onChange }) {
  return (
    <label className="filter-checkbox__container" htmlFor="filter-checkbox">
      <input
        value={ !value }
        onChange={ onChange }
        checked={ value }
        type="checkbox"
        name="filter"
        className="filter-checkbox__input"
        id="filter-checkbox"
      />
      <span className="filter-checkbox__new-checkbox" />
      <span className="filter-checkbox__text">Короткометражки</span>
    </label>
  );
}

export default FilterCheckbox;
