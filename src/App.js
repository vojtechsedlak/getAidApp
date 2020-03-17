import React from "react";
import "./App.css";
import Landing from "./components/Landing";
import { Router, navigate } from "@reach/router";
import AskHelp from "./components/AskHelp";
import SearchHelp from "./components/SearchHelp";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <Landing />
      <header className="App-header">
        <p>SumOfUs Aid Tool</p>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <button onClick={() => navigate("ask")}>Ask Help</button>
          <button onClick={() => navigate("search")}>Offer Help</button>
        </div>
        <Router basepath="/">
          <Login path="login" />
          <AskHelp path="ask" />
          <SearchHelp path="search" />
        </Router>
      </header>
    </div>
  );
}

export default App;
