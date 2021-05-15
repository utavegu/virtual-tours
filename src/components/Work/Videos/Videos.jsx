import React, { useState } from 'react';
import PropTypes from 'prop-types';
import s from './Videos.module.css';
import Video from './Video';

function Videos({videos}) {
  const [displayedVideos, setDisplayedVideos] = useState(1);
  const EMBEDDED_URL = 'https://www.youtube.com/embed/';
  // const WATCH_URL = 'https://www.youtube.com/watch?v=';

  return (
    <>
      <span>*видео интерактивно, вы можете его вращать</span>
      {videos
        .slice(0, displayedVideos)
        .map(video => <Video video={video} key={video.name} />)
      }
      {displayedVideos !== videos.length
      &&
      <button className="btn" onClick={() => {setDisplayedVideos(displayedVideos + 1)}}>Показать ещё видео...</button>}
    </>
  )
}

Videos.propTypes = {

}

export default Videos

