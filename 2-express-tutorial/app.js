const http = require("http");

const express = require("express");
const app = express();

// app.get
app.get("/", (req, res) => {
  res.status(200).send("Home Page");
});

app.get("/about", (req, res) => {
  res.status(200).send("About Page");
});

// app.post
// app.put
// app.delete

// app.all -- works with all of them
app.all("*", (req, res) => {
  res.status(404).send("<h1>resource not found</h1>");
});
// app.use -- responsible for middleware
// app.listen
app.listen(5000, () => {
  console.log("...");
});
