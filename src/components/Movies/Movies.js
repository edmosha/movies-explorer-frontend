import React, { useEffect } from 'react';
import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function Movies(
  {
    displayedMovies,
    movies,
    savedMovies,
    handleDisplayedMovies,
    handleClickMoreButton,
    isAllCardsOnPage,
    handleMovieLike,
    handleMovieDislike,
  },
) {
  useEffect(() => {
    handleDisplayedMovies(movies);
  }, []);

  const handleIsLiked = (movie) => {
    for (let i = 0; i < savedMovies.length; i++) {
      if (savedMovies[i].movieId === movie.id) return true;
    }

    return false;
  };

  const onClickMoreButton = () => {
    handleClickMoreButton(movies);
  };

  return (
    <main className="movies">
      <SearchForm />
      { movies
        && (
          <MoviesCardList
            movies={ displayedMovies }
            onClickMoreButton={ onClickMoreButton }
            isAllCardsOnPage={ isAllCardsOnPage }
            handleMovieLike={ handleMovieLike }
            handleMovieDislike={ handleMovieDislike }
            handleIsLiked={ handleIsLiked }
          />
        ) }
    </main>
  );
}

export default Movies;
