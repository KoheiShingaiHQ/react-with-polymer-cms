import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import ContentsFull from '../container/ContentsFull.js';
import ContentsHalf from '../container/ContentsHalf.js';
import { firebaseDb } from '../firebase/';
import ReactDOM from 'react-dom';

class Featured extends Component {
  constructor(props) {
    super(props);
  }
  initFeatured() {
    var featured = firebaseDb.ref("featured");
    featured.on('value', function(snapshot) {
      const val = snapshot.val();
      if (val) {
        var contentsFullTag = document.createElement("section");
        var contentsHalfTag = document.createElement("section");
        contentsFullTag.id = "contents-full";
        contentsHalfTag.id = "contents-half";
        if (document.getElementById("featured")) {
          document.getElementById("featured").innerHTML = "";
          document.getElementById("featured").appendChild(contentsFullTag);
          document.getElementById("featured").appendChild(contentsHalfTag);
          const full = React.createElement(ContentsFull, {data : val.full});
          const half = React.createElement(ContentsHalf, {data : val.half});
          ReactDOM.render(full, document.getElementById("contents-full"));
          ReactDOM.render(half, document.getElementById("contents-half"));
          document.getElementsByTagName("footer")[0].style.opacity = 1;
        }
      }
    });
  }
  componentDidMount() {
    document.getElementsByTagName("footer")[0].style.opacity = 0;
    this.initFeatured();
  }
  render() {
    return ( <main id="featured"></main> );
  }
}

export default Featured;