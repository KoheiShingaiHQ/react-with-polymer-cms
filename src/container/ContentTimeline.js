import React, { Component } from 'react';

class ContentTimeline extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section>
        <section className={"content-timeline " + (localStorage.language.substring(0, 2) || "en")}>
          <time>
            <span>{this.props.year}</span>
            <span>{this.props.month}</span>
          </time>
          <div className="line"></div>
          <a>
            <div className={"content " + (localStorage.language.substring(0, 2) || "en")}>
              <h2>{this.props.title}</h2>
              <p>{this.props.content}</p>
            </div>
          </a>
        </section>
      </section>
    );
  }
}

export default ContentTimeline;