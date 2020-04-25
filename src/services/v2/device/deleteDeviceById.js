const db = require('../../../models/sqlModels');

const deleteDeviceById = id => {
  const Device = db.device;

  return Device.destroy({ where: { id } });
};

module.exports = deleteDeviceById;
