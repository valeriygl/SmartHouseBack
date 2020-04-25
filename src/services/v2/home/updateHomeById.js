const db = require('../../../models/sqlModels');

const updateHomeById = (id, newHouse) => {
  const House = db.house;

  return House.update(newHouse, { where: { id } });
};

module.exports = updateHomeById;
