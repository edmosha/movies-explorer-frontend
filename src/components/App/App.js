import './App.css';
import React, { useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import AuthorizedHeader from '../AuthorizedHeader/AuthorizedHeader';
import UnauthorizedHeader from '../UnauthorizedHeader/UnauthorizedHeader';
import Movies from '../Movies/Movies';
import CurrentScreenResolution from '../contexts/CurrentScreenResolution';
import MobileRightPanel from '../MobileRightPanel/MobileRightPanel';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Profile from '../Profile/Profile';
import Page404 from '../Page404/Page404';
import useWindowSize from '../hooks/useWindowSize';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const { width } = useWindowSize();

  const handleOpenMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleHeader = () => (
    isLoggedIn
      ? <AuthorizedHeader handleOpenMobileMenu={handleOpenMobileMenu} />
      : <UnauthorizedHeader />
  );

  const { pathname } = useLocation();
  const hiddenHeaderPathList = new Set(['/signin', '/signup', '/404']);
  const hiddenFooterPathList = new Set(['/profile', '/signin', '/signup', '/404']);

  return (

  // подставить нужное значение разрешения экрана

    <CurrentScreenResolution.Provider value={width}>
      <div className="App">

        { !hiddenHeaderPathList.has(pathname) && handleHeader() }

        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/saved-movies" element={<Movies />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/404" element={<Page404 />} />
        </Routes>

        { !hiddenFooterPathList.has(pathname) && <Footer />}

        <MobileRightPanel isOpen={isMobileMenuOpen} />
      </div>
    </CurrentScreenResolution.Provider>
  );
}

export default App;
