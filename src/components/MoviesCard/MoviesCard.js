import React from 'react';
import tempCardImage from '../../images/card-photo-temp.jpg';
import './MoviesCard.css';

function MoviesCard({ isLiked }) {
  const likeButtonClass = `movies-card__like-btn movies-card__like-btn_${isLiked ? 'active' : ''}`;

  return (
    <li className="movies-card-list__item">
      <article className="movies-card">

        <img src={tempCardImage} alt="" className="movies-card__image" />

        <div className="movies-card__title-container">
          <h2 className="movies-card__title">33 слова о дизайне</h2>
          <button
            aria-label="save a movie"
            type="button"
            className={likeButtonClass}
          />
        </div>

        <p className="movies-card__duration">1ч 42м</p>

      </article>
    </li>
  );
}

export default MoviesCard;
