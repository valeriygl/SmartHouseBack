const db = require('../../../models');

const deleteDeviceById = id => {
  const Device = db.device;

  return Device.destroy({ where: { id } });
};

module.exports = deleteDeviceById;
