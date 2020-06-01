# React Tutorial

## 구성
- create-react-app 으로 만듬
- create-react-app 하기 위해서는 Node 10버전 이상 되어야 함. (2020-06-02기준)
- npx create-react-app react-tutorial --template typescript
- yarn eject
- yarn add react-router-dom @types/react-router-dom mobx mobx-react-lite

## 1. Component와 Props
- Component의 이름은 항상 대문자로 시작하자.
  - 소문자로 시작하면 html 태그로 인식하게 됨.
  - 대문자로 시작하면 JSX로 인식하여 컴파일 함.
- Props는 읽기 전용으로 인식해야 한다. (props를 수정하지말자)

## 2. State와 생명주기
- State를 직접 수정하지 말자
  ```javascript
  this.state.comment = 'Hello'; // Wrong
  this.setState({comment: 'Hello'}); // Correct
  ```
- State 업데이트는 비동기적일 수 있음.
  ```javascript
  this.setState({counter: this.state.counter + this.props.increment}); // Wrong
  this.setState((state, props) => ({counter: state.counter + props.increment})); // Correct
  ```
- 생명주기
  - 마운트
  ```javascript
  constructor(props) { // 메서드 바인딩, State 초기화가 필요할 경우 구현
    super(props);
    // 여기서 this.setState()를 호출하면 안 됩니다!
    this.state = { counter: 0 };
    this.handleClick = this.handleClick.bind(this);
    
    // 이렇게 하지 마세요! --> state에 props를 복사하면 안됨.
    // props의 color가 변하더라도 state에 반영 안됨. 즉, props의 갱신을 의도적으로 무시할 때 사용...
    this.state = { color: props.color };
    
    // 예를 들어 최초 컬러를 지정하고 그 이후에는 state의 color 변경에 따라서 ..
    this.state = { color: props.defaultColor };
  }
  static getDerivedStateFromProps(props, state) {
    // render 메소드 호출 직전에 호출 된다.
    // 시간이 흐름에 따라 변하는 props에 state가 의존하는 아주 드물게 사용하기 위해 존재.
    
    // 이거 대신 사용할 수있는 대안의 생명주기 함수들에 익숙해지자
    // 1. props 변화에 대응한 부수 효가 발생 -> componentDidUpdate 사용
    // 2. props 변화했을 때 일부 데이터 재계산 -> Memoization Helper 사용
    // 3. props 변화할 때 일부 state 재설정 -> 완전 제어 컴포넌트 또는 Key를 사용하는 완전 비제어 컴포넌트 만들어 사용
  }
  render()
  componentDidMount()
  ```
    - [Memorization Helper](https://ko.reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html#what-about-memoization)
    - [완전제어 컴포넌트](https://ko.reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html#recommendation-fully-controlled-component)
    - [완전 비제어 컴포넌트](https://ko.reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html#recommendation-fully-uncontrolled-component-with-a-key)
  
  - 업데이트
  ```javascript
  static getDerivedStateFromProps(props, state)
  shouldComponentUpdate(nextProps, nextState) {
    // forceUpdate()가 사용될 때에는 호출되지 않음
    // 이 메서드는 오직 성능 최적화만을 위한 것
    // shouldComponentUpdate()의 내용을 직접 작성하는 대신에 PureComponent를 사용하는 것이 좋다.
    // PureComponent는 props와 state에 대하여 얕은 비교를 수행하고, 해야 할 갱신 작업을 건너뛸 확률을 낮춥니다
    // shouldComponentUpdate() 내에서 깊은 동일성 검사를 수행하거나 JSON.stringify()를 사용하는 것을 권하지 않습니다. 아주 비효율적이며 성능을 떨어트릴 수 있습니다.
    return true;
  }
  render()
  getSnapshotBeforeUpdate(prevProps, prevState) {
    // 가장 마지막으로 렌더링된 결과가 DOM에 반영되었을 때 호출
    // 이 메소드를 사용하면 컴포넌트가 DOM으로부터 스크롤 위치 등과 같은 정보를 이후 변경되기 전에 얻을 수 있음.
    // 여기서 Return되는 값은 componentDidUpdate에 인자로 전달(snapshot)
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    // 갱신이 일어난 직후 호출
    // 최초 렌더링에서는 호출 안됨.
    // 전형적인 사용 사례 (props 비교를 잊지 마세요)
    if (this.props.userID !== prevProps.userID) {
      this.fetchData(this.props.userID);
    }
  }
  ```
  -- 마운트 해제
  ```javascript
  componentWillUnmount() {
    // 컴포넌트가 마운트 해제되어 제거되기 직전에 호출
    // 타이머 제거, 네트워크 요청 취소, componentDidMount() 내에서 생성된 구독 해제 필요한 모든 정리 작업
    // setState()를 호출하면 안 됨.
  }
  ```

  
## 2. Mobx
