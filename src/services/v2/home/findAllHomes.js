const db = require('../../../models');

const findAllHomes = () => {
  const House = db.house;

  return House.findAll();
};

module.exports = findAllHomes;
