import React from 'react';
import './FilterCheckbox.css';

function FilterCheckbox() {
  return (
    <label className="filter-checkbox__container">
      <input type="checkbox" className="filter-checkbox__input" />
      <span className="filter-checkbox__new-checkbox" />
      <span className="filter-checkbox__text">Короткометражки</span>
    </label>
  );
}

export default FilterCheckbox;
