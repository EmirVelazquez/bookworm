import React from "react";
import "./Pages.css";

const Books = () => {
  return (
    <div className="container bodyContainer">
      <div className="row">
        <div className="col s12">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title">Satisfy Your Literary Appetite</span>
              <p>
                Here you can search for any books of interest with the power of
                Google's Book Engine. Then you can save them for future
                consumption.
              </p>
            </div>
            <div className="card-action">
              <a href="/404">Dead Link</a>
              <a href="/404">This is a link</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Books;
