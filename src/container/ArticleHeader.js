import React, { Component } from 'react';

class ArticleHeader extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section id="article-header" className={localStorage.language.substring(0, 2) || "en"}>
        <h1 id="article-header-title">{this.props.title}</h1>
      </section>
    );
  }
}

export default ArticleHeader;