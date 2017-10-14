import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Header from './container/Header.js';
import Footer from './container/Footer.js';
import Featured from './container/Featured.js';
import About from './container/About.js';
import Article from './container/Article.js';
import logo from './logo.svg';
import './App.css';
import './Custom.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="react-with-polymer-cms"></Header>
        <Route exact path="/" component={Featured} />
        <Route exact path="/about" component={About} />
        <Route exact path="/article" component={Article} />
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
