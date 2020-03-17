import React from "react";
import { navigate } from "@reach/router";
import Logo from "../sou.svg";

const Landing = () => {
  return (
    <>
      <header className="App-header">
        <img src={Logo} style={{width: '140px', height: '80px', position: 'absolute', cursor:'pointer', top: '0', left: '0', paddingLeft: '30px'}} onClick={() => navigate('/')} />
        <p>SumOfUs Aid Tool</p>
        <img src="" />
        <div style={{ display: "flex", flexDirection: "row" }}>
          <button
            style={{
              width: "100px",
              background: "#f8492d",
              height: "40px",
              margin: "10px",
              fontSize: "16px",
              color: "white",
              border: "0px"
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
              color: "white",
              border: "0px"
            }}
            onClick={() => navigate("search")}
          >
            Offer Help
          </button>
        </div>
      </header>
    </>
  );
};

export default Landing;
