var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var tables = [{
routeName: "yohan",
name: "Yohan Bregortovitch",
phone:15089747723,
email:"IamAPir@te@yahoo.com",
uniqueId:"The Butxxher"
}]

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/reservations", function(req, res) {
  res.sendFile(path.join(__dirname, "reservations.html"));
});
app.get("/tables", function(req, res){
  res.sendFile(path.join(__dirname, "tables.html"));
});

// Displays all characters
// app.get("/api/characters", function(req, res) {
//   return res.json(characters);
// });

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});