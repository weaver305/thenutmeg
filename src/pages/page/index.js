import React from 'react';
//import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import './page.scss';
import Header from '../../components/header';

class Page extends React.Component {

  render () {
    return (
      <div>
        <Header />
        <main className="post-page">
          <section className="post-body">
            <div className="view-count-label">192,329 Views</div>
            <h1>Some Front Page News Right Here</h1>
            <span className="post-timestamp">Posted on October 6, 2019, at 6:01 a.m.</span>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed eget ante sed erat iaculis dictum.Proin et sem vulputate, molestie
            lacus in, pulvinar neque. Nullam nec interdum arcu. </p>
            <h2>This is a sub title here.</h2>
            <p>Cras posuere mollis ante et feugiat. Donec magna nunc,
            egestas quis erat in, malesuada ultricies libero. Nam eget
            enim vehicula, rutrum leo vitae, tempus magna.</p>
            <p>Cras posuere mollis ante et feugiat. Donec magna nunc,
            egestas quis erat in, malesuada ultricies libero. Nam eget
            enim vehicula, rutrum leo vitae, tempus magna. </p>
            <h2>This is a sub title here.</h2>
            <p>Cras posuere mollis ante et feugiat. Donec magna nunc,
            egestas quis erat in, malesuada ultricies libero. Nam eget
            enim vehicula, rutrum leo vitae, tempus magna. Ut eleifend
            feugiat dui, vel vehicula libero malesuada ut.</p>
          </section>
        </main>
      </div>
    );
  }
}

export default Page;
