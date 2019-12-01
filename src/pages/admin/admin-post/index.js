import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import './admin-post.scss';

class AdminPost extends React.Component {

  render () {
    return (
      <div className="admin-post">
        <div className="ap-timestamp">10/12</div>
        <div className="ap-info">
          <h3><a href="/admin/edit-post">Some Front Page News Right Here</a></h3>
          <div className="ap-opts">
            <ul>
              <li>Featured</li>
              <li>Published</li>
            </ul>
            <div>
              <FontAwesomeIcon className="delete-post-btn" icon={faTrashAlt} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AdminPost;
