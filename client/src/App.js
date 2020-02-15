import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import API from "./utils/API";
import Nav from "./components/Nav";
import Books from "./pages/Books";
import Saved from "./pages/Saved";
import No404 from "./pages/No404";
import Footer from "./components/Footer";
import "./App.css";

class App extends Component {
  state = {
    searchedBooks: [], // Array used to hold the searches results
    search: "", // Flag state for searches
    savedBooks: [] // Array used to hold the saved books
  };

  componentDidMount = () => {
    this.loadBooks();
  };

  loadBooks = () => {
    API.getBooks()
      .then(res => {
        this.setState({ savedBooks: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  };

  deleteBook = id => {
    API.deleteOneBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  saveBook = book => {
    API.saveOneBook(book)
      .then(res => {
        // Array prototype method to filter out the book that is saved from the current searchedbooks array
        const searchedBooks = this.state.searchedBooks.filter(searchedBook => {
          // Make sure none of the id's in the array are the same as the one saved, return the others except for the saved one
          if (searchedBook.id !== res.data.googleIdentifier) {
            return searchedBook;
          }
        });
        this.setState({ searchedBooks });
      })
      .catch(err => console.log(err));
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
    this.setState({ searchedBooks: [] });
    // Placing the current search in a const for simplicity
    const searchingForBook = this.state.search;
    // Making the api request from google books
    API.getGoogleBooks(searchingForBook)
      .then(res => {
        this.setState({ searchedBooks: res.data.items });
      })
      .catch(err => console.log(err));
    // Emptying the search state so user can search for a new book should they choose to
    this.setState({ search: "" });
  };

  render() {
    return (
      // Materialize class='container' are set to 70% of the window width by default
      <React.Fragment>
        <header>
          <Nav
            searchValue={this.state.search} // sending props for the search state to child component => nav
            submitSearch={this.handleSubmit} // sending props for the handling of submissions to child component => nav
            searchBoxChange={this.handleChange} // sending props for the handling of search box changes to child component => nav
          />
        </header>
        <Router>
          <main>
            <Switch>
              <Route
                exact
                path="/"
                render={props => (
                  <Books
                    {...props}
                    userSearch={this.state.searchedBooks}
                    askParentToSave={this.saveBook}
                  />
                )}
              />
              <Route
                exact
                path="/saved"
                render={props => (
                  <Saved
                    {...props}
                    userSaved={this.state.savedBooks}
                    askParentToDelete={this.deleteBook}
                  />
                )}
              />
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
