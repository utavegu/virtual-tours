import React, { useState } from 'react';
import PropTypes from 'prop-types';
import s from './VirtualTours.module.css';
import Tour from './Tour';

function VirtualTours({tours}) {
  const [displayedTours, setDisplayedTours] = useState(1);

  console.log(displayedTours);
  console.log(tours.length);

  return (
    <div>
      {displayedTours !== tours.length > 0
      &&
      <div className={s.controls}>
        <button
          className="btn"
          onClick={() => {setDisplayedTours(displayedTours - 1)}}
          disabled={displayedTours === 1}
        >
          Предыдущий
        </button>
        <button
          className="btn"
          onClick={() => {setDisplayedTours(displayedTours + 1)}}
          disabled={displayedTours === tours.length}
        >
          Следующий
        </button>
      </div>}
      {tours
        .slice(displayedTours-1, displayedTours)
        .map(tour => <Tour tour={tour} key={tour.name} />)
      }
    </div>
  )
}

VirtualTours.propTypes = {

}

export default VirtualTours

