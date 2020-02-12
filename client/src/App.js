import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Books from "./pages/Books";
import Saved from "./pages/Saved";
import About from "./pages/About";
import No404 from "./pages/No404";
import Footer from "./components/Footer";
import "./App.css";

class App extends Component {
  state = {
    search: ""
  };

  handleChange = event => {
    event.preventDefault();
    let { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    // If this isn't undefined, prevent the submission
    if (event) {
      event.preventDefault();
    }
    console.log(this.state.search);
    this.setState({ search: "" });
  };

  render() {
    return (
      // Materialize class='container' are set to 70% of the window width by default
      <React.Fragment>
        <header>
          <Nav
            search={this.state.search}
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
          />
        </header>
        <Router>
          <main>
            <Switch>
              <Route exact path="/" render={props => <Books {...props} />} />
              <Route exact path="/books" component={Books} />
              <Route exact path="/saved" component={Saved} />
              <Route exact path="/about" component={About} />
              <Route path="*" component={No404} />
            </Switch>
          </main>
        </Router>
        <footer>
          <Footer />
        </footer>
      </React.Fragment>
    );
  }
}

export default App;
