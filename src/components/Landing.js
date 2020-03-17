import React from "react";
import { navigate } from "@reach/router";

const Landing = () => {
  return (
    <header className="App-header">
      <p>SumOfUs Aid Tool</p>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <button
          style={{
            width: "100px",
            background: "#f8492d",
            height: "40px",
            margin: "10px",
            fontSize: "16px",
            color: "white"
          }}
          onClick={() => navigate("ask")}
        >
          Ask Help
        </button>
        <button
          style={{
            width: "100px",
            background: "#f8492d",
            height: "40px",
            margin: "10px",
            fontSize: "16px",
            color: "white"
          }}
          onClick={() => navigate("search")}
        >
          Offer Help
        </button>
      </div>
    </header>
  );
};

export default Landing;
