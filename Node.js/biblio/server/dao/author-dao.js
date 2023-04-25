class AuthorDAO {
  constructor() {
    if (new.target == AuthorDAO) {
      throw new Error("It is an Abstract class ,Can not be Instantiated");
    }
  }

  select() {
    throw new Error("Must be Implemented");
  }
}

module.exports = AuthorDAO;
