const http = require("http");
const fs = require("fs");
function sendFile(resource, res) {
  fs.readFile(resource, "utf-8", (err, data) => {
    if (err) {
      res.write(`<h1>Ressource introuvable : ${resource}</h1>`);
    } else {
      res.write(data);
    }
    res.end();
  });
}

const server = http.createServer((req, res) => {
  if (req.url.toString() == "/biblio") {
    sendFile("./index.html", res);
  } else if (req.url.toString() == "/biblio/authors") {
    res.write(`<h1>Liste des auteurs</h1>`); // il faut fermer la socket
    res.end();
  }
});

server.listen(8080, () => {
  console.log("server is running ...");
});
