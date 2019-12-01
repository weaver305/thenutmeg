import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import './event-post-card.scss';

class EventPostCard extends React.Component {

  render () {
    return (
      <article className="event-post-card">
        <figure>
          <div className="user-count">
            <FontAwesomeIcon icon={faUser} />
            <span>573</span>
          </div>
          <div className="event-badge">Trending</div>
        </figure>

        <h2>The BigE!</h2>
        <p>Springfield, MA | October 24, 2019</p>
      </article>
    );
  }
}

export default EventPostCard;
