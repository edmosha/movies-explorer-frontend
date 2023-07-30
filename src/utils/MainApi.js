import { mainApiUrl } from './constants';

class MainApi {
  constructor(baseUrl) {
    this._baseUrl = baseUrl;
  }

  async _request(url, options) {
    const res = await fetch(this._baseUrl + url, { ...options, credentials: 'include' });
    const resJson = await res.json();

    if (!res.ok) {
      throw new Error(resJson.message);
    }

    return resJson;
  }

  register({ name, email, password }) {
    return this._request('/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password }),
    });
  }

  login({ email, password }) {
    return this._request('/signin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
  }

  logout() {
    return this._request('/signout');
  }

  getAboutMe() {
    return this._request('/users/me');
  }

  updateAboutMe({ name, email }) {
    return this._request('/users/me', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email }),
    });
  }

  like({
    country, director, duration, year, description, image, trailerLink, id, nameRU, nameEN,
  }) {
    return this._request('/movies', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        country,
        director,
        duration,
        year,
        description,
        image: image.url,
        trailerLink,
        thumbnail: image.formats.thumbnail.url,
        movieId: id,
        nameRU,
        nameEN,
      }),
    });
  }

  dislike(id) {
    return this._request(`/movies/${ id }`, {
      method: 'DELETE',
    });
  }

  getSavedMovies() {
    return this._request('/movies');
  }
}

const mainApi = new MainApi(mainApiUrl);
export default mainApi;
