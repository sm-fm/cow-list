const db = require('../db');

module.exports = {
  getAll: () => {
    return db.promise().query('SELECT * FROM cows');
  },
  create: (name, description) => {
    return db.promise().query(`INSERT INTO cows (name, description) VALUES ("${name}", "${description}");`);
  }
}