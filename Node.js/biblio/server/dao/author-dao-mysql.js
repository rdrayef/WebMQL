const AuthorDAO = require("./author-dao");
const mysql = require("mysql");

class AuthorDaoMySQL extends AuthorDAO {
  constructor() {
    super();
    let params = {
      host: "127.0.0.1",
      database: "biblio",
      user: "root",
      password: "",
    };
    this.db = mysql.createConnection(params);
    this.db.connect((err) => {
      if (err) {
        console.log("Erreur: ", err.message);
      } else {
        console.log("Connexion bien établie...");
      }
    });
  }
  select(callback) {
    let query = "SELECT * FROM Authors";
    this.db.query(query, (err, result, fields) => {
      if (err) {
        console.log("Erreur: " + err.message);
      } else {
        callback({
          data: result,
          fields: fields.map((field) => field.name),
        });
      }
    });
  }
}

module.exports = new AuthorDaoMySQL();
