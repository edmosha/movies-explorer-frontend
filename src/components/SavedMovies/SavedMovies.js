import React, { useEffect } from 'react';
import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function SavedMovies(
  {
    displayedMovies,
    movies,
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

  const handleIsLiked = (movie) => !!movie;

  const onClickMoreButton = () => {
    handleClickMoreButton(movies);
  };

  return (
    <main className="movies">
      <SearchForm />
      { movies
        ? (
          <MoviesCardList
            movies={ displayedMovies }
            onClickMoreButton={ onClickMoreButton }
            isAllCardsOnPage={ isAllCardsOnPage }
            handleMovieLike={ handleMovieLike }
            handleMovieDislike={ handleMovieDislike }
            handleIsLiked={ handleIsLiked }
          />
        )
        : <p>Ничего не найдено</p> }
    </main>
  );
}

export default SavedMovies;
