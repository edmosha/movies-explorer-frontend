import './App.css';
import React, { useEffect, useState } from 'react';
import {
  Route, Routes, useLocation, useNavigate,
} from 'react-router-dom';
import useWindowSize from '../hooks/useWindowSize';
import handleCardsParams from '../../utils/handleCardsParams';
import moviesApi from '../../utils/MoviesApi';
import mainApi from '../../utils/MainApi';
import CurrentUser from '../contexts/CurrentUser';
import CurrentScreenResolution from '../contexts/CurrentScreenResolution';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Main from '../Main/Main';
import AuthorizedHeader from '../AuthorizedHeader/AuthorizedHeader';
import UnauthorizedHeader from '../UnauthorizedHeader/UnauthorizedHeader';
import MobileRightPanel from '../MobileRightPanel/MobileRightPanel';
import Footer from '../Footer/Footer';
import UnsavedMovies from '../UnsavedMovies/UnsavedMovies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Profile from '../Profile/Profile';
import Page404 from '../Page404/Page404';
import InfoPopup from '../InfoPopup/InfoPopup';
import Preloader from '../Preloader/Preloader';
import filterMovies from '../../utils/filterMovies';

function App() {
  // global
  const [isLoading, setIsLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState({ _id: '', name: '', email: '' });
  const [loggedIn, setLoggedIn] = useState(false);

  // movies
  const [cardsLoad, setCardsLoad] = useState(0);
  const [allMovies, setAllMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [displayedMovies, setDisplayedMovies] = useState([]);

  // other
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [infoPopupParams, setInfoPopupParams] = useState({});

  const { width } = useWindowSize();
  const navigate = useNavigate();

  useEffect(() => {
    setCardsLoad(handleCardsParams(width).cardsLoad);
  }, [width]);

  useEffect(() => {
    if (localStorage.getItem('user')) {
      mainApi.getAboutMe()
        .then((user) => {
          setCurrentUser((user));
          setLoggedIn(true);
          setIsLoading(false);
        })
    } else {
      setIsLoading(false);
    }
  }, []);

  // info pop-up logic

  const handleInfoPopupClose = () => {
    setInfoPopupParams({ ...infoPopupParams, isOpen: false });
  };

  const handleError = (error, { onClose } = { onClose: handleInfoPopupClose }) => {
    setInfoPopupParams({
      message: error.message,
      error: true,
      isOpen: true,
      onClose,
    });
  };

  const handleOk = (messageText, { onClose } = { onClose: handleInfoPopupClose }) => {
    setInfoPopupParams({
      message: messageText,
      error: false,
      isOpen: true,
      onClose,
    });
  };

  // register and authorization logic

  const handleRegister = (data) => mainApi.register(data)
    .then(() => handleOk('Вы зарегистрированны!', {
      onClose: () => {
        const { email, password } = data;
        return mainApi.login({ email, password })
          .then((res) => {
            localStorage.setItem('user', res._id);
            setCurrentUser(res);
            setLoggedIn(true);
            handleInfoPopupClose();
            navigate('/movies', { replace: true });
          });
      },
    }))
    .catch((err) => handleError(err));

  const handleLogin = (data) => mainApi.login(data)
    .then((res) => {
      localStorage.setItem('user', res._id);
      setCurrentUser(res);
      handleOk('Вы вошли в аккаунт!', {
        onClose: () => {
          setLoggedIn(true);
          handleInfoPopupClose();
          navigate('/movies', { replace: true });
        },
      });
    })
    .catch((err) => handleError(err));

  const handleLogout = () => mainApi.logout()
    .then(() => {
      const deleteList = ['user',
        'movies_search-text',
        'movies_is-short-movie',
        'movies_movies',
        'saved-movies_search-text',
        'saved-movies_is-short-movie',
        'saved-movies_movies',
      ];

      deleteList.forEach((item) => localStorage.removeItem(item));

      handleOk('Вы вышли из акканта. Будем ждать вас снова!', {
        onClose: () => {
          handleInfoPopupClose();
          setCurrentUser({});
          setLoggedIn(false);
          navigate('/', { replace: true });
        },
      });
    })
    .catch((err) => handleError(err));

  // user and movies logic

  const handleUpdateProfile = (data) => mainApi.updateAboutMe(data)
    .then(() => {
      setCurrentUser({ ...currentUser, name: data.name, email: data.email });
      handleOk('Данные профиля успешно обнновлены!');
    })
    .catch((err) => handleError(err));

  const getAllMovies = () => Promise.all([moviesApi.getMovies(), mainApi.getSavedMovies()])
    .then(([moviesData, savedMoviesData]) => {
      setAllMovies(moviesData);
      setSavedMovies(savedMoviesData);
    })
    .catch((err) => handleError(err));

  const getSavedMovies = () => mainApi.getSavedMovies()
    .then((moviesData) => {
      setSavedMovies(moviesData);
      return moviesData;
    })
    .catch((err) => handleError(err));

  const handleSearch = (searchText, url, movies, filter = false) => {
    if (!searchText && url === 'movies') {
      setFilteredMovies([]);
      handleError({ message: 'Запрос не может быть пустым!' });
      return;
    }

    const filteredMoviesData = filterMovies(searchText, filter, movies);
    setFilteredMovies(filteredMoviesData);

    localStorage.setItem(`${ url }_search-text`, searchText);
    localStorage.setItem(`${ url }_is-short-movie`, String(filter));
    localStorage.setItem(`${ url }_movies`, JSON.stringify(filteredMoviesData));
  };

  const handleClickMoreButton = (movies) => {
    if (movies.length === displayedMovies.length) {
      return;
    }

    const diff = movies.length - displayedMovies.length;
    let index;

    if (diff < cardsLoad) {
      index = displayedMovies.length + diff;
    } else {
      index = displayedMovies.length + cardsLoad;
    }

    setDisplayedMovies([...displayedMovies, ...movies.slice(displayedMovies.length, index)]);
  };

  const handleDisplayedMovies = (movies) => {
    setDisplayedMovies(movies.slice(0, handleCardsParams(width).cardsInPage));
  };

  const handleFilteredMovies = (movies) => {
    setFilteredMovies(movies);
  };

  const handleMovieLike = (likedMovie) => mainApi.like(likedMovie)
    .then((movie) => setSavedMovies([...savedMovies, movie]));

  const handleMovieDislike = (movieId) => mainApi.dislike(movieId)
    .then(() => {
      setSavedMovies(savedMovies.filter((movie) => movie.movieId !== movieId));
      setDisplayedMovies(displayedMovies.filter((movie) => movie.movieId !== movieId));
      setFilteredMovies(filteredMovies.filter((movie) => movie.movieId !== movieId));
    });

  // header and footer render logic

  const { pathname } = useLocation();
  const visibleHeaderPathList = new Set(['/', '/movies', '/saved-movies', '/profile']);
  const visibleFooterPathList = new Set(['/', '/movies', '/saved-movies']);

  const handleOpenMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleHeader = () => (
    loggedIn
      ? <AuthorizedHeader handleOpenMobileMenu={ handleOpenMobileMenu } />
      : <UnauthorizedHeader />
  );

  return (
    <CurrentScreenResolution.Provider value={ width }>
      <CurrentUser.Provider value={ currentUser }>
        <div className="App">
          { !isLoading
            ? (
              <>
                { visibleHeaderPathList.has(pathname) && handleHeader() }

                <Routes>
                  <Route path="/" element={ <Main /> } />
                  <Route path="/signin" element={ <Login handleLogin={ handleLogin } /> } />
                  <Route path="/signup" element={ <Register handleRegister={ handleRegister } /> } />
                  <Route path="/*" element={ <Page404 /> } />

                  <Route
                    path="/movies"
                    element={ (
                      <ProtectedRoute
                        element={ UnsavedMovies }
                        loggedIn={ loggedIn }
                        displayedMovies={ displayedMovies }
                        filteredMovies={ filteredMovies }
                        savedMovies={ savedMovies }
                        moviesData={ allMovies }
                        getAllMovies={ getAllMovies }
                        handleDisplayedMovies={ handleDisplayedMovies }
                        handleFilteredMovies={ handleFilteredMovies }
                        handleClickMoreButton={ handleClickMoreButton }
                        handleMovieLike={ handleMovieLike }
                        handleMovieDislike={ handleMovieDislike }
                        handleSearch={ handleSearch }
                      />
                    ) }
                  />

                  <Route
                    path="/saved-movies"
                    element={ (
                      <ProtectedRoute
                        element={ SavedMovies }
                        loggedIn={ loggedIn }
                        displayedMovies={ displayedMovies }
                        filteredMovies={ filteredMovies }
                        moviesData={ savedMovies }
                        getSavedMovies={ getSavedMovies }
                        handleDisplayedMovies={ handleDisplayedMovies }
                        handleFilteredMovies={ handleFilteredMovies }
                        handleClickMoreButton={ handleClickMoreButton }
                        handleMovieLike={ handleMovieLike }
                        handleMovieDislike={ handleMovieDislike }
                        handleSearch={ handleSearch }
                      />
                    ) }
                  />

                  <Route
                    path="/profile"
                    element={ (
                      <ProtectedRoute
                        element={ Profile }
                        loggedIn={ loggedIn }
                        handleUpdateProfile={ handleUpdateProfile }
                        handleLogout={ handleLogout }
                      />
                    ) }
                  />

                </Routes>

                { visibleFooterPathList.has(pathname) && <Footer /> }

                <InfoPopup params={ infoPopupParams } />
                <MobileRightPanel isOpen={ isMobileMenuOpen } />
              </>
            )

            : <Preloader /> }
        </div>
      </CurrentUser.Provider>
    </CurrentScreenResolution.Provider>
  );
}

export default App;
