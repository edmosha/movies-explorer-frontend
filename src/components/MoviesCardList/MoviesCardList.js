import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList(
  {
    movies,
    handleIsLiked,
    onClickMoreButton,
    isAllCardsOnPage,
    handleMovieLike,
    handleMovieDislike,
  },
) {
  return (
    <section className="movies-card-list">
      <ul className="movies-card-list__card-container">

        { movies.map((movie) => (
          <MoviesCard
            key={ movie.id || movie.movieId }
            movie={ movie }
            isLiked={ handleIsLiked(movie) }
            handleLike={ handleMovieLike }
            handleDislike={ handleMovieDislike }
          />
        )) }

      </ul>
      { !isAllCardsOnPage
        && (
          <button
            type="button"
            className="movies-card-list__show-more-btn"
            onClick={ onClickMoreButton }
          >
            Ещё
          </button>
        ) }
    </section>
  );
}

export default MoviesCardList;
