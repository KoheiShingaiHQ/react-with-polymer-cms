import React, { Component } from 'react';
import SideRelatedContent from '../container/SideRelatedContent.js';

class SideRelated extends Component {
  constructor(props) {
    super(props);
    this.state = { contents : [] }
  }
  componentDidMount() {
    var contents = [];
    var data = this.props.data;
    for(var i in data){
      contents.push(
        <SideRelatedContent key={data[i]} title={data[i]}></SideRelatedContent>
      );
    }
    this.setState({ contents : contents });
  }
  render() {
    return (
      <section id="side-related">
        <section className={(localStorage.language.substring(0, 2) || "en")}>
          <h2 className="en">Related</h2>
          <h2 className="ja">関連</h2>
          <ul id="related">
            {this.state.contents}
          </ul>
        </section>
      </section>
    );
  }
}

export default SideRelated;