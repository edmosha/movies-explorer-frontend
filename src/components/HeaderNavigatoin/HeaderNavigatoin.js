import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './HeaderNavigation.css';

function HeaderNavigation({ children }) {
  return (
    <>
      <nav>
        <ul className="header__menu">
          { children }
          <li>
            <NavLink to="/movies" className="header__menu-link">Фильмы</NavLink>
          </li>
          <li>
            <NavLink to="/saved-movies" className="header__menu-link">Сохранённые фильмы</NavLink>
          </li>
        </ul>
      </nav>

      <Link to="/profile" className="header__account">Аккаунт</Link>
    </>
  );
}

export default HeaderNavigation;
