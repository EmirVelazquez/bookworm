import React from "react";
import GoogleLogo from "./Google.png";
import "./style.css";

const BookCard = props => {
  return (
    <React.Fragment>
      <div className="bookCardBody z-depth-5">
        <div className="card horizontal">
          <div className="card-image">
            <img
              className="bookImg"
              src={props.bookImage}
              alt={props.bookTitle}
            />
          </div>
          <div className="card-stacked">
            <div className="cardInfo">
              <p className="header bookTitle">{props.bookTitle}</p>
              <p className="header bookAuthor">{props.bookAuthor}</p>
            </div>
            <div className="cardInfo">
              <p className="bookSynopsis">{props.bookSynopsis}</p>
            </div>
            <div className="card-action">
              <a
                href={props.bookLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-floating pulse googleLogoBtn"
              >
                <img
                  src={GoogleLogo}
                  alt="Google Logo"
                  className="googleLogo"
                />
              </a>
              {/* Using a ternary operator to render the right button for both path's */}
              {props.bookId ? (
                <button
                  className="btn-floating deleteBtn"
                  onClick={props.onDeleteBtnClick}
                >
                  <i className="material-icons saveIcon">delete_forever</i>
                </button>
              ) : (
                <button
                  className="btn-floating saveBtn"
                  onClick={props.onSavedBtnClick}
                >
                  <i className="material-icons saveIcon">save_alt</i>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default BookCard;
