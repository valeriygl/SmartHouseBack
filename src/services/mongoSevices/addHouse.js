const { House } = require('../../models/mongoModels');

const addHouse = async data => {
  const house = new House(data);
  const result = await house.save();
  return result;
};

module.exports = addHouse;
