import './App.css';
import React, { useState } from 'react';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import AuthPanel from '../AuthPanel/AuthPanel';
import HeaderMenu from '../HeaderFilmMenu/HeaderMenu';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <div className="App">
      <Header>
        { isLoggedIn ? <HeaderMenu /> : <AuthPanel /> }
      </Header>

      <Main />
      <Footer />
    </div>
  );
}

export default App;
