const db = require('../../../models');

const deleteHomeById = id => {
  const House = db.house;

  return House.destroy({ where: { id } });
};

module.exports = deleteHomeById;
