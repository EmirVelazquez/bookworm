import React from "react";
import BookCard from "../components/BookCard";
import "./Pages.css";

// class Books extends Component {
const Books = props => {
  // state = {
  //   isDoneLoading: false
  // };
  // componentDidMount = () => {
  //   this.setState({ isDoneLoading: true });
  //   console.log(this);
  //   // let searches = this.props.userSearch;
  //   // console.log(searches);
  // };

  // render() {
  // const test = this.props.userSearch;
  // console.log(test);
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
            <div>
              {props.userSearch.map(props.userSearch, i => (
                <BookCard
                  key={i}
                  id={i}
                  bookTitle={props.userSearch.volumeInfo.title}
                  bookAuthor={props.userSearch.volumeInfo.authors[0]}
                  bookSynopsis={props.userSearch.volumeInfo.description}
                  bookImage={props.userSearch.imageLinks.thumbnail}
                  bookLink={props.userSearch.infoLink}
                />
              ))}
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
  // }
};

export default Books;
