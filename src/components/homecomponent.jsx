import React, { Component } from "react";
import logo from "./../assets/logo.svg";
import "../App.css";

class Home extends Component {
  state = {};
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            A demo app in <i>React</i>
          </p>
        </header>
      </div>
    );
  }
}

export default Home;
