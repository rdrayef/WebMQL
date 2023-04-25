/* const express = require("express");
const service = require("./server/services/biblio-service");
const AuthorDAO = require("./server/dao/author-dao");
const cors = require("cors");

//1. Création d'une instance du serveur express
const app = express();
//2. Programmation des middlewares
app.use((req, res, next) => {
  console.log(">>> ceci est un middleware personaliseé!");
  next();
});
app.use(express.static("webapp/public"));
//Une fonction middleware qui autorise des clients externes
//a accéder a notre serveur express
app.use(cors());
//3. Le routage
app.get("/biblio/authors", (req, res) => {
  service.getAllAuthors((result) => {
    res.send(result.data);
  });
});
//4. Démarrage du Serveur
app.listen(8080, () => {
  console.log("Serveur bien démarée...");
});

//test
class Dao extends AuthorDAO {
  select() {}
}
let dao = new Dao();
dao.select();
 */

const Server = require("./server/server");

const server = new Server(8080);
server.start();
