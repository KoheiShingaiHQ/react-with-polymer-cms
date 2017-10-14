import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import ContentsSquare from '../container/ContentsSquare.js';

class About extends Component {
  render() {
    const data = [
      {main: "Doodles", sub: "Doodle all the time!", image: "https://www.toptal.com/designers/subtlepatterns/patterns/doodles.png"},
      {main: "Cloudy Day", sub: "Clouds raced all across the spring sky.", image: "https://www.toptal.com/designers/subtlepatterns/patterns/cloudy-day.png"},
      {main: "Sakura", sub: "In anticipation of spring – cherry blossom pattern.", image: "https://www.toptal.com/designers/subtlepatterns/patterns/sakura.png"},
      {main: "Dark Sharp Edges", sub: "Some dark 45 degree angles creating a nice pattern. Huge.", image: "https://www.toptal.com/designers/subtlepatterns/patterns/footer_lodyas.png"},
      {main: "Restaurant", sub: "A lot of people like the icon patterns, so here’s one for your restaurant blog.", image: "https://www.toptal.com/designers/subtlepatterns/patterns/restaurant_icons.png"},
      {main: "Congruent Pentagon", sub: "I came up with this pattern. Madness!", image: "https://www.toptal.com/designers/subtlepatterns/patterns/congruent_pentagon.png"},
      {main: "Food", sub: "Holy mackerel, it’s colorful—but still subtle.", image: "https://www.toptal.com/designers/subtlepatterns/patterns/food.png"},
      {main: "Nice Snow", sub: "Not the most subtle, but very useful.", image: "https://www.toptal.com/designers/subtlepatterns/patterns/nice_snow.png"},
      {main: "Grey Washed Wall", sub: "This is a semi-dark pattern, sort of linen-y.", image: "https://www.toptal.com/designers/subtlepatterns/patterns/grey_wash_wall.png"},
    ];
    return (
      <main id="about">
        <ContentsSquare data={data}></ContentsSquare>
      </main>
    );
  }
}

export default About;