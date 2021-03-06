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

app.use(express.static('public'));

//set notes to read the db.json file and parse it
var notes = JSON.parse(fs.readFileSync('./db/db.json'));

// HTML routes
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "./public/notes.html"));
});

// API routes
app.get("/api/notes", function(req, res) {
    // res.sendFile(path.join(__dirname, "./db/db.json"));
    return res.json(notes);
});

app.post("/api/notes", function(req, res) {
    var newNote = req.body;
    newNote.id = notes.length + 1;
    // console.log(newNote);
    notes.push(newNote);
    fs.writeFile('./db/db.json', JSON.stringify(notes), function(err) {
        if (err) throw err;
    });
    res.send();
    // console.log(notes);
});

app.delete("/api/notes/:id", function(req, res) {
    // var id = req.params.id;
    // console.log(id);
    notes.splice(req.params.id-1, 1);
    // notes.id = notes[i+1];
    // console.log(notes);
    fs.writeFile('./db/db.json', JSON.stringify(notes), function(err) {
        if (err) throw err;
    });
    // for (i = 0; i < notes.length; i++) {
    //     var newId = req.body;
    //     newId.id = notes[i].id + 1;
    // };
    // console.log(notes);
    res.send();
});

// start the server
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT)
})