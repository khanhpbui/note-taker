const notes = require("express").Router();
const db = require("../db/db.json");
const { writeNotes } = require("../helpers/fsUtils");
const { v4: uuidv4 } = require("uuid");

notes
  .route("/")
  .get((req, res) => {
    console.log(db);
    res.json(db);
  })

  .post((req, res) => {
    const { title, text } = req.body;
    const objData = {
      title,
      text,
      id: uuidv4(),
    };
    console.log(objData);
    db.push(objData);
    console.log(db);
    writeNotes(db);
    res.json(objData);
  });
// notes.delete("/:id", (req, res) => {
//   const selectedId = req.params.id;
//   console.log(selectedId);
//   const dbLength = db.length;
//   for (let i = 0; i < dbLength; i++) {
//     if (JSON.stringify(db[i].id) === selectedId) {
//       db.splice(i, 1);
//       console.log("made it");
//     }
//     console.log(db);
//   }
//   res.json(db);
// });

module.exports = notes;
