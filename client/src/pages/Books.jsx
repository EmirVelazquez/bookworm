import React from "react";
import BookCard from "../components/BookCard";
import "./Pages.css";

const Books = props => {
  return (
    <React.Fragment>
      <div className="container bodyContainer z-depth-5">
        <div className="row">
          <div className="col s12">
            <div className="card blue-grey darken-1">
              <div className="card-content white-text">
                <span className="card-title">
                  Satisfy Your Literary Appetite
                </span>
                <p>
                  Here you can search for any books of interest with the power
                  of Google's Book Engine. Then you can save them for future
                  consumption.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bodyContainer z-depth-5 resultsContainer">
        <span className="card-title">Results</span>
        <div className="container">
          {props.userSearch.map((book, i) => (
            <BookCard
              // key={"Search result: " + i}
              // googleId={book.id}
              // bookTitle={book.volumeInfo.title}
              // bookAuthor={book.volumeInfo.authors[0]}
              // bookSynopsis={book.volumeInfo.description}
              // bookImage={book.volumeInfo.imageLinks.thumbnail}
              // bookLink={book.volumeInfo.infoLink}
              key={"Search result: " + i}
              googleId={book._id}
              bookTitle={book.title}
              bookAuthor={book.author}
              bookSynopsis={book.synopsis}
              bookImage={book.image}
              bookLink={book.link}
            />
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Books;
