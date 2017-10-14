import React, { Component } from 'react';

class SideRelatedContent extends Component {
  render() {
    return (
      <li class="side-related-content en"><a><h3>{this.props.title}</h3></a></li>
    );
  }
}

export default SideRelatedContent;