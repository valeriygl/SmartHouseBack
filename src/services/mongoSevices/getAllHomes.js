const House = require('../../models/mongoModels/houseModel');

const getAllHomes = async () => {
  const homes = await House.find({});

  return homes;
};

module.exports = getAllHomes;
