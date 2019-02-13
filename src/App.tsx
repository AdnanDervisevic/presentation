import React from "react";
import "./App.css";
import { Counter } from "./components/Counter";
import { Logo } from "./components/Logo";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Logo />

        <p>Now with extra modularization!</p>

        <Counter />
      </header>
    </div>
  );
};

export default App;
