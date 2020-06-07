# React 시작하기

역시 일단 시작은 Hello World로...

그럼 일단 프로젝트를 생성해보자.

React의 starter kit으로 많이 사용하는 **CRA**(create-react-app)을 이용하면 편하게 시작할 수 있다.

CRA로 프로젝트를 생성하면 webpack, babel 등 frontend 개발을 위한 대부분이 설정되어 있다.

#### CRA 프로젝트 생성
- npx create-react-app [프로젝트명]
- 참고로 npm, npx는 Node.js가 설치되어야 사용할 수 있다. 자세한 건 직접 찾아보자
```bash
npx create-react-app my-app
```
프로젝트를 생성하면 아래와 같이 파일들이 생성된다.

![생성파일 목록](/resources/images/helloworld/cra_filelist.png)
CRA로 생성된 파일 목록

#### CRA 프로젝트 실행

- 생성한 프로젝트 폴더로 이동하여 실행해 보자
- 실행 명령어는 yarn start
- yarn은 별도 설치가 필요하다. ([링크](https://classic.yarnpkg.com/en))
```bash
cd my-app
yarn start
```
![CRA 실행화면](/resources/images/helloworld/start_cra.png)
CRA 실행 화면

참고로 CRA로 프로젝트를 생성하면 기본적으로 4가지의 실행 명령어를 가진다. (package.json 파일에서 확인 가능하다.)
- start : 프로젝트 실행
- build
  - 배포가능한 형태로 스크립트 빌드
  - 빌드된 파일은 dist 폴더에 생성
- test : App.test에 작성된 코드를 테스트
- eject
  - CRA로 최초 생성하면 내부 코드들은 알 수 없도록 Wrapping 되어있다.
  - eject 명령어를 실행하면 Wrappng된 코드를 풀 수 있다. (config파일과 실행 스크립트들이 생성됨)
  - eject는 기본 설정에서 변경이 필요할 때 이용하자.
  - 한 번 eject하면 다시 되돌릴 수 없다.


## Hello World

자, 이제 기본 실행 화면을 봤으면, 이번 챕터의 목표인  Hello World를 찍어보자

1. src 아래 components 폴더 생성
2. compnents폴더에서 HelloWorld.jsx 파일 생성
3. HelloWorld.jsx파일에서 아래와 같이 코드 작성
```jsx
// src/components/HelloWorld.jsx
import React from 'react';

const HelloWorld = () => {
  return <div>Hello World</div>;
};

export default HelloWorld;
```
4. src/App.jsx 파일 수정 (그냥 다 지우고 아래와 같이 작성)
```jsx
// src/App.jsx
import React from 'react';
import HelloWorld from './components/HelloWorld'

const App = () => {
  return <HelloWorld />;
};

export default App;
```
5. 그럼 이제 실행 해 볼까?
```bash
yarn start
```
6. 짜잔

    볼 품 없지만 그래도 브라우저에 Hello World가 찍혔다.

    ![Hello World](/resources/images/helloworld/helloworld.png)

## > [예제코드 실행하기](/example/helloworld)