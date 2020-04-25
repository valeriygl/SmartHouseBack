const House = require('../../models/mongoModels/houseModel');

const findHouseById = async id => {
  const house = await House.findById(id);
  return house;
};

module.exports = findHouseById;
