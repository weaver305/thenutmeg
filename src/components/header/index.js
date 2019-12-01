import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './header.scss';

class Header extends React.Component {

  render () {
    return (
      <header className="main-header">
        <FontAwesomeIcon icon={faBars} />
        <a href="/" className="main-title">TheNutmeg {this.props.type && ( '- ' + this.props.type) }</a>
      </header>
    )
  }
}

export default Header;
