import React from 'react'
import './news-post-card.scss'

class NewsPostCard extends React.Component {

  render () {
    return (
      <article className="news-post-card">
        <figure>
          {this.props.newsBubble &&
            <div className="post-badge">{this.props.newsBubble}</div>}
        </figure>
        <h2><a href="/page">Some Front Page News Right Here</a></h2>
      </article>
    );
  }
}

export default NewsPostCard;
