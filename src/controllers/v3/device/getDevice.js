const House = require('../../../models/mongoModels/houseModel');

const getDevice = async (req, res, next) => {
  const { id, homeid } = req.params;
  const house = await House.find(homeid);
  const device = house.devices.id(id);
  res.json(device);
};

module.exports = getDevice;
