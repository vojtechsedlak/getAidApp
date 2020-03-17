import React from "react";
import "./App.css";
import { Router, navigate } from "@reach/router";
import AskHelp from "./components/AskHelp";
import SearchHelp from "./components/SearchHelp";
import Landing from "./components/Landing";
import Login from "./components/Login";
import Landing from "./components/Landing";

function App() {
  return (
    <div className="App">
      <Landing />
    </div>
  );
}

export default App;
