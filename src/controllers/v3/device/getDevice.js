const House = require('../../../models/mongoModels/houseModel');

const getDevice = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { homeid } = req.locals;
    const house = await House.find(homeid);
    const device = house.devices.id(id);
    res.json(device);
  } catch (err) {
    next(err);
  }
};

module.exports = getDevice;
