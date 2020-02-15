import axios from "axios";

export default {
  // Get all existing books if there are any
  getBooks: function() {
    return axios.get("/api/books");
  },
  // Delete a book that is saved by the id given
  deleteOneBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Path for requesting books from Google Books API
  getGoogleBooks: function(book) {
    return axios.get("/api/books/getbook/" + book);
  }
};
