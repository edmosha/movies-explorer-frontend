import React, { useEffect, useLayoutEffect, useState } from 'react';
import Movies from "../Movies/Movies";

function SavedMovies(
  {
    displayedMovies,
    filteredMovies,
    moviesData,
    handleDisplayedMovies,
    handleFilteredMovies,
    handleClickMoreButton,
    handleMovieLike,
    handleMovieDislike,
    handleSearch,
  },
) {

  const [ isSearchLoading, setIsSearchLoading ] = useState(true);
  const [ searchText, setSearchText ] = useState('');
  const [ filter, setFilter ] = useState(false);

  useEffect(() => {
    const search = localStorage.getItem('saved-movies_search-text');
    const isShortMovie = localStorage.getItem('saved-movies_is-short-movie');
    const movies = localStorage.getItem('saved-movies_movies');

    if(search && isShortMovie && movies) {
      handleFilteredMovies(JSON.parse(movies));
      setSearchText(search);
      setFilter(JSON.parse(isShortMovie));
    } else {
      handleFilteredMovies(moviesData);
    }

    setIsSearchLoading(false);
  }, []);

  const handleIsLiked = (movie) => !!movie;

  return (
    !isSearchLoading &&
      <Movies displayedMovies={ displayedMovies }
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
  );
}

export default SavedMovies;
