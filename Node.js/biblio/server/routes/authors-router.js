const { Router } = require("express");
const service = require("../services/biblio-service");

const router = new Router();
router.get("/", (req, res) => {
  service.getAllAuthors((result) => {
    const reducer = (total, author) => total + 1;
    const sumauthors = result.data.reduce(reducer, 0);
    //res.send(result.data);
    //Retourner une chaine html avec feuille de styles
    const htmlString = `
    <html>
      <head>
        <title>List of Authors</title>
        <style>
          /* CSS styles go here */
          table {
            border-collapse: collapse;
          }
          th, td {
            border: 1px solid black;
            padding: 5px;
          }
        </style>
      </head>
      <body>
        <h1>List of Authors</h1>
        <h3>${sumauthors} Auteurs trouvées</h3>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Year of Birth</th>
            </tr>
          </thead>
          <tbody>
            ${result.data
              .map(
                (author) => `
              <tr>
                <td>${author.Au_ID}</td>
                <td>${author.Author}</td>
                <td>${author.Year_Born}</td>
              </tr>
            `
              )
              .join("")}
          </tbody>
        </table>
      </body>
    </html>
  `;
    res.send(htmlString);
  });
});

module.exports = router;
