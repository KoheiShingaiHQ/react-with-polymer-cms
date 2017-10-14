import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import ContentPanel from '../container/ContentPanel.js';
import SidePanel from '../container/SidePanel.js';

class Article extends Component {
  render() {
    const data = [
      {year: "1985", month: "Sep", title: "Leave", content: "Steve Jobs resigns from Apple and starts NeXT with five other refugees from Apple."},
      {year: "1997", month: "Jul", title: "Return", content: "Gil Amelio is ousted by the Apple Board of directors after a disastrous quarter. Steve Jobs is named interim CEO in his place."},
      {year: "2007", month: "Jan", title: "iPhone", content: "In his most memorable keynote presentation ever, at Macworld 2007, Steve Jobs introduces iPhone and its revolutionary touch-screen interface."},
    ];
    const language = ["english", "japanese"];
    const related = ["Bill Gates"];
    return (
      <main id="article">
        <ContentPanel title="Steve Jobs : Timeline" data={data}></ContentPanel>
        <SidePanel language={language} related={related}></SidePanel>
      </main>
    );
  }
}

export default Article;