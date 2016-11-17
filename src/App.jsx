import React, { Component } from 'react';
import UserDateChanger from './containers/UserDateChanger';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      hello: 'World',
    };
  }
  render() {
    return (<div>
      Hello {this.state.hello}
      <UserDateChanger />
    </div>);
  }
}
