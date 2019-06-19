import React, { Component } from "react";

class ErrorPage extends Component {
  state = {};
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>404</h1>
          <p>
            <i>page not found</i>
          </p>
        </header>
      </div>
    );
  }
}

export default ErrorPage;
