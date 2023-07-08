// requre the library
const mongoose = require("mongoose");

// connect to database
mongoose.connect("mongodb://127.0.0.1:27017/list-db");

// acquire the connection to check if successfull
const db = mongoose.connection;

db.on("error", console.error.bind(console, "Error while connecting to DB"));

// up and running then print this message
db.once("open", function () {
  console.log("Successfully Connected to DataBase");
});
