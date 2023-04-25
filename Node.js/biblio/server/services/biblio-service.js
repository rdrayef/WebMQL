const authorDaoMysql = require("../dao/author-dao-mysql");

class BiblioService {
  constructor(authorDao) {
    this.authorDao = authorDao;
  }

  getAllAuthors(callback) {
    this.authorDao.select(callback);
    // return [
    //   { id: 101, name: "James Gosling" },
    //   { id: 102, name: "Brendan Eich" },
    //   { id: 103, name: "Erich Gamma" },
    // ];
  }
}

const biblioservice = new BiblioService(authorDaoMysql);

module.exports = biblioservice;
