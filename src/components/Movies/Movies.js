import React from 'react';
import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function Movies({ movies, isLoading, onClickMoreButton, isAllCardsOnPage }) {
  return (
    <main className="movies">
      <SearchForm />
      { movies
        ? <MoviesCardList movies={ movies }
                          onClickMoreButton={onClickMoreButton}
                          isAllCardsOnPage={isAllCardsOnPage}
        />
        : <p>Ничего не найдено</p>
      }
    </main>
  );
}

export default Movies;
