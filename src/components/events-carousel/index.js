import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import './events-carousel.scss';

class EventsCarousel extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      events: [1,2,3]
    };
  }

  render () {
    
    return (
      <article className="events-carousel">
        <h2>Tonights Events</h2>
        <ul>
          {this.state.events.map((val, indx) =>
            <li key={indx} className="event-card">
              <article className="event-card-inner">
                <div className="user-count">
                  <FontAwesomeIcon icon={faUser} />
                  <span>458</span>
                </div>
              </article>
            </li>
          )}
        </ul>
      </article>
    );
  }
}

export default EventsCarousel;
