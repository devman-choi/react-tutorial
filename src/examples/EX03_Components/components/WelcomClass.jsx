import React, { Component } from 'react';

export default class WelcomClass extends Component {
  render() {
    return <h1>Hello, {this.props.name} 컴포넌트야</h1>; // this를 통해 props에 접근한다.
  }
}
