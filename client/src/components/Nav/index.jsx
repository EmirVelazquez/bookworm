import React from "react";
import bookwormLogo from "./bookwormLogo.png";
import "./style.css";

const Nav = () => {
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
                    <i className="material-icons">menu</i>
                  </div>
                </div>
                <h1 className="header">Bookworm</h1>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <ul id="nav-mobile" className="sidenav sidenav-fixed">
        <li className="logo">
          <a id="logo-container" href="/" className="sidenav-close brand-logo">
            <img src={bookwormLogo} alt="Bookworm Logo" id="bookwormLogo" />
          </a>
        </li>
        <li className="search">
          <div className="search-wrapper">
            <input
              id="search"
              placeholder="Search"
              className={"addProp:sidenav-close"}
            />
          </div>
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
