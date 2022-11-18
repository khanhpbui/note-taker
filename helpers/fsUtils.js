const fs = require("fs");

function readNotes(content) {
  fs.readFile("./db/db.json", async (err, data) => {
      const objData = await JSON.parse(data);
      writeNotes(objData);
    }
  );
}

function writeDb(content) {
  fs.writeFile("./db/db.json", JSON.stringify(content, null, 2), (err) => {
    err ? console.log(err) : console.log("File has been updated! 👍");
  });
}

module.exports = {
  writeDb,
  readNotes
};
