const db = require('../../../models');

const Device = db.device;

const addDevice = device => {
  return Device.create(device);
};

module.exports = addDevice;
