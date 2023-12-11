// Global file
const http = require("http");
// Third party
const express = require("express");

const app = express();

app.use("/add-product", (req, res, next) => {
  res.send("<h1 style='color: blue'>Product page</h1>");
});

app.use((req, res, next) => {
  res.send("<h1>Hello from express</h1>");
});

app.listen(3000, () => {
  console.log("Server now running....");
});
