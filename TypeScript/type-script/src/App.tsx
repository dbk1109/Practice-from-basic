//import React from 'react';
//import './App.css';

//function App() {
//  return (
//    <div className="App">
//      <header className="App-header">
//        <img src={logo} className="App-logo" alt="logo" />
//        <p>
//          Edit <code>src/App.tsx</code> and save to reload.
//        </p>
//        <a
//          className="App-link"
//          href="https://reactjs.org"
//          target="_blank"
//          rel="noopener noreferrer"
//        >
//          Learn React
//        </a>
//      </header>
//    </div>
//  );
//}

//export default App;

import styled, { keyframes } from "styled-components";

//const Box = styled.div`
//  background-color: ${(props) => props.bgColor};
//  width: 100px;
//  height: 100px;
//`;
//const Text = styled.h1`
//  color: white;
//`;
//const Circle = styled(Box)`
//  border-radius: 50px;
//`;
//const Btn = styled.button`
//  color: white;
//  background-color: tomato;
//  border: 0;
//  border-radius: 15px;
//`;
//const Input = styled.input.attrs({ required: true })`
//  background-color: tomato;
//`;

//const Animation = keyframes`
//  0% {
//    transform: rotate(0deg);
//    border-radius: 0;
//  }
//  50% {
//    transform: rotate(360deg);
//    border-radius: 100px;
//  }
//  100% {
//    transform: rotate(0deg);
//    border-radius: 0px;
//  }
//`;

//const Emoji = styled.span`
//  font-size: 60px;
//  transition: all 1s;
//`;

//const Box = styled.div`
//  width: 200px;
//  height: 200px;
//  background-color: tomato;
//  animation: ${Animation} 3s infinite;
//  display: flex;
//  justify-content: center;
//  align-items: center;
//  ${Emoji} {
//    &:hover {
//      font-size: 100px;
//    }
//  }
//`;

const Title = styled.h1`
  color: ${(props) => props.theme.textColor};
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 98vh;
  background-color: ${(props) => props.theme.backgroundColor};
`;

function App() {
  return (
    <Wrapper>
      <Title>Hello!</Title>

      {/*<Box>
        <Emoji>😁</Emoji>
      </Box>*/}

      {/*<Box bgColor="teal">
        <Text>Hello</Text>
      </Box>
      <Circle bgColor="tomato"></Circle>
      <Box>
        <Btn>Log in</Btn>
        <Btn as="a" href="/">
          Log in
        </Btn>
      </Box>
      <Box>
        <Input />
        <Input />
        <Input />
      </Box>*/}
    </Wrapper>
  );
}

export default App;
