const cors = require("cors");

//1. Création d'une instance du serveur express
const express = require("express");
const authorsRouter = require("./routes/authors-router");

class Server {
  constructor(port = 8080) {
    this.port = port;
    this.app = express();
    this.config();
    this.routing();
  }

  config() {
    //2. Programmation des middlewares
    this.app.use((req, res, next) => {
      console.log(">>> ceci est un middleware personaliseé!");
      next();
    });
    this.app.use("/biblio/authors", authorsRouter);
    this.app.use(express.static("webapp/public"));
    //Une fonction middleware qui autorise des clients externes
    //a accéder a notre serveur express
    this.app.use(cors());
  }

  routing() {
    //3. Le routage
    this.app.get("/biblio/authors", (req, res) => {
      service.getAllAuthors((result) => {
        res.send(result.data);
      });
    });
  }

  start() {
    //4. Démarrage du Serveur
    this.app.listen(this.port, () => {
      console.log("Server is running ...");
    });
  }
}

module.exports = Server;
