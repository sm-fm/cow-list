var models = require('../models/cows');

module.exports = {
  get: (req, res) => {
    models.getAll()
      .then(cows => {
        res.status(200).send(cows[0]);
      })
      .catch(err => {
        console.log(err);
      });
  },
  post: (req, res) => {
    const { name, description } = req.body;
    models.create(name, description)
      .then(() => {
        res.sendStatus(201);
      })
      .catch(err => {
        console.log(err);
      });
  }
}