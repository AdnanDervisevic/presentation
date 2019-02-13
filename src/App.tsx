import React, { useState } from "react";
import { Button, H1 } from "collector-portal-framework/dist/components";
import logo from "./logo.svg";
import "./App.css";
import styled from "collector-portal-framework";

const Container = styled.div({
  display: "flex"
});

const App: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <p>Babby's first stateful componet</p>

        <Container>
          <Button size="small" onClick={() => setCount(prev => prev - 1)}>
            Minska
          </Button>

          <H1 style={{ margin: 16 }} centered>
            {count}
          </H1>

          <Button size="small" onClick={() => setCount(prev => prev + 1)}>
            Öka
          </Button>
        </Container>
      </header>
    </div>
  );
};

export default App;
