import React from 'react';
import { NavLink } from 'react-router-dom';
import HeaderNavigation from '../HeaderNavigatoin/HeaderNavigatoin';
import './MobileRightPanel.css';

function MobileRightPanel({ isOpen }) {
  const mobilePanelClass = `mobile-right-panel ${isOpen ? 'mobile-right-panel__opened' : ''}`;

  return (
    <section className={mobilePanelClass}>
      <div className="mobile-right-panel__container">
        <HeaderNavigation>
          <li>
            <NavLink to="/main" className="header__menu-link">Главная</NavLink>
          </li>
        </HeaderNavigation>
      </div>
    </section>
  );
}

export default MobileRightPanel;
