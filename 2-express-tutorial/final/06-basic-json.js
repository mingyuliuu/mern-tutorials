const express = require("express");
const app = express();

const { products } = require('../data')
app.get('/', (req, res) => {
  res.json(products)
})

/*
app.get("/", (req, res) => {
  res.json([
    { name: "abaaba", age: 9 },
    { name: "anmm", age: 100 },
  ]);
});
*/

app.listen(5000, () => {
  console.log("Server is listening on port 5000....");
});
