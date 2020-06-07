import React, { Component } from 'react';

export default class Counter extends Component {
  num = 0; // 일반 지역 변수

  constructor(props) {
    super(props);

    this.state = {
      num: props.defaultNum
    };
  }

  // 일반 지역 변수 증가
  incrementNum = () => {
    this.num = this.num + 1;
  };
  // 일반 지역 변수 감소
  decrementNum = () => {
    this.num = this.num - 1;
  };

  // state 증가
  incrmenntStateNum = () => {
    this.setState({ num: this.state.num + 1 });
  };
  // state 감소
  decrementStateNum = () => {
    this.setState({ num: this.state.num - 1 });
  };

  render() {
    return (
      <div>
        <div>[B] {this.props.num} : 부모 컴포넌트로부터 전달 받은 숫자</div>
        <div>
          <span>[C] {this.num} : 일반 선언 변수의 숫자</span>
          <button onClick={this.incrementNum}>+</button>&nbsp;
          <button onClick={this.decrementNum}>-</button>
        </div>
        <div>
          <span>[D] {this.state.num} : state의 숫자(초기값은 [B])</span>
          <button onClick={this.incrmenntStateNum}>+</button>&nbsp;
          <button onClick={this.decrementStateNum}>-</button>
        </div>
      </div>
    );
  }
}
