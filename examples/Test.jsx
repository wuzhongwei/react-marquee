import React, { Component } from 'react';

import mylog from '../src';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }
  componentDidMount() {
    console.log('test===', mylog);
  }
  render() {
    return (
      <div className="form-wrap">
        component
      </div>
    );
  }
}

export default App;
