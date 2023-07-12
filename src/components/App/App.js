import './App.css';
import React, { useEffect, useState } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
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
import moviesApi from '../../utils/MoviesApi';
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import mainApi from "../../utils/MainApi";
import InfoPopup from "../InfoPopup/InfoPopup";

function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [ isMobileMenuOpen, setIsMobileMenuOpen ] = useState(false);
  const [ currentUser, setCurrentUser ] = useState({ _id: '', name: '', email: '' });
  const [ moviesData, setMoviesData ] = useState([]);
  const [ filteredMovies, setFilteredMovies ] = useState([]);
  const [ displayedMovies, setDisplayedMovies ] = useState([]);
  const [ cardsLoad, setCardsLoad ] = useState(0);

  const [ isLoading, setIsLoading ] = useState(true);

  // const [ isInfoPopupOpen, setIsInfoPopupOpen ] = useState(false);
  const [ infoPopupParams, setInfoPopupParams ] = useState({ message: '', error: false, isOpen: false });

  const { pathname } = useLocation();
  const hiddenHeaderPathList = new Set([ '/signin', '/signup', '/404' ]);
  const hiddenFooterPathList = new Set([ '/profile', '/signin', '/signup', '/404' ]);

  const { width } = useWindowSize();
  const navigate = useNavigate();

  useEffect(() => {
    setCardsLoad(handleCardsParams(width).cardsLoad);
  }, [ width ])

  useEffect(() => {
    Promise.all([ moviesApi.getMovies() ])
      .then(([ movies ]) => {
        setMoviesData(movies)
        console.log('config', handleCardsParams(width))
        // console.log(movies[1])
        setDisplayedMovies(movies.slice(0, handleCardsParams(width).cardsInPage));
      })
  }, [])

  const onClickMoreButton = () => {
    if (moviesData.length === displayedMovies.length) {
      console.log('кнопка пропадает')
      return 'кнопка пропадает';
    }

    const diff = moviesData.length - displayedMovies.length;
    let index;

    if (diff < cardsLoad) {
      index = displayedMovies.length + diff;
    } else {
      index = displayedMovies.length + cardsLoad;
    }
    console.log('cardsLoad', cardsLoad)
    console.log('displayedMovies.length', displayedMovies.length, 'index', index)
    console.log(moviesData.slice(displayedMovies.length, index))
    setDisplayedMovies([ ...displayedMovies, ...moviesData.slice(displayedMovies.length, index) ])
  }

  function handleCardsParams(screen) {
    switch (true) {
      case screen > 1124:
        return { cardsInPage: 16, cardsLoad: 8 };

      case screen > 768 && screen <= 1124:
        return { cardsInPage: 12, cardsLoad: 3 };

      case screen > 425 && screen <= 768:
        return { cardsInPage: 8, cardsLoad: 2 };

      case screen <= 425:
        return { cardsInPage: 5, cardsLoad: 2 };
    }
  }

  const handleError = (error) => {
    setInfoPopupParams({
      message: error.message,
      error: true,
      isOpen: true,
    })
  }

  const handleOk = (messageText) => {
    setInfoPopupParams({
      message: messageText,
      error: false,
      isOpen: true,
    })
  }

  const handleRegister = (data) => {
    mainApi.register(data)
      .then(() => handleOk('Вы зарегистрированны!'))
      .catch((err) => handleError(err))
  }

  const handleLogin = (data) => {
    mainApi.login(data)
      .then((res) => {
        localStorage.setItem('user', res._id);
        setCurrentUser(res);
        handleOk('Вы вошли в аккаунт!');
        navigate('/movies', { replace: true });
      })
      .catch((err) => handleError(err))
  }

  const handleUnlogin = (data) => {
    mainApi.unlogin()
      .then(() => {
        localStorage.removeItem('user');
        setCurrentUser({ _id: '', name: '', email: '' });
        handleOk('Вы вышли из акканта. Будем ждать вас снова!');
        navigate('/movies', { replace: true });
      })
      .catch((err) => handleError(err))
  }

  const handleInfoPopupClose = () => {
    setInfoPopupParams({ ...infoPopupParams, isOpen: false });
  }

  const handleMovies = () => {
    return moviesApi.getMovies().then(movies => {
      setMoviesData(movies);
    })
  }

  const handleCardLike = () => {
    mainApi.like
  }

  const handleOpenMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleHeader = () => (
    !!currentUser
      ? <AuthorizedHeader handleOpenMobileMenu={ handleOpenMobileMenu }/>
      : <UnauthorizedHeader/>
  );

  return (
    <CurrentScreenResolution.Provider value={ width }>
      <div className="App">

        { !hiddenHeaderPathList.has(pathname) && handleHeader() }

        <Routes>
          <Route path="/" element={ <Main/> }/>
          <Route path="/signin" element={ <Login handleLogin={ handleLogin }/> }/>
          <Route path="/signup" element={ <Register handleRegister={ handleRegister }/> }/>
          <Route path="/404" element={ <Page404/> }/>

          <Route path="/movies" element={
            <ProtectedRoute
              element={ Movies }
              user={ !!currentUser }
              movies={ displayedMovies }
              // handleMovies={handleMovies}
              onClickMoreButton={ onClickMoreButton }
              // buttonConfig={{
              //   isAllCardsOnPage: moviesData.length === displayedMovies.length
              // }}
              isAllCardsOnPage={ moviesData.length === displayedMovies.length }
              isLoading={ isLoading }
            /> }
          />

          <Route path="/saved-movies" element={
            <ProtectedRoute
              element={ Movies }
              user={ !!currentUser }
              onClickMoreButton={ onClickMoreButton }
            /> }
          />

          <Route path="/profile" element={
            <ProtectedRoute
              element={ Profile }
              user={ !!currentUser }
            /> }
          />

        </Routes>

        { !hiddenFooterPathList.has(pathname) && <Footer/> }

        <InfoPopup params={ infoPopupParams } onClose={ handleInfoPopupClose }/>

        <MobileRightPanel isOpen={ isMobileMenuOpen }/>
      </div>
    </CurrentScreenResolution.Provider>
  );
}

export default App;
