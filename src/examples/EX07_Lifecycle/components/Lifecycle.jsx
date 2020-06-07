import React, { Component } from 'react';

export default class Lifecycle extends Component {
  // lifecycle과 관련된 메소드
  constructor(props) {
    super(props);
  }
  static getDerivedStateFromProps(props, state) {
    // 이 메소드는 사용 목적은 props가 변경될 때 변경된 props로 state를 업데이트 해야하는 경우에만 사용한다.
    // 리턴 값은
    //  - state를 갱신하기 위한 객체를 리턴하던가
    //  - null을 리턴하여 아무것도 갱신하지 않을 수 있다.

    // 이것을 사용하기전에 먼저 다른 메소드로 대체할 수있는지 판단하자.
    // 1. props 변화에 대한 부수 효과를 발생시켜야 한다면 componentDidUpdate를 활용하자
    // 2. props 변화했을 때 일부 데이터 재계산 -> Memoization Helper 사용
    // 3. props 변화할 때 일부 state 재설정 -> 완전 제어 컴포넌트 또는 Key를 사용하는 완전 비제어 컴포넌트 만들어 사용
    return null;
  }

  shouldComponentUpdate(props, state) {
    return true;
  }

  render() {
    // 필수 구현해야하는 유일한 메소드
    // 리턴타입은
    // - React엘리먼트(보통JSX)
    // - Fragement,
    // - Portal
    // - 문자열과 숫자(이경우 텍스트 노드로서 렌더링)
    // - boolean 또는 null
    // shouldComponentUpdate에서 false가 리턴되면 render는 호출되지 않는다.
    return <div></div>;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    // 렌더링 결과가 DOM에 반영완료 되었을때 호출된다.
    // 사용례는 흔치 않지만, DOM반영 후 스크롤 위치를 지정해줘야 할 경우를 생각해 볼 수 있다.
    return null;
  }
  componentDidMount(prevProps, prevState, snapshot) {
    // DOM 노드가 있어야하는 초기화 작업은 여기서 하자.
    // 그리고 외부에서 데이터를 불러와야 한다면, 네트워크 요청을 보내기 좋은 위치이다.
    // 여기서 setState()를 호출하는 경우도 있는데, 이렇게 되면 두번 rendering이 이루어진다.
    // 다만, Modal이라던가, Tooltip같은 DOM노드의 크기나 위치를 먼저 측정해야하는 경우라면 이러한 방식이 필요하다.
    // 참고로 snapshot 파라미터는 getSnapshotBeforeUpdate의 리턴 value이다.
  }
  componentDidUpdate(prevProps) {
    // todo
  }

  componentWillUnmount() {
    // 뭐여
  }

  // 오류 처리용
  static getDerivedStateFromError(error) {
    // state를 갱신하여 다음 렌더링에서 대체 UI를 표시합니다.
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    // Example "componentStack":
    //   in ComponentThatThrows (created by App)
    //   in ErrorBoundary (created by App)
    //   in div (created by App)
    //   in App
    console.log(info.componentStack);
  }
}
