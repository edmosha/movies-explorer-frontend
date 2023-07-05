import React, { useContext } from 'react';
import Header from '../Header/Header';
import './AuthorizedHeader.css';
import CurrentScreenResolution from '../contexts/CurrentScreenResolution';
import HeaderNavigation from '../HeaderNavigatoin/HeaderNavigatoin';
import HamburgerButton from '../HamburgerButton/HamburgerButton';

function AuthorizedHeader({ handleOpenMobileMenu }) {
  const screenResolution = useContext(CurrentScreenResolution);

  return (
    <Header>
      {
        screenResolution <= 768
          ? <HamburgerButton onClick={handleOpenMobileMenu} />
          : <HeaderNavigation />
      }
    </Header>
  );
}

export default AuthorizedHeader;
