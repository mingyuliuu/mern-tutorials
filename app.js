const express = require("express");
const { ObjectId } = require("mongodb");
const { connectToDb, getDb } = require("./database");

// init app and middleware
const app = express();

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
  let books = [];

  /* find() returns a cursor that points to a set of documents outlined by our query.
     We can then use toArray and forEach methods */
  db.collection("books")
    .find()
    .sort({
      author: 1, // sort by author in ascending order
    })
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
      .catch((err) => {
        res.status(500).json({ error: "Could not fetch the document" });
      });
  }
});
