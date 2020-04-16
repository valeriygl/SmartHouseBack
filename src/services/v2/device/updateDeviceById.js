const db = require('../../../models');

const Device = db.device;

const updateDeviceById = (id, newDevice) => {
  return Device.update(newDevice, { where: { id } });
};

module.exports = updateDeviceById;
