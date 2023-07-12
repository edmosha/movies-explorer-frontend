class MainApi {
  constructor(baseUrl) {
    this._baseUrl = baseUrl;
  }

  async _request(url, options) {
    const res = await fetch(this._baseUrl + url, { ...options, credentials: 'include' })
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
    })
  }

  login({ email, password }) {
    return this._request('/signin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    })
  }

  unlogin() {
    return this._request('/signout');
  }

  like({ country, director, duration, year, description, image, trailerLink, movieId, nameRU, nameEN }) {
    return this._request('/movies', {
      method: 'POST',
      'content-type': 'Application/json',
      body: {
        country,
        director,
        duration,
        year,
        description,
        image: image.url,
        trailerLink,
        thumbnail: image.formats.thumbnail,
        movieId,
        nameRU,
        nameEN,
      },
    })
  }

  getSavedMovies() {
    return this._request('/movies')
  }
}

// const mainApi = new MainApi('https://api.movies-exp.edmosha.nomoreparties.sbs');
const mainApi = new MainApi('http://localhost:3001');
export default mainApi;