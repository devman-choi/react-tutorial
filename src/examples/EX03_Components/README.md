# Component & Props

## 컴포넌트란?
- UI를 재사용 가능한 조각으로 나누고, 각 조각을 독립적으로 관리할 수 있도록 하는 것.
- 각 컴포넌트를 조합하여 최종적으로 하나의 페이지를 구성하게 된다.
- 개념적으로 컴포넌트는 Javascript 함수와 유사하다.
- 컴포넌트 명은 반드시 대문자로 시작해야 한다. (그래야 React.createElement(컴포넌트 명))으로 컴파일이 된다.

## 컴포넌트 종류
- 컴포넌트는 크게 두 종류가 있다.
- 하나는 함수형이고, 다른 하나는 클래스 형이다.
- 둘의 큰 차이점은 state와 lifecycle이다.
- 함수형은 기본적으로 state와 lifecycle이 없다. 다만 Hooks을 통해 일부 기능을 사용할 수 있다.

## Props
- Props는 함수에서의 parameter라고 볼 수 있다.
- 하위 컴포넌트로 Props를 전달할 때는 컴포넌트의 attirbute를 통해서 전달한다.
- class형에서는 props에 접근할 때는 this로 접근할 수 있다. (this.props)
- 그리고 컴포넌트는 함수이기때문에 자바스크립트에서 파라미터로 함수를 전달 할 수 있듯이 컴포넌트도 전달할 수 있다.
- **중요!!** props는 읽기 전용으로 사용해야한다. (즉, 컴포넌트는 Pure Function으로서의 역할을 수행해야 함.)

즉, 이해하기 쉽게 컴포넌트는 JSX를 리턴하는 함수, Props는 Parameter로 이해하자.


## 예제

동일한 기능을 하는 함수형, 클래스형 컴포넌트를 만들어 보자.

- 함수형 컴포넌트
```jsx
// src/example/EX03_Components/components/WelcomFn.jsx
import React from 'react';

const WelcomFn = props => {
  return <h1>Hello, {props.name} 컴포넌트야</h1>;
};

export default WelcomFn;
```

- 클래스형 컴포넌트
```jsx
// src/example/EX03_Components/components/WelcomClass.jsx
import React, { Component } from 'react';

export default class WelcomClass extends Component {
  render() {
    return <h1>Hello, {this.props.name} 컴포넌트야</h1>;  // this를 통해 props에 접근한다.
  }
}
```

이제 두 컴포넌트를 랜더링 해보자
```jsx
import React from 'react';
import WelcomFn from './components/WelcomFn';
import WelcomClass from './components/WelcomClass';

const Welcom = () => {
  return (
    <div>
      <div>
        <WelcomFn name="함수형" /> {/* 컴포넌트의 attribute를 통해 인자를 전달한다. */}
      </div>
      <div>
        <WelcomClass name="클래스형" />
      </div>
    </div>
  );
};

export default Welcom;
```
## > [예제코드 실행하기](/example/components/welcom)

