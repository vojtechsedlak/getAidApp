import React from "react";
import "./App.css";
import { Router, navigate } from "@reach/router";
import AskHelp from "./components/AskHelp";
import SearchHelp from "./components/SearchHelp";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>SumOfUs Aid Tool</p>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <button onClick={() => navigate("ask")}>Ask Help</button>
          <button onClick={() => navigate("search")}>Offer Help</button>
        </div>
        <Router basepath="/">
          <AskHelp path="ask" />
          <SearchHelp path="search" />
        </Router>
      </header>
    </div>
  );
}

export default App;