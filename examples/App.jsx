import React, { PureComponent } from 'react';

// import { Toast, Icon } from '../lib';

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
        <Marquee direction="vertical" className="gundong">
          <div className="ww">1111</div>
          <div>11112</div>
          <div>11113</div>
          <div>11114</div>
          <div>11115</div>
          <div>11116</div>
          <div>11117</div>
          <div>11118</div>
          <div>11119</div>
        </Marquee>
        <Marquee continuous direction="landscape" className="gundong1">
          <div className="cc">8833333333333333333333333333333333388</div>
        </Marquee>
      </div>
    );
  }
}

export default App;
