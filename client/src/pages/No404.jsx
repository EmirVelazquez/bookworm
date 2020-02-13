import React, { Component } from "react";
import "./Pages.css";

class No404 extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container bodyContainer">
          <h1>
            <span role="img" aria-label="Face With Rolling Eyes Emoji">
              🙄
            </span>
          </h1>
          <h1>404 Page Not Found</h1>
        </div>
      </React.Fragment>
    );
  }
}

export default No404;
