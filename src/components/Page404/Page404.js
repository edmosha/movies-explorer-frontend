import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Page404.css';

function Page404() {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  return (
    <section className="page-404">
      <h1 className="page-404__title">404</h1>
      <p className="page-404__subtitle">Страница не найдена</p>
      <button onClick={goBack} type="button" className="page-404__back">Назад</button>
    </section>
  );
}

export default Page404;
