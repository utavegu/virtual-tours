import React from 'react';
import PropTypes from 'prop-types';
// import s from './Tour.module.css';

function Tour({tour}) {
  return (
    <>
      {/* <h2 className={s.heading}>{tour.name}</h2> */}
      <div className="responsive_container">
        <a href={tour.url} target="_blank" rel="noreferrer" title={`Посмотреть виртуальный тур "${tour.name}"`}>
          <img src={tour.poster} alt={tour.name} />
        </a>
        {/*
        Решение, пока заказчик не подключил SSL-сертификат
        <iframe
          width="900"
          height="500"
          // src="http://test.photo-largo.lclients.ru/dudergof_master_2019_01_24/"
          src={tour.url}
          title="Название работы"
          frameBorder="0"
          allowFullScreen
        >
          Обновите ваш браузер!
        </iframe>
        */}
      </div>
    </>
  )
}

Tour.propTypes = {
  tour: PropTypes.object,
}

export default Tour

