// dependencies
var express = require("express");
var path = require("path");
var fs = require("fs");

// set up express
var app = express();
var PORT = process.env.PORT || 3600;

// handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// HTML routes
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "./public/notes.html"));
});


// start the server
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT)
})