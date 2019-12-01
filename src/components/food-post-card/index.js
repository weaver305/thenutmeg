import React from 'react'
import './food-post-card.scss'

class FoodPostCard extends React.Component {

  render () {
    return (
      <article className="food-post-card">
        <figure></figure>
        <h2>Bacon and Chicken Burrito!!</h2>
        <h3>Chillis Resteraunt</h3>
        <div className="food-tags">
          <span>#newitem, #chicken</span>
        </div>
      </article>
    )
  }
}

export default FoodPostCard;
