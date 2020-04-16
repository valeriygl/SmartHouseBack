const db = require('../../../models');

const House = db.house;

const deleteHomeById = id => {
  return House.destroy({ where: { id } });
};

module.exports = deleteHomeById;
