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

  useEffect(() => {
    handleFilteredMovies(moviesData);

    if (!moviesData.length) {
      getSavedMovies().then((data) => {
        handleSearch('', 'saved-movies', data, false);
        setIsLoading(false);
      });
    } else {
      handleSearch('', 'saved-movies', moviesData, false);
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
          searchText=""
          filter={ false }
        />
      )
      : <Preloader />
  );
}

export default SavedMovies;
