const db = require('../../../models');

const Device = db.device;

const deleteDeviceById = id => {
  return Device.destroy({ where: { id } });
};

module.exports = deleteDeviceById;
