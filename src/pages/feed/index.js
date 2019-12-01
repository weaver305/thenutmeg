import React from 'react';
//import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import './feed.scss';
import Header from '../../components/header';
import NewsPostCard from '../../components/news-post-card';
import InstagramPostCard from '../../components/instagram-post-card';
import VideoPostCard from '../../components/video-post-card';
import EventsCarousel from '../../components/events-carousel';
import EventPostCard from '../../components/event-post-card';
import DealPostCard from '../../components/deal-post-card';
import FoodPostCard from '../../components/food-post-card';

class Pages extends React.Component {

  render () {
    return (
      <div>
        <Header />
        <main className="feed-page">
          <header>What's Happening Now?</header>
          <NewsPostCard newsBubble="Breaking" />
          <NewsPostCard />
          <InstagramPostCard />
          <VideoPostCard />
          <EventsCarousel />
          <DealPostCard />
          <EventPostCard />
          <FoodPostCard />
        </main>
      </div>
    );
  }
}

export default Pages;
