const db = require('../../../models/sqlModels');

const deleteHomeById = id => {
  const House = db.house;

  return House.destroy({ where: { id } });
};

module.exports = deleteHomeById;
