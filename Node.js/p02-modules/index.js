//Object Destructuring exports
const { random } = require("math");
const { getAuthors } = require("./biblio");
const { print, printFile } = require("./examples");

function main() {
  print("Object Destructuring");
  //printFile("./README.md");

  console.log(random(100));
  console.log(getAuthors());
}
main();
