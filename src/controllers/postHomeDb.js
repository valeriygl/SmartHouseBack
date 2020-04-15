const db = require('../models');
const House = db.house;

exports.create = (req, res) => {
  // Validate request

  // Create a Tutorial
  const tutorial = {
    name: req.body.name,
  };

  // Save Tutorial in the database
  House.create(tutorial)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while creating the Tutorial.',
      });
    });
};
