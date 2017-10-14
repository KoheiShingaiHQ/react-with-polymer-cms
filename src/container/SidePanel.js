import React, { Component } from 'react';
import SideLanguage from '../container/SideLanguage.js';
import SideRelated from '../container/SideRelated.js';

class SidePanel extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section id="side-panel">
        <SideLanguage data={this.props.language}></SideLanguage>
        <SideRelated data={this.props.related}></SideRelated>
      </section>
    );
  }
}

export default SidePanel;