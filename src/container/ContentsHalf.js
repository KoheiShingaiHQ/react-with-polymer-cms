import React, { Component } from 'react';
import Content from '../container/Content.js';

class ContentsHalf extends Component {
  constructor(props) {
    super(props);
    this.state = { contents : [] }
  }
  componentDidMount() {
    var contents = [];
    var data = this.props.data;
    for(var i in data){
      contents.push(
        <li key={data[i].main} style={{backgroundImage:"url("+ data[i].image +")"}}>
          <div>
            <Content half_main={data[i].main} half_sub={data[i].sub} color={data[i].color}></Content>
          </div>
        </li>
      );
    }
    this.setState({ contents : contents });
  }
  render() {
    return ( <ul>{this.state.contents}</ul> );
  }
}

export default ContentsHalf;