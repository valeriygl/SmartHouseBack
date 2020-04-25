const db = require('../../../models/sqlModels');

const addDevice = (device, houseId) => {
  const Device = db.device;

  return Device.create({ ...device, houseId });
};

module.exports = addDevice;
