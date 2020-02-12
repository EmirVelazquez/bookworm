import React from "react";
import BookCard from "../components/BookCard";
import "./Pages.css";

const Books = props => {
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
            <p>You searched for:</p>

            <BookCard
              key={props._id}
              id={props._id}
              title={props.title}
              author={props.author}
              synopsis={props.synopsis}
              image={props.image}
              link={props.link}
            />

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
