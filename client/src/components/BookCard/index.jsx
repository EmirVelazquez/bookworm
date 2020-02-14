import React from "react";
import "./style.css";

const BookCard = props => {
  return (
    <React.Fragment>
      <div class="bookCardBody z-depth-5">
        <div class="card horizontal">
          <div class="card-image">
            <img src={props.bookImage} alt={props.bookTitle + " Image"} />
          </div>
          <div class="card-stacked">
            <div class="card-content">
              <p class="header bookTitle">{props.bookTitle}</p>
              <h4>By: {props.bookAuthor}</h4>
              <p>{props.bookSynopsis}</p>
            </div>
            <div class="card-action">
              <a
                href={props.bookLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Google
              </a>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default BookCard;
