import React, { PureComponent } from 'react';
// import { Marquee } from '../lib';
import PropTypes from 'prop-types';
import { Marquee } from '../components';

import '../components/styles/index.scss';
import './App.scss';

class App extends PureComponent {
  static childContextTypes = {
    store: PropTypes.object,
  }

  render() {
    return (
      <div className="form-wrap">
        <Marquee direction="landscape">
          <div>依照保监要求，为了保障您的利益，请准确填写以下实名信息。本平台将通过保监会官方渠道验证您的资质，并庄重承诺对您所提供的个人及相关验证信息严格保密。</div>
        </Marquee>
      </div>
    );
  }
}

export default App;
