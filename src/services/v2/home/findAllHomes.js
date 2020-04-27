const db = require('../../../models/sqlModels');

const findAllHomes = () => {
  const House = db.house;

  return House.findAll();
};

module.exports = findAllHomes;
