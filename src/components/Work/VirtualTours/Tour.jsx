import React from 'react';
import PropTypes from 'prop-types';
import s from './Tour.module.css';

function Tour({tour}) {
  return (
    <>
      <h2>{tour.name}</h2>
      <div className="responsive_container">
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
      </div>
    </>
  )
}

Tour.propTypes = {

}

export default Tour

