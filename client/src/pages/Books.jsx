import React from "react";
import BookCard from "../components/BookCard";
import "./Pages.css";
import PlaceHolder from "./placeHolderThumbnail.jpg";

const Books = props => {
  return (
    <React.Fragment>
      <div className="bodyContainer z-depth-5">
        <div className="row">
          <div className="col s12">
            <div className="card blue-grey darken-1">
              <div className="card-content">
                <span className="resultsHeader card-title">
                  Satisfy Your Literary Appetite
                </span>
                <p className="resultsInstr">
                  Here you can search for any books of interest with the power
                  of Google's Book Engine. Afterwards, you can save any results
                  for future consumption.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bodyContainer z-depth-5 resultTitleContainer">
        <span className="card-title resultTitle">Results</span>
        <div className="container">
          {props.userSearch.map((book, i) => (
            <BookCard
              key={"result" + i}
              googleId={book.id ? book.id : null}
              bookTitle={
                book.volumeInfo.title.length > 0
                  ? book.volumeInfo.title
                  : "No Book Title Found"
              }
              bookAuthor={
                book.volumeInfo.authors
                  ? book.volumeInfo.authors[0]
                  : "No Author/s Found"
              }
              bookSynopsis={
                book.volumeInfo.description
                  ? book.volumeInfo.description
                  : "No Synopsis Available"
              }
              bookImage={
                book.volumeInfo.imageLinks
                  ? book.volumeInfo.imageLinks.thumbnail
                  : PlaceHolder
              }
              bookLink={
                book.volumeInfo.infoLink
                  ? book.volumeInfo.infoLink
                  : "https://books.google.com/"
              }
            />
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Books;
