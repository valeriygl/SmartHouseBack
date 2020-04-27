const { House } = require('../../models/mongoModels');

const addDevice = async (id, data) => {
  const house = await House.findById(id);
  house.devices.push(data);
  const result = await house.save();
  return result.devices.slice(-1);
};

module.exports = addDevice;
