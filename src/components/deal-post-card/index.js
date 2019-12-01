import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import './deal-post-card.scss';

class DealPostCard extends React.Component {

  render () {
    return (
      <article className="deal-post-card">
        <figure>
          <div className="deal-badge">Deal of The day</div>
        </figure>

        <h2>Some Great Deal For You To See</h2>
        <div className="deal-rating">
          <span>4.5</span>
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <span>(21)</span>
        </div>
        <div className="deal-price">
          <span className="original-price">$49</span>
          <span className="deal-price">$17</span>
          <div className="perct-off">74% off</div>
        </div>
      </article>
    );
  }
}

export default DealPostCard;
