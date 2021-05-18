import React, { useState } from 'react';
import PropTypes from 'prop-types';
import s from './Videos.module.css';
import Video from './Video';

function Videos({videos}) {
  const [displayedVideos, setDisplayedVideos] = useState(1);

  return (
    <div>
      {videos
        .slice(displayedVideos-1, displayedVideos)
        .map(video => <Video video={video} key={video.name} />)
      }
      {displayedVideos !== (videos.length > 0)
      &&
      <div className={s.controls}>
        <button
          className="btn"
          onClick={() => {setDisplayedVideos(displayedVideos - 1)}}
          disabled={displayedVideos === 1}
        >
          Предыдущий
        </button>
        <button
          className="btn"
          onClick={() => {setDisplayedVideos(displayedVideos + 1)}}
          disabled={displayedVideos === videos.length}
        >
          Следующий
        </button>
      </div>}
    </div>
  )
}

Videos.propTypes = {
  videos: PropTypes.arrayOf(PropTypes.object),
}

export default Videos

