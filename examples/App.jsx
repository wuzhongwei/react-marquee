import React, { PureComponent } from 'react';

// import { Marquee } from '../lib';

import { Marquee } from '../components';

import '../components/styles/index.scss';
import './App.scss';

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  componentDidMount() {

  }

  render() {
    return (
      <div className="form-wrap">
        <Marquee>
          <div>22222</div>
        </Marquee>
        <Marquee continuous direction="landscape">
          <div className="cc">8833333333333333333333333333333333388</div>
        </Marquee>
      </div>
    );
  }
}

export default App;
