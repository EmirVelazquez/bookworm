import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from "./pages/Books";
import Saved from "./pages/Saved";
import No404 from "./pages/No404";
import Nav from "./components/Nav";
import "./App.css";

class App extends Component {
  render() {
    return (
      // Materialize class='container' are set to 70% of the window width by default
      <React.Fragment>
        <Router>
          <header>
            <Nav />
            <Switch>
              <Route exact path="/" Component={Books} />
              <Route exact path="/books" Component={Books} />
              <Route exact path="/saved" Component={Saved} />
              <Route Component={No404} />
            </Switch>
          </header>
        </Router>
        <div id="appContainer"></div>
      </React.Fragment>
    );
  }
}

export default App;
