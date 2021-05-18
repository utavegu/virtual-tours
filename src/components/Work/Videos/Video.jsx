import React from 'react';
import PropTypes from 'prop-types';
// import s from './Video.module.css';

function Video({video}) {
  const EMBEDDED_URL = 'https://www.youtube.com/embed/';
  // const WATCH_URL = 'https://www.youtube.com/watch?v=';
  return (
    <>
      {/* <h2>{video.name}</h2> */}
      <div className="responsive_container">
        <iframe
          width="560"
          height="315"
          src={EMBEDDED_URL + video.id}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
        >
          Обновите ваш браузер!
        </iframe>
      </div>
    </>
  )
}

Video.propTypes = {
  video: PropTypes.object,
}

export default Video

