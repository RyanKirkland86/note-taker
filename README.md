# Note Taker Using Express.js

## Project:

This is an application that can be used to write, save, and delete notes. This application uses an Express.js backend to save and retrieve note data from a JSON file.

[Deployed Site](https://gentle-brook-09674.herokuapp.com/)

![Image](https://github.com/RyanKirkland86/note-taker/blob/main/public/assets/ExpressNoteTaker%20HOME.jpg)

<br>

## Technologies Used:
- [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [JavaScript](https://www.javascript.com/)
- [Node.js](https://nodejs.org/en/)
- [Inquirer.js](https://www.npmjs.com/package/inquirer)
- [Express.js](https://expressjs.com/)
- [JSON](https://www.json.org/json-en.html)
- [Visual Studio Code](https://code.visualstudio.com/)

## Installation:

To install the necessary dependencies, these lines of code must be run in the command line:

```
npm install express

npm install path
```

## Process:

When the user clicks on the Get Started button, they are taken to the note take section. The user can add a Note Title and Note Text into the field. When they are ready to save they can click the save icon and the note is added to the list. All notes added can be clicked on on the lefthand side to retrieve the note into the field for viewing. The user can either click the pencil icon to write a new note, or click the trash can icon to delete a note.

![Image](https://github.com/RyanKirkland86/note-taker/blob/main/public/assets/ExpressNoteTaker%20DEMO.jpg)

```javascript
app.post("/api/notes", function(req, res) {
    var newNote = req.body;
    newNote.id = notes.length + 1;
    notes.push(newNote);
    fs.writeFile('./db/db.json', JSON.stringify(notes), function(err) {
        if (err) throw err;
    });
    res.send();
});
```

This bit of code is what makes the notes. Each note is grabbed from the body input, assigned a unique ID, and then pushed into the notes array. Then the notes array is stringified and written to our dynamic JSON file.

## Authors:
- Ryan Kirkland
- [GitHub](https://github.com/RyanKirkland86)
- [LinkedIn](https://www.linkedin.com/in/ryan-kirkland-619942200/)
- [Contributors](https://bootcamp.berkeley.edu/coding/)

## License:
This project is licensed under the MIT License.

## Acknowledgements:
Thank you to UCB Extension for the help with this project.