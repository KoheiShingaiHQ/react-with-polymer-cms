import React, { Component } from 'react';

class ArticleHeader extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section id="article-header">
        <h1 id="article-header-title">{this.props.title}</h1>
      </section>
    );
  }
}

export default ArticleHeader;