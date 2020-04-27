const { House } = require('../../models/mongoModels');

const getAllHomes = async () => {
  const homes = await House.find({});

  return homes;
};

module.exports = getAllHomes;
