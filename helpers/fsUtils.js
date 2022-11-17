const fs = require("fs");

// function readAndAppendNotes(content) {
//   fs.readFile("./db/db.json", (err, data) => {
//     if (err) {
//       console.log(err);
//     } else {
//       const objData = JSON.parse(data);
//       objData.push(content);
//       writeNotes(objData);
//     }
//   });
// }

function writeNotes(content) {
  fs.writeFile("./db/db.json", JSON.stringify(content, null, 2), (err) => {
    err ? console.log(err) : console.log("File has been updated! 👍");
  });
}

module.exports = {
  writeNotes,
};
