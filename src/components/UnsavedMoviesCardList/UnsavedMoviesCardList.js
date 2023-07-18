import React from 'react';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function UnsavedMoviesCardList(
  {
    displayedMovies,
    movies,
    savedMovies,
    onClickMoreButton,
    isAllCardsOnPage,
    handleMovieLike,
    handleMovieDislike,
  },
) {
  const handleIsLiked = (movie) => {
    for (let i = 0; i < savedMovies.length; i++) {
      if (savedMovies[i].movieId === movie.id) return true;
    }

    return false;
  };

  return (
    <MoviesCardList
      displayedMovies={ displayedMovies }
      movies={ movies }
      onClickMoreButton={ onClickMoreButton }
      isAllCardsOnPage={ isAllCardsOnPage }
      handleMovieLike={ handleMovieLike }
      handleMovieDislike={ handleMovieDislike }
      handleIsLiked={ handleIsLiked }
    />
  );
}

export default UnsavedMoviesCardList;
