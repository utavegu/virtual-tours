import React from 'react';
import PropTypes from 'prop-types';
import s from './Videos.module.css';
import Video from './Video';

function Videos({videos}) {
  const EMBEDDED_URL = 'https://www.youtube.com/embed/';
  // const WATCH_URL = 'https://www.youtube.com/watch?v=';

  return (
    <>
      <span>*видео интерактивно, вы можете его вращать</span>
      <button>Показать ещё видео...</button>
      {videos.map(video => <Video video={video} key={video.name} />)}
    </>
  )
}

Videos.propTypes = {

}

export default Videos

