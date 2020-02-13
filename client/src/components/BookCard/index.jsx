import React from "react";
import "./style.css";

const BookCard = props => {
  return (
    <div className="bookCardBody">
      <p id={props.id}>Title: {props.bookTitle}</p>
      <p>Author: {props.bookAuthor}</p>
      <p>Synopsis: {props.bookSynopsis}</p>
      <img src={props.bookImage} alt={props.bookTitle + " Image"} />
      <a href={props.bookLink} target="_blank" rel="noopener noreferrer">
        Google Link: {props.bookLink}
      </a>
    </div>
  );
};

export default BookCard;
