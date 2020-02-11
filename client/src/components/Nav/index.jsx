import React, { Component } from "react";
import bookwormLogo from "./bookwormLogo.png";
import "./style.css";

class Nav extends Component {
  state = {
    searchValue: "",
    navCloseMobile: ""
  };

  handleSearchBoxChange = event => {
    // Here we get the value from the search box name="searchBox"
    const { name, value } = event.target;
    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleSearchSubmit = event => {
    event.preventDefault();
    console.log(this.state.searchValue);
  };

  render() {
    return (
      <React.Fragment>
        <nav className="top-nav">
          <div className="containerHeader">
            <div className="nav-wrapper">
              <div className="row">
                <div className="col s12">
                  <div className="container">
                    <div
                      href="#"
                      data-target="nav-mobile"
                      className="top-nav sidenav-trigger full hide-on-large-only"
                    >
                      <i className="material-icons menu">menu</i>
                    </div>
                  </div>
                  <h1 className="header">Bookworm</h1>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <ul id="nav-mobile" className="sidenav sidenav-fixed">
          <a id="logo-container" href="/" className="sidenav-close brand-logo">
            <img src={bookwormLogo} alt="Bookworm Logo" id="bookwormLogo" />
          </a>
          <li className="search">
            <form className="searchWrapper">
              <input
                value={this.state.searchValue}
                name="searchBox"
                onChange={this.handleSearchBoxChange}
                placeholder="Book Search"
                id="search"
                className={this.state.navCloseMobile}
              />
              <button
                onClick={this.handleSearchSubmit}
                className="btn-small waves-effect waves-light searchBtn"
                type="submit"
              >
                <i className="material-icons">search</i>
              </button>
            </form>
          </li>
          <li className="bold">
            <a href="/" className="sidenav-close waves-effect waves-teal">
              Home
            </a>
          </li>
          <li className="bold">
            <a href="/saved" className="sidenav-close waves-effect waves-teal">
              Saved
            </a>
          </li>
          <li className="bold">
            <a href="/about" className="sidenav-close waves-effect waves-teal">
              About
            </a>
          </li>
        </ul>
      </React.Fragment>
    );
  }
}

export default Nav;
