const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 8080;

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "/home.html"));
});

app.get("/about", function (req, res) {
  res.sendFile(path.join(__dirname, "/about.html"));
});

app.get("/contact", function (req, res) {
  res.sendFile(path.join(__dirname, "/contact.html"));
});

app.get("/home", function (req, res) {
  res.redirect("/");
});

app.listen(port);
console.log("Server started at http://localhost:" + port);
