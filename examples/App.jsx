import React, { PureComponent } from 'react';
// import { Marquee } from '../lib';

import { Marquee } from '../components';

import '../components/styles/index.scss';
import './App.scss';

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      list: [1, 2, 3],
      test: '33333332222222222222226666666666',
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        list: [33, 4, 5, 6, 7, 8, 9],
      });
    }, 2000);
  }
  createList() {
    const { list } = this.state;

    return (
      <Marquee>
        {
          list.map((itme) => {
           return (
             <div className="li">{ itme }</div>
           );
          })
        }
      </Marquee>
    );
  }
  render() {
    const { list, test } = this.state;
    return (
      <div className="form-wrap">
        { list.length > 0 ? this.createList() : null }
        <Marquee direction="landscape" continuous>
          <div className="cc">{test}</div>
        </Marquee>

      </div>
    );
  }
}

export default App;
