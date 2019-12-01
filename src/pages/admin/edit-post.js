import React from 'react';
import AdminPostSettings from './admin-post-settings';
import Header from '../../components/header';
import './edit-post.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

class EditPost extends React.Component {

  render () {
    return (
      <div>
        <Header type={'Admin'} />
        <main className="admin-edit-post">
          <header> <a href="/admin"><FontAwesomeIcon icon={faArrowLeft} /></a> <span>Admin- News post - Some Front Page News</span></header>
          <AdminPostSettings />
          <article className="aep-body">
            <h1>Some Front Page News Right Here</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Nam hendrerit nisi sed sollicitudin pellentesque. Nunc posuere
            purus rhoncus pulvinar aliquam. Ut aliquet tristique nisl vitae
            volutpat. Nulla aliquet porttitor venenatis. Donec a dui et dui
            fringilla consectetur id nec massa.</p>
            <figure></figure>
          </article>
        </main>
      </div>
    );
  }
}

export default EditPost;
