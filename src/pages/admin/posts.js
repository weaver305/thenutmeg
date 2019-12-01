import React from 'react';
//import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import AdminPost from './admin-post';
import Header from '../../components/header';
import './posts.scss';

class Posts extends React.Component {

  render () {
    return (
      <div className="admin-posts-page">
        <Header type={'Admin'} />
        <main>
          <h1>Posts</h1>
          <section className="app-body">
            <AdminPost />
            <AdminPost />
          </section>
          <footer>
            <a href="/admin/create-content" className="create-post-btn">New Post</a>
          </footer>
        </main>
      </div>
    );
  }
}

export default Posts;
