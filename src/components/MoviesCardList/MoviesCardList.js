import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList() {
  const n = 7;

  return (
    <section className="movies-card-list">
      <ul className="movies-card-list__card-container">

        <MoviesCard key="123" isLiked />

        {[...Array(n)].map((card, i) => <MoviesCard key={i} />)}

      </ul>
      <button
        type="button"
        className="movies-card-list__show-more-btn"
      >
        Ещё
      </button>
    </section>
  );
}

export default MoviesCardList;
