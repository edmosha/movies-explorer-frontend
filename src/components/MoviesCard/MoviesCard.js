import React from 'react';
import './MoviesCard.css';
import { moviesApiUrl } from '../../utils/constants';

function MoviesCard({
  movie, isLiked, handleLike, handleDislike,
}) {
  const likeButtonClass = `movies-card__like-btn movies-card__like-btn_${ isLiked ? 'active' : '' }`;

  const handleDuration = () => {
    const hours = Math.floor(movie.duration / 60);
    const min = movie.duration % 60;

    return ((hours ? `${ hours } ч ` : '') + (min ? `${ min } м ` : ''));
  };

  const onLikeClick = () => {
    if (isLiked) {
      handleDislike(movie.id || movie.movieId);
    } else {
      handleLike(movie);
    }
  };

  return (
    <li className="movies-card-list__item">
      <article className="movies-card">

        <img
          src={ moviesApiUrl + (movie.image.url || movie.image) }
          alt={ movie.nameRU }
          className="movies-card__image"
        />

        <div className="movies-card__title-container">
          <h2 className="movies-card__title">{ movie.nameRU }</h2>
          <button
            aria-label="сохранить фильм"
            type="button"
            className={ likeButtonClass }
            onClick={ onLikeClick }
          />
        </div>

        <p className="movies-card__duration">{ handleDuration() }</p>

      </article>
    </li>
  );
}

export default MoviesCard;
