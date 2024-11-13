const express = require("express");
const app = express();

app.use(express.static("./public"));
app.set("view engine", "ejs");
app.get("/", function (req, res) {
  res.render("index");
});
app.get("/contact", function (req, res) {
  res.render("contact");
});
app.get("/", function (req, res) {
  throw Error("ERROR Could NOT FOUND");
});
app.get("/error", function (req, res, next) {
  throw Error("ERROR Could NOT FOUND");
});
//ERROR HANDLING
app.use(function errorHandler(err, req, res, next) {
  if (res.headersSent) {
    return next(err);
  }
  res.status(500);
  res.render("error", { error: err });
});
app.listen(3000);
