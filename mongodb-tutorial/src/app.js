require('dotenv').config()

const express = require("express");
const { ObjectId } = require("mongodb");
const { connectToDb, getDb } = require("./database");

// init app and middleware
const app = express();
app.use(express.json());

// database connection
let db;
connectToDb((err) => {
  if (!err) {
    // success
    app.listen(3000, () => {
      console.log("app listening on port 3000");
    });
    db = getDb();
  }
});

// routes
app.get("/books", (req, res) => {
  // current page
  const page = req.query.p || 0;
  const booksPerPage = 3;

  let books = [];

  /* find() returns a cursor that points to a set of documents outlined by our query.
     We can then use toArray and forEach methods */
  db.collection("books")
    .find()
    .sort({
      author: 1, // sort by author in ascending order
    })
    .skip(page * booksPerPage)
    .limit(booksPerPage)
    .forEach((book) => {
      books.push(book);
    })
    .then(() => {
      res.status(200).json(books);
    })
    .catch(() => {
      res.status(500).json({ error: "Could not fetch the documents" }); // 500 for server errors
    });
});

app.get("/books/:id", (req, res) => {
  if (!ObjectId.isValid(req.params.id)) {
    res.status(500).json({ error: "Not a valid document ID" });
  } else {
    db.collection("books")
      .findOne({ _id: ObjectId(req.params.id) })
      .then((doc) => {
        res.status(200).json(doc);
      })
      .catch(() => {
        res.status(500).json({ error: "Could not fetch the document" });
      });
  }
});

app.post("/books", (req, res) => {
  const book = req.body; // a book object

  db.collection("books")
    .insertOne(book)
    .then((result) => {
      res.status(201).json(result);
    })
    .catch(() => {
      res.status(500).json({ error: "Could not create a new document" });
    });
});

app.delete("/books/:id", (req, res) => {
  if (!ObjectId.isValid(req.params.id)) {
    res.status(500).json({ error: "Not a valid document ID" });
  } else {
    db.collection("books")
      .deleteOne({ _id: ObjectId(req.params.id) })
      .then((result) => {
        res.status(200).json(result);
      })
      .catch(() => {
        res.status(500).json({ error: "Could not delete the document" });
      });
  }
});

app.patch("/books/:id", (req, res) => {
  const updates = req.body; 

  if (!ObjectId.isValid(req.params.id)) {
    res.status(500).json({ error: "Not a valid document ID" });
  } else {
    db.collection("books")
      .updateOne({ _id: ObjectId(req.params.id) }, { $set: updates })
      .then((result) => {
        res.status(200).json(result);
      })
      .catch(() => {
        res.status(500).json({ error: "Could not update the document" });
      });
  }
});
