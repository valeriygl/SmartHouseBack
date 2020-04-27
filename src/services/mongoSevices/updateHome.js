const House = require('../../models/mongoModels/houseModel');

const updateHome = async (id, data) => {
  const home = await House.findByIdAndUpdate(id, data);

  return home;
};

module.exports = updateHome;
