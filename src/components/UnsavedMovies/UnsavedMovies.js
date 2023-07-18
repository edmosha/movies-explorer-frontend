import React, { useEffect, useState } from 'react';
import Movies from "../Movies/Movies";

function UnsavedMovies(
  {
    displayedMovies,
    filteredMovies,
    savedMovies,
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
    const search = localStorage.getItem('movies_search-text');
    const isShortMovie = localStorage.getItem('movies_is-short-movie');
    const movies = localStorage.getItem('movies_movies');

    if(search && isShortMovie && movies) {
      handleFilteredMovies(JSON.parse(movies));
      setSearchText(search);
      setFilter(JSON.parse(isShortMovie));
    } else {
      handleFilteredMovies([]);
    }

    setIsSearchLoading(false);
  }, [])

  const handleIsLiked = (movie) => {
    for (let i = 0; i < savedMovies.length; i++) {
      if (savedMovies[i].movieId === movie.id) return true;
    }

    return false;
  };

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
            isSearchLoading={ isSearchLoading }
    />
  );
}

export default UnsavedMovies;
