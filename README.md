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
- SASS처럼 선언된 컴포넌트 내부에 `&:hover`등으로 중첩으로 선언이 가능하고, 해당 선언은 HTML element 뿐만 아니라 컴포넌트도 ${}으로 선언이 가능함.
- <b>Theme 설정 (Dark / Light Mode)</b>

  ```javascript
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

  ```javascript
  /* App.js */
  const Title = styled.h1`
    color: ${(props) => props.theme.textColor};
  `;
  ```

### TypeScript 기초 다시하기
-