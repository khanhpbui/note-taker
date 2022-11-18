const notes = require("express").Router();
let db = require("../db/db.json");
const { writeDb, readNotes } = require("../helpers/fsUtils");
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
    writeDb(db);
    res.json(db);
  });

notes.delete("/:id", (req, res) => {
  const selectedId = req.params.id;
  const newDb = [];

  for (let i = 0; i < db.length; i++) {
    if (db[i].id != selectedId) {
      newDb.push(db[i]);
    }
  }
  db = newDb;

  writeDb(db);

  res.json(db);
});

module.exports = notes;
