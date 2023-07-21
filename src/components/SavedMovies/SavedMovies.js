import React, { useEffect, useState } from 'react';
import Movies from '../Movies/Movies';
import Preloader from '../Preloader/Preloader';

function SavedMovies(
  {
    displayedMovies,
    filteredMovies,
    moviesData,
    getSavedMovies,
    handleDisplayedMovies,
    handleFilteredMovies,
    handleClickMoreButton,
    handleMovieLike,
    handleMovieDislike,
    handleSearch,
  },
) {
  const [isLoading, setIsLoading] = useState(true);
  const [searchText, setSearchText] = useState('');
  const [filter, setFilter] = useState(false);

  useEffect(() => {
    let search = localStorage.getItem('saved-movies_search-text');
    let isShortMovie = localStorage.getItem('saved-movies_is-short-movie');
    const movies = localStorage.getItem('saved-movies_movies');

    if (search && isShortMovie && movies) {
      handleFilteredMovies(JSON.parse(movies));
      setSearchText(search);
      setFilter(JSON.parse(isShortMovie));
    } else {
      search = '';
      isShortMovie = false;
      handleFilteredMovies(moviesData);
    }

    if (!moviesData.length) {
      getSavedMovies().then((data) => {
        handleSearch(search, 'saved-movies', data, JSON.parse(isShortMovie));
        setIsLoading(false);
      });
    } else {
      handleSearch(search, 'saved-movies', moviesData, JSON.parse(isShortMovie));
      setIsLoading(false);
    }
  }, []);

  const handleIsLiked = (movie) => !!movie;

  return (
    !isLoading
      ? (
        <Movies
          displayedMovies={ displayedMovies }
          filteredMovies={ filteredMovies }
          moviesData={ moviesData }
          handleDisplayedMovies={ handleDisplayedMovies }
          handleClickMoreButton={ handleClickMoreButton }
          handleMovieLike={ handleMovieLike }
          handleMovieDislike={ handleMovieDislike }
          handleIsLiked={ handleIsLiked }
          handleSearch={ handleSearch }
          searchText={ searchText }
          filter={ filter }
        />
      )
      : <Preloader />
  );
}

export default SavedMovies;
