import React, { useState } from 'react';
import PropTypes from 'prop-types';
import s from './VirtualTours.module.css';
import Tour from './Tour';

function VirtualTours({tours}) {
  const [displayedTours, setDisplayedTours] = useState(1);

  return (
    <>
      {tours
        .slice(0, displayedTours)
        .map(tour => <Tour tour={tour} key={tour.name} />)
      }
      {displayedTours !== tours.length
      &&
      <button className="btn" onClick={() => {setDisplayedTours(displayedTours + 1)}}>Показать ещё тур...</button>}
    </>
  )
}

VirtualTours.propTypes = {

}

export default VirtualTours

