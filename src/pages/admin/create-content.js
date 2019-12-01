import React from 'react';
//import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Header from '../../components/header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTags, faNewspaper, faCalendarWeek } from '@fortawesome/free-solid-svg-icons';
import './create-content.scss';

class CreateContent extends React.Component {

  render () {
    return (
      <div>
        <Header type={'Admin'} />
        <main className="create-content-page">
          <h1>Create Content</h1>
          <ul className="create-content-types">
            <li>
              <div className="cc-type">
                <div className="cc-type-inner">
                  <a href="/admin/edit-post"><FontAwesomeIcon icon={faNewspaper} /></a>
                  <h4 className="cc-type-name"><a href="/admin/edit-post">News</a></h4>
                </div>
              </div>
            </li>
            <li>
              <div className="cc-type">
                <div className="cc-type-inner">
                  <a href="/admin/edit-post"><FontAwesomeIcon icon={faCalendarWeek} /></a>
                  <h4 className="cc-type-name"><a href="/admin/edit-post">Event</a></h4>
                </div>
              </div>
            </li>
            <li>
              <div className="cc-type">
                <div className="cc-type-inner">
                  <a href="/admin/edit-post"><FontAwesomeIcon icon={faTags} /></a>
                  <h4 className="cc-type-name"><a href="/admin/edit-post">Deal</a></h4>
                </div>
              </div>
            </li>
            <li>
              <div className="cc-type">
                <div className="cc-type-inner">
                  <a href="/admin/edit-post"><FontAwesomeIcon icon={faInstagram} /></a>
                  <h4 className="cc-type-name"><a href="/admin/edit-post">Instagram</a></h4>
                </div>
              </div>
            </li>
          </ul>
        </main>
      </div>
    );
  }
}

export default CreateContent;
