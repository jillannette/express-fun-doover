const express = require("express");
const app = express();

//TO PASS DATA BETWEEN MIDDLEWARE FUNCTIONS
//Remember, with each "request/response cycle", 
//there is only one request object and one response 
//object, so we can use those to pass data between middleware functions.
app.use((req, res, next) => {
  req.requestTime = new Date().toString();
  next();
});

app.get("/", (req, res) => {
  const responseText = "Requested at: " + req.requestTime + ". Like a boss! ";
  res.send(responseText);
});
//Requested at: Thu Dec 29 2022 11:24:09 GMT-0500 (Eastern Standard Time). Like a boss!

app.listen(8000);

