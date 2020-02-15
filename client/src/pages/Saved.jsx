import React from "react";
import "./Pages.css";
import BookCard from "../components/BookCard";

const Saved = props => {
  return (
    <React.Fragment>
      <div className="bodyContainer z-depth-5">
        <div className="row">
          <div className="col s12">
            <div className="card blue-grey darken-1">
              <div className="card-content">
                <span className="resultsHeader card-title">Saved Books</span>
                <p className="resultsInstr">
                  Here you can find the books you have chosen to hold in your
                  bookshelf. If for whatever reason you feel the need to tidy up
                  a bit, you may also delete any book from the list.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bodyContainer z-depth-5 resultTitleContainer">
        <span className="card-title resultTitle">Book Shelf</span>
        <div className="container">
          {props.userSaved.map((book, i) => (
            <BookCard
              key={"Search result: " + i}
              bookId={book._id}
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

export default Saved;
