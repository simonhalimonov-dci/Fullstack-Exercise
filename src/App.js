import React, { Component } from 'react';
import './App.scss';

import Header from './components/Header';
import Hero from './components/Hero';
import Container from './components/Container';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Hero/>
        <Container>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, impedit quas. Fuga laboriosam repellat dolorum error nihil esse id libero vero officiis culpa blanditiis soluta maiores vitae veniam, atque quidem.</p>
        </Container>
      </div>
    );
  }
}

export default App;
