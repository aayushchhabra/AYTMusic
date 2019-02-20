import React from 'react';
import './index.css';

class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: this.props.index
    };
  }

  render() {
    return (<button className='square'>
      {this.state.index}
    </button>);
  }
}

export default Square;
