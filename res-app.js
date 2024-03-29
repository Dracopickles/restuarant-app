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
uniqueId:"The Butxxxher"
}]

var waitList = [{
routeName: "jackie",
name: "Jackie The Man Chan",
phone:19094206969,
email:"floppyDoop@poop.com",
uniqueId:"AssMaster4000"
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

app.get("/api/tables", function(req, res) {
  return res.json(tables);
});

app.get("/api/waitList", function(req, res){
  return res.json(waitList);
});

console.log(tables);
console.log(waitList);

// Displays a single character, or returns false
app.get("/api/tables/:table", function(req, res) {
  var chosen = req.params.table;

  console.log(chosen);

  for (var i = 0; i < tables.length; i++) {
    if (chosen === tables[i].routeName) {
      return res.json(tables[i]);
    }
  }

  return res.json(false);
});

// Create New Characters - takes in JSON input
app.post("/api/tables", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body parsing middleware
  var newTable = req.body;

  // Using a RegEx Pattern to remove spaces from newCharacter
  // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
  newTable.routeName = newTable.name.replace(/\s+/g, "").toLowerCase();

  console.log(newTable);

  if (tables.length < 5){
  tables.push(newTable);
  }
  else{
    waitList.push(newTable)
  }
  res.json(newTable);
});

// Displays all characters
// app.get("/api/characters", function(req, res) {
//   return res.json(characters);
// });

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});