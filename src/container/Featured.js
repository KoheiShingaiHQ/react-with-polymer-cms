import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import ContentsFull from '../container/ContentsFull.js';
import ContentsHalf from '../container/ContentsHalf.js';

class Featured extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const fullContentData = [
      {main: "Yellowstone", sub: "The Grand Canyon of the Yellowstone", color: "rgba(255, 255, 255, .88)", height: "360px", image: "https://www.nationalgeographic.com/content/dam/photography/rights-exempt/Best-of-2016/grandcanyon.adapt.1900.1.jpg"},
      {main: "Acadia", sub: 'An autumn-hued forest with morning fog', color: "rgba(255, 255, 255, .98)", height: "360px", image: "https://www.nationalgeographic.com/content/dam/photography/PROOF/2017/September/fall-equinox/01-fall-gallery-NationalGeographic_977935.ngsversion.1505910666082.adapt.1190.1.jpg"},
      {main: "Torres del Paine", sub: 'Walking with my wife, Allie', color: "rgba(0, 0, 0, .78)", height: "600px", image: "https://www.nationalgeographic.com/content/dam/photography/PROOF/2017/May/travel-photo-contest-gallery/36-10201526_uploadsmember1502011yourshot-1502011-10201526jpg_c76qs3taxrcmefapc6rxxj4gjhp3eflutfvvbpyjwjhzlmh4iziq_5616x3744.ngsversion.1494945573599.adapt.1190.1.jpg"}
    ];
    const halfContentData = [
      {main: "King Penguin", sub: 'An excellent diver', color: "rgba(255, 255, 255, .98)", image: "https://news.nationalgeographic.com/content/dam/news/2017/04/25/penguin-gallery/04-penguin-photo-ark.ngsversion.1492806839404.adapt.1190.1.jpg"},
      {main: "Border Collies", sub: 'Take that, Lassie', color: "rgba(255, 255, 255, .98)", image: "https://news.nationalgeographic.com/content/dam/news/2016/10/04/animal_day_gallery/06_animal_day_gallery_border_collie.ngsversion.1475593210354.adapt.1190.1.jpg"},
      {main: "Bornean Orangutan", sub: 'Grand prize winner', color: "rgba(255, 255, 255, .98)", image: "https://news.nationalgeographic.com/content/dam/news/2016/10/17/wpy-winners/2016-wpy-winners-07.ngsversion.1476829830918.adapt.945.1.jpg"},
      {main: "African Elephant", sub: 'Young elephants often play', color: "rgba(255, 255, 255, .98)", image: "https://news.nationalgeographic.com/content/dam/news/2016/08/12/elephant/10_elephant_day_gallery.ngsversion.1502461851681.adapt.1190.1.jpg"}
    ];
    return (
      <main id="featured">
        <ContentsFull data={fullContentData}></ContentsFull>
        <ContentsHalf data={halfContentData}></ContentsHalf>
      </main>
    );
  }
}

export default Featured;