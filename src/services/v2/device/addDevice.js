const db = require('../../../models');

const Device = db.device;

const addDevice = (device, houseId) => {
  return Device.create({ ...device, houseId });
};

module.exports = addDevice;
