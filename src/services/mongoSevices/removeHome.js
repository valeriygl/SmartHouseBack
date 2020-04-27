const { House } = require('../../models/mongoModels');

const removeHome = async id => {
  const home = await House.findByIdAndDelete(id);

  return home;
};

module.exports = removeHome;
