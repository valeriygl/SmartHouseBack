const { House } = require('../../models/mongoModels');

const findHouseById = async id => {
  const house = await House.findById(id);
  return house;
};

module.exports = findHouseById;
