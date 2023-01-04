import React, { useState } from "react";
import styled from "styled-components";

//import Circle from "./Circle";

//function App() {
//  const [value, setValue] = useState("");
//  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
//    //console.log(event.currentTarget.value);
//    const {
//      currentTarget: { value },
//    } = event;
//    setValue(value);
//  };
//  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//    event.preventDefault();
//    console.log("hello ", value);
//  };
//  return (
//    <div>
//      <form onSubmit={onSubmit}>
//        <input
//          value={value}
//          onChange={onChange}
//          type="text"
//          placeholder="username"
//        />
//        <button>Log in</button>
//      </form>
//    </div>
//    //<div>
//    //  <Circle borderColor="yellow" bgColor="teal" />
//    //  <Circle text="I'm Circle" bgColor="tomato" />
//    //</div>
//  );
//}
const Container = styled.div`
  background-color: ${(props) => props.theme.bgColor};
`;
const H1 = styled.h1`
  color: ${(props) => props.theme.textColor};
`;

interface DummyProps {
  text: string;
  active?: boolean;
}

function Dummy({ text, active = false }: DummyProps) {
  return <H1>{text}</H1>;
}
function App() {
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {};
  return (
    <Container>
      <Dummy active text="Hello" />
      <button onClick={onClick}>Click me</button>
    </Container>
  );
}

export default App;
