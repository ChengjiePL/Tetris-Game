import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Game from "./components/Game";

function App() {
  return (
    <div className="App">
      <Game rows={20} columns={10} />
    </div>
  );
}

export default App;
