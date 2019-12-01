import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';

import './video-post-card.scss';

class VideoPostCard extends React.Component {

  render() {

    return (
      <article className="video-post-card">
        <div className="vpc-container">
          <FontAwesomeIcon className="vpc-play-btn" icon={faPlayCircle} />
        </div>
        <h2>Some Video You Should Watch</h2>
      </article>
    );
  }
}

export default VideoPostCard;
