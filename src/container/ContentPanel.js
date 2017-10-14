import React, { Component } from 'react';
import ArticleHeader from '../container/ArticleHeader.js';
import ContentTimeline from '../container/ContentTimeline.js';
import ReactDOM from 'react-dom';

class ContentPanel extends Component {
  constructor(props) {
    super(props);
    this.state = { contents : [] }
  }
  componentDidMount() {
    var contents = [];
    var data = this.props.data;
    for(var i in data){
      contents.push(
        <ContentTimeline year={data[i].year} month={data[i].month} title={data[i].title} content={data[i].content}></ContentTimeline>
      );
    }
    this.setState({ contents : contents });
  }
  render() {
    return (
      <article id="content-panel">
        <ArticleHeader title={this.props.title}></ArticleHeader>
        {this.state.contents}
      </article>
    );
  }
}

export default ContentPanel;