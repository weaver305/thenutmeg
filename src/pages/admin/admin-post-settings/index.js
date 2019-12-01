import React from 'react';
import './admin-post-settings.scss';

class AdminPostSettings extends React.Component {

  render () {
    return (
      <div className="admin-post-settings">
        <ul>
          <li>
            <label>Type</label>
            <select>
              <option>Breaking News</option>
              <option>News</option>
              <option>Event</option>
            </select>
          </li>
          <li>
            <label>Status</label>
            <select>
              <option>Published</option>
              <option>Unpublished</option>
            </select>
          </li>
          <li>
            <label>Views</label>
            <input type="number" name="views" placeholder="0" />
          </li>
          <li>
            <label>Tags</label>
            <input type="text" name="tags" placeholder="#" />
          </li>
        </ul>
      </div>
    );
  }
}

export default AdminPostSettings;
