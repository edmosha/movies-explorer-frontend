import React from 'react';
import './FilterCheckbox.css';

function FilterCheckbox() {
  return (
    <label className="filter-checkbox__container" htmlFor="filter-checkbox">
      <input type="checkbox" className="filter-checkbox__input" id="filter-checkbox" />
      <span className="filter-checkbox__new-checkbox" />
      <span className="filter-checkbox__text">Короткометражки</span>
    </label>
  );
}

export default FilterCheckbox;
