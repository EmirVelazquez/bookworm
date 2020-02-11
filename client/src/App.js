import React, { Component } from "react";
import Nav from "./components/Nav";
import "./App.css";

class App extends Component {
  render() {
    return (
      // Materialize class='container' are set to 70% of the window width by default
      <React.Fragment>
        <header>
          <Nav />
        </header>
        <div id="appContainer"></div>
      </React.Fragment>
    );
  }
}

export default App;
