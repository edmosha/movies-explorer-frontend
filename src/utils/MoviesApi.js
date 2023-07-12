import { moviesApiUrl } from "./constants";

class MoviesApi {
  constructor(baseUrl) {
    this._baseUrl = baseUrl;
  }

  getMovies() {
   return fetch(this._baseUrl, { method: 'GET' }).then(res => res.json())
  }
}

const moviesApi = new MoviesApi(moviesApiUrl + '/beatfilm-movies');
export default moviesApi;