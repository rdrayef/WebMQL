const fs = require("fs");

const title = "CommonJS Module System";

function print(msg) {
  console.log("## " + title + " : " + msg);
}

function printFile(source) {
  console.log("Contenu du fichier " + source);
  fs.readFile(source, "utf-8", (err, data) => {
    if (err) {
      console.log("Erreur : " + err.message);
    } else {
      console.log(data);
    }
  });
  console.log('Fin "Lecture"');
}

module.exports = print;
module.exports.printFile = printFile;
