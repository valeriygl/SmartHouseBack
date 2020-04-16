const db = require('../../../models');

const House = db.house;

const findAllHomes = () => {
  return House.findAll();
};

module.exports = findAllHomes;
