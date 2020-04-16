const db = require('../../../models');

const House = db.house;

const updateHomeById = (id, newHouse) => {
  return House.update(newHouse, { where: { id } });
};

module.exports = updateHomeById;
