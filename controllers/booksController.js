const db = require("../models");
const axios = require("axios");
const API_KEY = process.env.GOOGLE_API;

// Defining methods for the booksController to handle database requests
module.exports = {
  findAll: function(req, res) {
    db.Book.find(req.query)
      .sort({ date: -1 }) // The results are sorted by descending order
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Book.findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Book.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Book.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Book.findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  grabGoogleBooks: function(req, res) {
    axios
      .get(
        "https://www.googleapis.com/books/v1/volumes?q=" +
          req.params.book +
          "&maxResults=5&printType=books&key=" +
          API_KEY
      )
      .then(function(response) {
        return res.json({ items: response.data.items });
      })
      .catch(err => console.log(err));
  }
};
