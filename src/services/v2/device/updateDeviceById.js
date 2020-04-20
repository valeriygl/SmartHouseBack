const db = require('../../../models');

const updateDeviceById = (id, newDevice) => {
  const Device = db.device;

  return Device.update(newDevice, { where: { id } });
};

module.exports = updateDeviceById;
