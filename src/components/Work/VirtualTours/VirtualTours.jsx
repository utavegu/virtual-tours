import React from 'react';
import PropTypes from 'prop-types';
import s from './VirtualTours.module.css';
import Tour from './Tour';

function VirtualTours({tours}) {
  return (
    <>
      <button>Показать ещё тур...</button>
      {tours.map(tour => <Tour tour={tour} key={tour.name} />)}
    </>
  )
}

VirtualTours.propTypes = {

}

export default VirtualTours

