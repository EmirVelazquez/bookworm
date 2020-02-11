import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Books from "./pages/Books";
import Saved from "./pages/Saved";
import About from "./pages/About";
import No404 from "./pages/No404";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  return (
    // Materialize class='container' are set to 70% of the window width by default
    <React.Fragment>
      <header>
        <Nav />
      </header>
      <Router>
        <main>
          <Switch>
            <Route exact path="/" component={Books} />
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
};

export default App;
