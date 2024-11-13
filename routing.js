const express = require("express");
const app = express();

//=====ROUTING======
app.get("/", function (req, res) {
  res.send("Hello World");
});

app.get("/profile", function (req, res) {
  res.send("Hell");
});
app.listen(3000);
