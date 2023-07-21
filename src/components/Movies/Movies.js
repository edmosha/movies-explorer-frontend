import React, { useEffect, useState } from 'react';
import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

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
  },
) {
  const [isSearchLoading, setIsSearchLoading] = useState(false);

  useEffect(() => {
    handleDisplayedMovies(filteredMovies);
    setIsSearchLoading(false);
  }, [filteredMovies]);

  const isAllCardsOnPage = filteredMovies.length === displayedMovies.length;

  const onClickMoreButton = () => {
    handleClickMoreButton(filteredMovies);
  };

  const handleSearchLoading = (value) => {
    setIsSearchLoading(value);
  };

  return (
    <main className="movies">
      <SearchForm
        moviesData={ moviesData }
        onSearch={ handleSearch }
        searchText={ searchText }
        filter={ filter }
        handleSearchLoading={ handleSearchLoading }
      />
      { !isSearchLoading && (
        displayedMovies.length
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
          : (<p className="movies__empty-search-text">Здесь пока пусто 👀</p>)
      )}
    </main>
  );
}

export default Movies;
