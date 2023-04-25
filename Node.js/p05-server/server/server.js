const express = require("express");

class Server {
  constructor(port = 8080) {
    this.port = port;
    this.app = express();
    this.config();
    this.routing();
  }

  config() {
    // this.app.use
    this.app.use(express.static("webapp/public"));
  }

  routing() {
    this.app.get("/biblio/docs", (req, res) => {
      res.send("<h1>Liste des documents</h1>");
    });
  }

  start() {
    this.app.listen(this.port, () => {
      console.log("Server is running ...");
    });
  }
}

module.exports = Server;
