import React, { useState } from "react";
import {
  Button,
  H1,
  ButtonGroup
} from "collector-portal-framework/dist/components";
import logo from "./logo.svg";
import "./App.css";
import styled from "collector-portal-framework";

const Container = styled.div({
  display: "flex",
  alignItems: "center"
});

const App: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <p>Babby's first stateful componet</p>

        <Container>
          <ButtonGroup style={{ height: "100%" }}>
            <Button onClick={() => setCount(prev => prev - 1)}>Minska</Button>
          </ButtonGroup>

          <H1 style={{ margin: 16, minWidth: 50, textAlign: "center" }}>
            {count}
          </H1>

          <ButtonGroup style={{ height: "100%" }}>
            <Button onClick={() => setCount(prev => prev + 1)}>Öka</Button>
          </ButtonGroup>
        </Container>
      </header>
    </div>
  );
};

export default App;
