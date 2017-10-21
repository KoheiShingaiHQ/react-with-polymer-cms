import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import ContentPanel from '../container/ContentPanel.js';
import SidePanel from '../container/SidePanel.js';
import { firebaseDb } from '../firebase/';
import ReactDOM from 'react-dom';

class Article extends Component {
  constructor(props) {
    super(props);
  }
  initArticle() {
    localStorage.language = localStorage.language || 'english';
    var language = localStorage.language.substring(0, 2);
    var article = firebaseDb.ref("article/" + language);
    article.on('value', function(snapshot){
      const val = snapshot.val();
      if (val) {
        var contentTag = document.createElement("section");
        var sideTag = document.createElement("section");
        contentTag.id = "content";
        sideTag.id = "side";
        if (document.getElementById("article")) {
          document.getElementById("article").innerHTML = "";
          document.getElementById("article").appendChild(contentTag);
          document.getElementById("article").appendChild(sideTag);
          const content = React.createElement(ContentPanel, {title : val.title, data : val.content});
          const side = React.createElement(SidePanel, {language : val.language, related : val.related});
          ReactDOM.render(content, document.getElementById("content"));
          ReactDOM.render(side, document.getElementById("side"));
        }
      }
    });
  }
  componentDidMount() {
    this.initArticle();
  }
  render() {
    const language = ["english", "japanese"];
    const related = ["Bill Gates"];
    return ( <main id="article"></main> );
  }
}

export default Article;