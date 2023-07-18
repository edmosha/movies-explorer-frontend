import React, { useEffect, useState } from 'react';
import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from "../Preloader/Preloader";

function Movies(
  {
    displayedMovies,
    filteredMovies,
    moviesData,
    handleDisplayedMovies,
    handleClickMoreButton,
    handleMovieLike,
    handleMovieDislike,
    handleSearch,
    handleIsLiked,
    searchText,
    filter,
    isSearchLoading
  },
) {

  useEffect(() => {
    handleDisplayedMovies(filteredMovies);
  }, [filteredMovies]);

  const isAllCardsOnPage = filteredMovies.length === displayedMovies.length;

  const onClickMoreButton = () => {
    handleClickMoreButton(filteredMovies);
  };

  return (
    <main className="movies">
      <SearchForm moviesData={ moviesData }
                  onSearch={ handleSearch }
                  searchText={ searchText }
                  filter={ filter }
      />
      {
        !!displayedMovies.length
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
        : ( <p className="movies__empty-search-text">Здесь пока пусто 👀</p>)
      }
    </main>
  );
}

export default Movies;
