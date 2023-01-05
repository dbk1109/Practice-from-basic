# Back to the Basic. 기초 다지기

### styled components 기초 다시하기

> date : 12/05

- 스타일 컴포넌트를 사용하는 이유
  - 리액트등 JS기반 프레임워크에서는 `<div class="checker">` 등으로 지정이 어렵다
  - JS문법대로 인라인으로 지정하려 해도 backgroundColor등으로 JS문법을 사용해야 하기 때문에 가독성이 좋지 않다.
  - 결론: `const Text = styled.p`등으로 컴포넌트화 시켜 css 기본 문법만으로 관리도 쉽고 가독성도 좋게 만들기 위함.
  - `const Text = styled.p` <- 선언하고 `<Text />` <- 사용함
- 커스텀 속성은 `props`로 신규 값을 정의해 사용 가능.
  - `background-color: ${(props) => props.bgColor}` <- 선언하고
  - `<Text bgColor="red">` <- 사용함
- button이라는 HTML태그를 사용해 컴포넌트를 만들었는데 a태그로 변경해 속성을 그대로 가져가고 싶은 경우엔 `as`를 사용함.
  - `<Btn>Log in</Btn>` -> `<button> Log in </button>`
  - `<Btn as="a" href="/"> Log in </Btn>` -> `<a href="/"> Log in </a>`
- const Input = styled.input.`attrs({ required: true })`으로 속성값 지정 가능함.
- 애니메이션을 위해서는 import해준 라인에 import styled`, { keyframes }` from "styled-components";처럼 추가하면 됨.
  ```javascript react
  const Ani = keyframe``;
  const Text = styled.p`
    animation: ${Ani} 1s infinite;
  `;
  ```
- SASS처럼 선언된 컴포넌트 내부에 `&:hover`등으로 중첩으로 선언이 가능하고, 해당 선언은 HTML element 뿐만 아니라 컴포넌트도 \${}으로 선언이 가능함.
- <b>Theme 설정 (Dark / Light Mode)</b>

  ```javascript react
  /* index.js */
  import { ThemeProvider } from "styled-components";

  const darkTheme = {
    textColor: "whitesmoke",
    backgroundColor: "#111",
  };

  const lightTheme = {
    textColor: "#111",
    backgroundColor: "whitesmoke",
  };

  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    <React.StrictMode>
      <ThemeProvider theme={darkTheme}>
        <App />
      </ThemeProvider>
    </React.StrictMode>
  );
  ```

  ```javascript react
  /* App.js */
  const Title = styled.h1`
    color: ${(props) => props.theme.textColor};
  `;
  ```

### TypeScript 기초 다시하기

> date : 12/06 | 01/03 recap

- 새 기능을 제외하고는 JS기반으로 되어있지만 JS는 아니다.
- 때문에 기존코드의 수정은 필요하지 않고, 단독으로 사용시 .ts, 리액트와 사용시 .tsx의 확장자를 가짐.
- strongly-typed 언어 (동작 전에 타입을 확인) 이기 때문에 프로그램 실행 전에 타입스크립트가 해당 양식의 유무와 타입을 체크해줘 프로텍션 개발이 가능함.
- 설치 사용시 스타일 컴포넌트같이 TS가 아니라고 에러가 나게 되는데, 이런 경우엔 다시 npm 해주어야함.
- 타입스크립트에게 다른 언어를 사용할때 이게 무엇인지 알려주는 작업이 필요.
  - npm i --save-dev @types/PACKAGE-NAME
- 어떻게 type하는가
  - 컴포넌트를 타입한다는건 컴포넌트에게 타입을 준다는것.
  - 이건 결국 타입스크립트에게 이게 뭔지 설명한다는걸 의미한다.
  - const plus = (a`:number`, b`:number`) => a + b; 처럼 사용.
- 리액트 prop types는 코드를 실행한 후에 콘솔에만 경고해주기 때문에 타입스크립트를 시용.
- interface (인터페이스)
  - object(객체)의 형태를 TS에게 설명해주는 개념
  - 컴포넌트 속성에 타입을 알려주기
    ```typescript
    interface PlayerShape {
      name: string /*필수요소*/;
      age?: number /*선택요소*/;
    }
    const sayHello = (playerObj: PlayerShape) => `
      Hello ${playerObj.name} you are ${playerObj.age} years old.
    `;
    sayHello({ name: "kimda", age: "12" });
    sayHello({ name: "hi", age: "12", hello: 1 }); /* 에러남 */
    ```
  - 만약 선택요소와 필수요소가 섞여있을 경우 `borderColor={borderColor ?? "HEAR"}` 등으로 기본값 선언.
- currentTarget = target
- `event: React.MouseEvent<HTMLButtonElement>`으로 리액트 이벤트 추가가능. 외울필요는 없음.

### Crypto Tracker로 공부

- Nested Router : 한 스크린 내에 또다른 라우터를 가질 수 있는것 (중첩 라우터)
- <> : Fragment : 비어있지만 하나로 만들어 리턴할 수 있음.
- 비하인더씬 