//==>npx nodemon .\filename.js for running the server or ==>node .\filename.js

//=====MIDDLEWARE====

//it is a function that is executed before routing
const express = require("express");
const app = express();

app.use(function (req, res, next) {
  next(); //pass the controller to next route if this is not given then it cannot be further excuted
});

app.get("/", function (req, res) {
  res.send("Hello World");
});
app.listen(3000);
