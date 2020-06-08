# Lifecycle

## Lifecycle이란?
- 컴포넌트가 생성되고 업데이트되고 없어지는 일련의 과정을 생명주기라 한다.
- [링크](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)를 클릭하면 도식화가 잘 되어있다. (아래 그림 참조)
![Lifecycle](/resources/images/lifecycle/lifecycle_method.png)
![Lifecycle](/resources/images/lifecycle/lifecycle_method2.png)


그럼 이제 Method에 대해 알아보자.

# Lifecycle 과련 Method
## constructor(props)
- 생성자 메소드이다.
- 최초 Mount될 때 한 번 호출 된다.
- 여기에서 state를 초기화하거나 함수 바인드를 한다.

```jsx
class Lifecycle extends React.Component {
    constructor(props) {
        super(props);   // construtor를 사용할 때 반드시 작성
        this.state = {} // state 초기화
        this.customMethod = this.customMethod.bind(this); // 바인드
    }

    // 만약 arrow 함수로 작성했으면 bind 할 필요없음.
    customMethod() {
        {...}
    }
}
```

## static getDerivedStateFromProps(props, state)
- 이 메소드는 특별한 상황이 아닌 이상 잘 사용되지 않는다. 사용하면 복잡해 질 수 있다.
- 이 메소드의 목적은 props가 변경 시 그에 영향을 받는 state를 업데이트 해야할 경우에만 사용한다.
- static 메소드로 여기에서는 this를 통한 클래스의 속성값에 접근할 수 없다.
- 이것을 사용하기전에 먼저 다른 메소드로 대체 할 수 있는지 먼저 판단해야한다.
    - props변화에 대한 부수적인 효과를 발생시켜야 한다면 componentDidUpdate를 활용하자.
    - props 변화했을 때 일부 데이터 재계산 -> Memoization Helper 사용
    - props 변화할 때 일부 state 재설정 -> 완전 제어 컴포넌트 또는 Key를 사용하는 완전 비제어 컴포넌트 만들어 사용
```jsx
class Lifecycle extends React.Component {
    state = {
        a: 1,
    }
    static getDerivedStateFromProps(props, state) {
        // this를 이용한 접근이 불가능하다.

        // props와 state가 다를 경우, state를 업데이트 할 값 리턴
        if(props.a !== state.a) {
            return {
                a: props.a
            }
        }

        // null을 리턴하면 state 변경 X
        return null;    
    } 
}
```
## shouldComponentUpdate(nextProps, nextState)
- 이 메소드의 목적은 성능 최적화를 위함이다.
- 리엑트의 장점이 자동 업데이트되어 편하긴 하지만, 큰 규모의 웹 어플리케이션이나  
뎁스가 깊은 컴포넌트 구조를 가질 경우 너무 잦은 업데이트로 성능상 문제가 발생할 수 있다.
- 그래서 굳이 업데이트 할 필요없는 부분에서는 더이상 진행되지 않도록 끊어주는 것이 중요하다.
- 리턴타입은 Boolean이고 true 리턴 시 업데이트 진행, false 리턴 시 더이상 업데이트 진행하지 않는다.
```jsx
class Lifecycle extends React.Component {
    shouldComponentUpdate(nextProps, nextState)
        return this.state.value !== nextProps.value; // true나 false가 리턴된다.
    } 
}
```
## render()
- 리엑트 메소드 중 유일하게 반드시 작성해야 하는 메소드이다.
- 화면에 보여질 값을 리턴한다.
- shouldComponentUpdate()에서 false를 리턴할 경우, render는 호출되지 않는다.
```jsx
class Lifecycle extends React.Component {
    render()
        return <div>Hello World</div>;
    } 
}
```
## getSnapshotBeforeUpdate(prevProps, prevState)
- rendering 결과를 실제 DOM에 반영되기 직전에 호출된다.
- 이 메소드도 역시 잘 사용되지 않는다.
- 이 메소드만으로는 큰 의미가 없고, 다음에 호출될 componentDidUpdate() 메소드와 함께 쓰일 때 의미가 있다.
- 여기서 리턴된 값은 다음에 호출될 componentDidUpdate() 메소드의 snapshot으로 전달 된다.
- 사용 예로는 스크롤 위치를 따로 처리하는 작업이 필요한 UI등을 생각해 볼 수 있다.
- 아직 DOM에 반영 되기 직전이기 때문에 직전 스크롤 위치 정보를 componentDidUpdate에 넘겨서 스크롤 위치를 재조정 할 수 있다. 
```jsx
// react 공식 문서의 예제
class ScrollingList extends React.Component {
  constructor(props) {
    super(props);
    this.listRef = React.createRef();
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    // Are we adding new items to the list?
    // Capture the scroll position so we can adjust scroll later.
    if (prevProps.list.length < this.props.list.length) {
      const list = this.listRef.current;
      return list.scrollHeight - list.scrollTop;
    }
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    // If we have a snapshot value, we've just added new items.
    // Adjust scroll so these new items don't push the old ones out of view.
    // (snapshot here is the value returned from getSnapshotBeforeUpdate)
    if (snapshot !== null) {
      const list = this.listRef.current;
      list.scrollTop = list.scrollHeight - snapshot;
    }
  }

  render() {
    return (
      <div ref={this.listRef}>{/* ...contents... */}</div>
    );
  }
}
```

## componentDidUpdate(prevProps, prevState, snapshot)
- DOM 갱신 직후에 호출된다.
- 최초 렌더링(Mount 될 때)에는 호출되지 않는다.
- 이 메소드는 갱신 직후 DOM 조작이 필요하거나, 네트워크 요청을하여 데이터를 fetch할때 사용된다.
- 단, 여기에서 데이터를 fetch 할 때, 적절한 조건문으로 감싸지 않으면 무한 반복이 발생 할 수 있다.
```jsx
class Lifecycle extends React.Component {
  // 전형적인 사용 사례 (props 비교를 잊지 마세요) - 무한반복 방지
  if (this.props.userID !== prevProps.userID) {
    this.fetchData(this.props.userID);
  }
}
```
## componentDidMount()
- 최초 컴포넌트가 마운트 직후 호출된다.
- DOM 노드가 있어야 초기화를 할 수 있는 작업이 있으면 여기에서 하면 된다.
- 예를 들어 Modal창이나 Tooltip과 같이 렌더링에 앞서 DOM 노드의 크기나 위치를 먼저 측정해야 하는 경우이다.
- 보통 여기에서 jquery등과 같은 외부라이브러이와 통합할 때 많이 사용되고
- 그리고 componentWillUnmount()에서 해지한다.

## componentWillUnmount()
- 컴포넌트가 제거되기 직전에 호출 된다.
- 여기에서 타이머 제거, 네트워크 요청 취소, 생성된 구독 해재 등 정리작업을 수행한다.
- 이 컴포넌트는 다시 렌더링 되지 않으므로 setState()를 호출하면 안된다.

