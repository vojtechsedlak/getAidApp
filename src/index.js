import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Router } from "@reach/router";
import AskHelp from "./components/AskHelp";
import SearchHelp from "./components/SearchHelp";
import Login from "./components/Login";

function FinalApp() {
  return (
    <Router>
      <App path="/" />
      <AskHelp path="ask" />
      <SearchHelp path="search" />
      <Login path="login" />
    </Router>
  );
}

ReactDOM.render(<FinalApp />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
