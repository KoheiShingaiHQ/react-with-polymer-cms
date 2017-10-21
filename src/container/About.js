import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import ContentsSquare from '../container/ContentsSquare.js';
import { firebaseDb } from '../firebase/';
import ReactDOM from 'react-dom';

class About extends Component {
  constructor(props) {
    super(props);
  }
  initAbout() {
    var about = firebaseDb.ref("about");
    about.on('value', function(snapshot){
      const val = snapshot.val();
      if (val) {
        var contentsSquareTag = document.createElement("section");
        contentsSquareTag.id = "contents-square";
        if (document.getElementById("about")) {
          document.getElementById("about").innerHTML = "";
          document.getElementById("about").appendChild(contentsSquareTag);          
          const square = React.createElement(ContentsSquare, {data : val.square});
          ReactDOM.render(square, document.getElementById("contents-square"));
          document.getElementsByTagName("footer")[0].style.opacity = 1;
        }
      }
    });
  }
  componentDidMount() {
    document.getElementsByTagName("footer")[0].style.opacity = 0;
    this.initAbout();
  }
  render() {
    return ( <main id="about"></main> );
  }
}

export default About;