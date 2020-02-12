import React from "react";
import "./style.css";

const BookCard = props => {
  return (
    <div className="bookCardBody">
      <h1>Title: {props.title}</h1>
    </div>
  );
};

export default BookCard;
