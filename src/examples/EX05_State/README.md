# State

## State란?
- Props는 함수로부터 전달받은 파라미터라고 한다면 State 함수내에서 사용하는 지역변수이다.
- 다만, 그냥 지역변수는 아니고 특별한 능력이 있는 지역변수라고 생각하자.
- 그 능력은 바로 state의 값이 변경되면 화면갱신도 함께 이루어진다.
- 그리고 state는 값은 하위 컴포넌트의 props로 전달 할 수도 있다.
- 그렇다면 어떤경우에 state를 사용하는가?
    1. 부모로부터 props로 전달 되는 것인가? 그렇다면 state가 아니다.
    2. 시간이 지나면서 값이 변하는가? 그렇다면 state  
       - EX1. 사용자가 입력하는 값의 경우, 사용자의 입력값에 따라 변경되기 때문에 state  
       - EX2. Timer를 이용해 시간의 변화를 화면에 노출시켜야 한다면... state
    3. 컴포넌트 안에서 다른 state나 props로 계산이 가능한가? 그렇다면 state가 아니다.


## state 사용법
##### state 초기화 방법 1
보통 constructor를 통한 초기화는 props로부터 default값을 전달받거나, 함수 bind가 필요할 경우 사용한다.
```jsx
export default class State extends Component {
  constructor(props) {
    super(props); // constructor 작성할 때 반드시 추가

    // 주의 constructor에서는 setState를 사용해서는 안된다.
    this.state = {
      num: props.num
    }; // state 초기화

    this.incrementNum = this.incrementNum.bind(this); // 함수 bind
  }
  
  // arrow 함수가 아닌 일반 함수로 정의하면 함수 내에서 컴포넌트의 this로 접근이 안된다.
  // 따라서 constructor에서 bind를 해줘야한다.
  incrementNum() {
    {...}    
  }

  {...}
}
```
##### state 초기화 방법 2
```jsx
export default class State extends Component {
  // 초기화
  state = {
    num: 0,
  };

  {...}
}
```

##### state 갱신 방법
state는 반드시 this.setState()로 갱신 해야 한다.
```jsx
export default class State extends Component {
  // 초기화
  state = {
    num: 0,
  };

  incrementNum = () => {
    this.setState({num: 1});
  }
}
```

## Counter 예제
자 그럼 이제 state를 이용한 간단한 Counter를 만들어 보자.
- Counter.jsx
```jsx
// src/EX05_State/components/Counter.jsx
import React, { Component } from 'react';

export default class Counter extends Component {
  num = 0; // 일반 지역 변수

  constructor(props) {
    super(props);

    this.state = {
      num: props.num
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
```
- CounterContainer.jsx
```jsx
// src/EX05_State/components/CounterContainer.jsx
import React, { useState } from 'react';
import State from './Counter';

const CounterContainer = () => {
  const defaultNumber = 5; // default값은 5

  // 참고로 num도 state이다. Hooks시간에 배우겠지만
  // 함수형 컴포넌트에서도 state를 사용하기위해 추가된 기능이다.
  const [num, setNum] = useState(defaultNumber);

  const increment = () => {
    setNum(num + 1);
  };
  const decrement = () => {
    setNum(num - 1);
  };

  return (
    <div>
      <div>
        <div>초기값은 {defaultNumber}</div>
        <div>
          <span>부모의 숫자: {num}</span>
          <button onClick={increment}>+</button>&nbsp;
          <button onClick={decrement}>-</button>
        </div>
      </div>
      <hr></hr>
      <div>
        <p>자식 Component</p>
        <State num={num}></State> {/* props로 부모의 state를 전달 */}
      </div>
    </div>
  );
};

export default CounterContainer;
```
## > [예제코드 실행하기](/example/state/counter)