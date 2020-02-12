import axios from "axios";

export default {
  // Get all existing books if there are any
  getBooks: function() {
    return axios.get("/api/books");
  },
  getGoogleBooks: function(book) {
    return axios.get("/api/books/getbook/" + book);
  }
};
