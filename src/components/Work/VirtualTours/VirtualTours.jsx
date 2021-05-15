import React, { useState } from 'react';
import PropTypes from 'prop-types';
import s from './VirtualTours.module.css';
import Tour from './Tour';

function VirtualTours({tours}) {
  const [displayedTours, setDisplayedTours] = useState(1);

  return (
    <>
      {displayedTours !== tours.length
      &&
      <button onClick={() => {setDisplayedTours(displayedTours + 1)}}>Показать ещё тур...</button>}
      {tours
        .slice(0, displayedTours)
        .map(tour => <Tour tour={tour} key={tour.name} />)
      }
    </>
  )
}

VirtualTours.propTypes = {

}

export default VirtualTours

