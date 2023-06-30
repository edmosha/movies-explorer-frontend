import './App.css';
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import AuthorizedHeader from '../AuthorizedHeader/AuthorizedHeader';
import UnauthorizedHeader from '../UnauthorizedHeader/UnauthorizedHeader';
import Movies from '../Movies/Movies';
import CurrentScreenResolution from '../contexts/CurrentScreenResolution';
import MobileRightPanel from '../MobileRightPanel/MobileRightPanel';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleOpenMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (

  // подставить нужное значение разрешения экрана

    <CurrentScreenResolution.Provider value="1280">
      <div className="App">

        { isLoggedIn
          ? <AuthorizedHeader handleOpenMobileMenu={handleOpenMobileMenu} />
          : <UnauthorizedHeader /> }

        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/saved-movies" element={<Movies />} />
          <Route path="/signin" element={<Movies />} />
          <Route path="/signup" element={<Movies />} />
          <Route path="/profile" element={<Movies />} />
        </Routes>

        <Footer />

        <MobileRightPanel isOpen={isMobileMenuOpen} />
      </div>
    </CurrentScreenResolution.Provider>
  );
}

export default App;
