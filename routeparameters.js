const express = require("express");
const app = express();

//=====ROUTING PARAMETERS======

app.get("/", function (req, res) {
  res.send("Hello world");
});

app.get("/profile/:username", function (req, res) {
  res.send(`hello from ${req.params.username}`);
});

app.listen(3000);

//it is used to make any route dynamic(means changes in runtime) to access use req.params
