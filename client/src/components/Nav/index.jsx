import React from "react";
import bookwormLogo from "./bookwormLogo.png";
import "./style.css";

const Nav = props => {
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
              value={props.searchValue} // Sending a request to the parent component => app.js
              type="text"
              name="search"
              onChange={props.searchBoxChange} // Sending a request to the parent component => app.js
              // If any key is pressed, check for enter key. If it's enter prevent submit of form.
              onKeyPress={e => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  // Then run handleSubmit handler
                  props.submitSearch(); // Sending a request to the parent component => app.js
                }
              }}
              placeholder="Book Search"
              id="search"
            />
            <button
              className="btn-small waves-effect waves-light searchBtn"
              type="button"
              onClick={props.submitSearch} // Sending a request to the parent component => app.js
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
};

export default Nav;
