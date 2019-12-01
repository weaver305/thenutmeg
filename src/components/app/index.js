import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { CreateContent, EditPost, Posts } from '../../pages/admin';
import Feed from '../../pages/feed';
import Page from '../../pages/page';
import './reset.css';
import './fonts.css';
import './app.scss';

class App extends React.Component {

  render () {
    return (
      <div>
      <Router>
        <Switch>
          <Route exact path='/' component={Feed}/>
          <Route exact path='/page' component={Page}/>
          <Route exact path='/admin' component={Posts}/>
          <Route exact path='/admin/create-content' component={CreateContent}/>
          <Route exact path='/admin/edit-post' component={EditPost}/>
        </Switch>
      </Router>
      </div>
    )
  }
}

export default App;
