import { MAX_DURATION_OF_SHORT_FILM } from "./constants";

const filterMovies = (str, isShortMovie, movies) => movies.filter((movie) => {
  const {
    nameRU, nameEN, description, director, country, year, duration,
  } = movie;
  const aboutMoviesText = `${ nameRU } ${ nameEN } ${ description } ${ director } ${ country } ${ year }`;

  if (isShortMovie && duration > MAX_DURATION_OF_SHORT_FILM) return false;

  return aboutMoviesText.toLowerCase().includes(str.toLowerCase());
});

export default filterMovies;
